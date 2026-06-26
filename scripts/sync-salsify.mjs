#!/usr/bin/env node
// Sync Florestone products from Salsify -> app/products/salsify-catalog.generated.ts
// Run with: npm run sync:salsify
//
// Requires SALSIFY_API_TOKEN + SALSIFY_ORG_ID in .env.local.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'app/products/salsify-catalog.generated.ts');
const PUBLIC_IMAGES = resolve(ROOT, 'public/images');

function loadEnv() {
  const env = {};
  try {
    const txt = readFileSync(resolve(ROOT, '.env.local'), 'utf8');
    for (const line of txt.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
  } catch {
    console.error('Missing .env.local with SALSIFY_API_TOKEN + SALSIFY_ORG_ID.');
    process.exit(1);
  }
  if (!env.SALSIFY_API_TOKEN || !env.SALSIFY_ORG_ID) {
    console.error('SALSIFY_API_TOKEN or SALSIFY_ORG_ID not set in .env.local.');
    process.exit(1);
  }
  return env;
}

// Salsify wraps localized fields as { 'en-US': 'value' }; collapse to plain string.
const localized = (v) => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map(localized).filter(Boolean).join(', ');
  if (typeof v === 'object') return v['en-US'] ?? Object.values(v)[0] ?? '';
  return String(v);
};

async function fetchAllFlorestone(env) {
  const all = [];
  for (let page = 1; page < 20; page++) {
    const qs = new URLSearchParams({
      filter: "='Brand':'Florestone'",
      per_page: '100',
      page: String(page),
    });
    const url = `https://app.salsify.com/api/v1/orgs/${env.SALSIFY_ORG_ID}/products?${qs}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${env.SALSIFY_API_TOKEN}` } });
    if (!res.ok) throw new Error(`Salsify ${res.status}: ${await res.text()}`);
    const data = await res.json();
    all.push(...data.data);
    if (data.data.length < 100) break;
  }
  return all;
}

// ─── Category classifier ─────────────────────────────────────────────────────
// Maps a Salsify product to one of the 6 legacy florestone.com categories.

// Filter labels — match florestone-main.emergent.host/products.
// Bathtubs is added because Salsify has 42 real bathtub SKUs that would otherwise be dropped.
const CATEGORIES = [
  'Shower Bases',
  'Shower Stalls',
  'Shower Walls',
  'Barrier-Free',
  'Bathtubs',
  'Mop Sinks',
];

function classify(p) {
  const cat = localized(p['Product Category']).trim();
  const name = localized(p['Product Name']).trim();
  const spn = localized(p['Sellable Part Number']);
  const id = p['salsify:id'];
  const text = `${id} ${name} ${spn}`.toUpperCase();

  if (/BARRIER[\s-]?FREE|[-\s]BF\b|\bBF\s|ACCESSIBLE|HANDICAP|HANDIAP|\b(?:62|60|52|34)H\b|23-2HR|46-2HR|\b[45]00\s/.test(text))
    return 'Barrier-Free';
  if (cat === 'Bathtub' || /REYNA|DIANA|CATRINA|VENETIAN|PEGASUS|ORIENTAL|ISLAND|APRON|608[56]/.test(text))
    return 'Bathtubs';
  if (cat === 'Wall') return 'Shower Walls';
  // Tub Showers (TS-3W, HTS, 6032TS, etc.) are walled enclosures with a tub — group with Shower Stalls.
  if (/TUB[\s-]?SHOWER|TS-3W|TS\s3W|HTS|60[34][26]TS|-3W\b|3WTB|SHOWER STALL|2PC-|3PC-|SHOWER WALL|TILE BACK|SMOOTH WALL/.test(text))
    return 'Shower Stalls';
  if (cat === 'Sink' || /\bMOP\b|UTILITY|MSR|RECEPTOR/.test(text))
    return 'Mop Sinks';
  return 'Shower Bases';
}

// Series mapping: S / F / T / Terrazzo — derived from Product Name + ID patterns.
//   S Series   — Saflor® compression-molded recess bases & corners
//   F Series   — RTM fiberglass / AcrylX™ bases + fiberglass walls
//   T Series   — cast terrazzo shower bases (100/200/300/350/400/500 lines)
//   Terrazzo   — terrazzo mop sinks / utility receptors
function classifySeries(p, category) {
  const name = localized(p['Product Name']).trim().toUpperCase();
  const id = p['salsify:id'].toUpperCase();
  const text = `${id} ${name}`;

  if (category === 'Mop Sinks') return 'Terrazzo';
  if (/SAFLOR/.test(text)) return 'S Series';
  if (/RTM|FIBERGLASS|ACRYLX|\bF[-\s]/.test(text) || /\bF\b/.test(name)) return 'F Series';
  if (/TERRAZZO|\b[12345]00\s|HANDIAP|HANDICAP/.test(text)) return 'T Series';
  return 'F Series'; // safe default — most multi-piece stalls are RTM/fiberglass
}

// ─── Drain side parser ───────────────────────────────────────────────────────

function drainSide(id, name) {
  const t = `${id} ${name}`.toUpperCase();
  if (/\bLH\b|\bLHO\b/.test(t)) return 'Left';
  if (/\bRH\b|\bRHO\b/.test(t)) return 'Right';
  if (/\bCTR\b|\bCENTER\b/.test(t)) return 'Center';
  if (/\bREV\b|REVERSIBLE/.test(t)) return 'Reversible';
  return null;
}

// ─── Color parser (best-effort from name) ────────────────────────────────────

function color(id, name) {
  const t = `${id} ${name}`.toUpperCase();
  if (/\bWHT\b|\bWHITE\b/.test(t)) return 'White';
  if (/\bBONE\b/.test(t)) return 'Bone';
  if (/\bBISCUIT\b/.test(t)) return 'Biscuit';
  if (/\bGREY\b|\bGRAY\b/.test(t)) return 'Grey';
  if (/\bCOLOR\b/.test(t)) return 'Color'; // generic color variant placeholder
  return null;
}

// ─── Build dimensions string ─────────────────────────────────────────────────

function dimensions(p) {
  const L = localized(p['Product Length (in.)']);
  const W = localized(p['Product Width (in.)']);
  const H = localized(p['Product Height (in.)']);
  if (!L && !W && !H) return '';
  if (L && W && H) return `${L}" × ${W}" × ${H}"`;
  if (L && W) return `${L}" × ${W}"`;
  return [L, W, H].filter(Boolean).join('"');
}

// ─── Family grouping (collapse LH/RH/color variants of same physical product) ─

function familyKey(p) {
  const id = p['salsify:id'];
  // Strip trailing variant markers from the ID to derive a family key.
  // e.g. "3060 F LH" -> "3060 F", "4234-2 White LH Base" -> "4234-2"
  return id
    .replace(/\s+(LH|RH|LHO|RHO|CTR|CENTER|REV|REVERSIBLE)\b.*$/i, '')
    .replace(/\s+(WHT|WHITE|BONE|BISCUIT|GREY|GRAY|COLOR)\b.*$/i, '')
    .replace(/\s+BASE\s*$/i, '')
    .replace(/\s+SHOWER\s+BASE\b.*$/i, '')
    .replace(/\s+TILE\s+BACK\b.*$/i, '')
    .replace(/\s+SMOOTH\s+WALL\b.*$/i, '')
    .trim();
}

// ─── Transform one Salsify product to the Product shape ──────────────────────

// ─── Local repo image index ──────────────────────────────────────────────────
// Salsify has 0 Florestone images. /public/images/ has hand-shot product photos
// organized by series + dimensions in the filename — index them and match by
// series + size.

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) out.push(full);
  }
  return out;
}

function indexLocalImages() {
  const files = walk(PUBLIC_IMAGES);
  return files.map((full) => {
    const rel = '/' + relative(resolve(ROOT, 'public'), full).split('/').join('/');
    const base = full.split('/').pop().toLowerCase();
    const path = rel.toLowerCase();
    // size token: 4 consecutive digits in the filename (e.g., 3060, 3636, 4242)
    const sizeMatch = base.match(/(\d{4})/);
    const sizeToken = sizeMatch ? sizeMatch[1] : '';
    // series hint from directory
    let series = '';
    if (path.includes('/f-series/')) series = 'F Series';
    else if (path.includes('/s-series/')) series = 'S Series';
    else if (path.includes('/saflor/')) series = 'S Series';
    else if (path.includes('/terrazzo/')) series = 'T Series';
    else if (path.includes('/sinks/') || path.includes('/utilities/')) series = 'Terrazzo'; // utility/mop sinks
    else if (path.includes('/ada/')) series = 'Barrier-Free';
    else if (path.includes('/shower-walls/')) series = 'Walls';
    return { rel, series, sizeToken, base, path,
      // prefer angle order: deco > crop-front > front > crop > zoom > side > top
      score: /deco/.test(base) ? 6 : /crop-front|crop_front/.test(base) ? 5 : /front/.test(base) ? 4 : /crop/.test(base) ? 3 : /zoom/.test(base) ? 2 : /side|top/.test(base) ? 1 : 0,
    };
  });
}

const LOCAL_IMAGES = indexLocalImages();

function repoImageFor(product) {
  const L = Math.round(parseFloat(product.productLengthIn) || 0);
  const W = Math.round(parseFloat(product.productWidthIn) || 0);
  // Build candidate size tokens — filename order is often shorter×longer, but
  // also longer×shorter. Try both.
  const tokens = new Set();
  if (L && W) {
    const a = String(Math.min(L, W)).padStart(2, '0');
    const b = String(Math.max(L, W)).padStart(2, '0');
    tokens.add(a + b);
    tokens.add(b + a);
  }
  const candidates = LOCAL_IMAGES.filter((img) => {
    if (product.series && img.series && img.series !== product.series) return false;
    if (tokens.size && !tokens.has(img.sizeToken)) return false;
    return true;
  });
  if (candidates.length) {
    candidates.sort((x, y) => y.score - x.score);
    return candidates[0].rel;
  }
  // No dimension-specific match: fall back to any image in the right series.
  const seriesOnly = LOCAL_IMAGES.filter((img) => img.series === product.series);
  if (seriesOnly.length) {
    seriesOnly.sort((x, y) => y.score - x.score);
    return seriesOnly[0].rel;
  }
  return null;
}

// Pick a category-appropriate fallback image (Salsify has 0 Florestone images today).
function placeholderImage(category) {
  switch (category) {
    case 'Bathtubs':       return '/images/bases/terrazzo/florestone-200-3060t-base-deco.jpg';
    case 'Barrier-Free':   return '/images/ada/3562h/3562h-ada-zoom.jpg';
    case 'Mop Sinks':      return '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg';
    case 'Shower Walls':   return '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg';
    case 'Shower Stalls':  return '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg';
    case 'Shower Bases':
    default:               return '/images/bases/f-series/florestone-fs-3963f-bf-wht-crop-side.jpg';
  }
}

// URL-safe slug from a Salsify ID (which may include spaces).
function slugify(raw) {
  return raw
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Resolve a "product family" the same way Salsify search does — checking
// Base Product Name first, then Parent Product Name, then Product Name.
// Falls back to category so every product has a family for grid grouping.
function resolveFamily(p, category) {
  for (const field of ['Base Product Name', 'Parent Product Name', 'Product Name']) {
    const v = localized(p[field]).trim();
    if (v) return v;
  }
  return category;
}

function transform(p) {
  const salsifyId = p['salsify:id'];
  const id = slugify(salsifyId);
  const rawName = localized(p['Product Name']) || localized(p['Sellable Part Number']) || salsifyId;
  const category = classify(p);
  const drain = drainSide(salsifyId, rawName);
  const col = color(salsifyId, rawName);
  const series = classifySeries(p, category);
  const dims = dimensions(p);
  // Append size to the product name so similar-named SKUs are distinguishable
  // ("Terrazzo" + "30×30" → "Terrazzo · 30×30").
  const sizeShort = (() => {
    const L = parseFloat(localized(p['Product Length (in.)']));
    const W = parseFloat(localized(p['Product Width (in.)']));
    return Number.isFinite(L) && Number.isFinite(W) ? `${L}×${W}` : '';
  })();
  const name = sizeShort && !rawName.includes(sizeShort) ? `${rawName} · ${sizeShort}` : rawName;
  const productCore = {
    id,
    salsifyId,
    name,
    category,
    series,
    productFamily: rawName, // Product Name — used as secondary grouping key
    size: dims,
    productLengthIn: localized(p['Product Length (in.)']),
    productWidthIn: localized(p['Product Width (in.)']),
  };
  const matched = repoImageFor(productCore);
  return {
    id,
    salsifyId,
    name,
    category,
    series,
    productFamily: rawName,
    size: dims,
    type: localized(p['Product Category']) || category.replace(/s$/, ''),
    ada: category === 'Barrier-Free',
    discontinued: localized(p['Is Discontinued']) === 'true',
    drain,
    color: col,
    family: resolveFamily(p, category),
    familyKey: familyKey(p),
    basePartNumber: localized(p['Base Part Number']),
    sellablePartNumber: localized(p['Sellable Part Number']),
    upc: localized(p['UPC']),
    weightLbs: localized(p['Weight Lbs']),
    listPriceUsd: localized(p['ListPrice USD']),
    productLengthIn: localized(p['Product Length (in.)']),
    productWidthIn: localized(p['Product Width (in.)']),
    productHeightIn: localized(p['Product Height (in.)']),
    thresholdWidthIn: localized(p['Threshold Width (in.)']),
    shape: localized(p['Shape']),
    image: matched || placeholderImage(category),
    hasRepoImage: !!matched,
  };
}

// ─── Codegen ─────────────────────────────────────────────────────────────────

function toTS(rows, counts, syncedAt) {
  const safe = JSON.stringify(rows, null, 2);
  return `// Auto-generated by scripts/sync-salsify.mjs — do not edit by hand.
// Source: Salsify (Brand = Florestone), ${rows.length} SKUs
// Synced: ${syncedAt}
//
// Counts by category:
${CATEGORIES.map((c) => `//   ${String(counts[c] ?? 0).padStart(4)}  ${c}`).join('\n')}

import type { Product } from './products-data';

export type SalsifyProduct = Product & {
  salsifyId: string;
  family?: string;
  familyKey?: string;
  discontinued?: boolean;
  drain?: 'Left' | 'Right' | 'Center' | 'Reversible' | null;
  color?: string | null;
  family?: string;
  basePartNumber?: string;
  sellablePartNumber?: string;
  upc?: string;
  weightLbs?: string;
  listPriceUsd?: string;
  productLengthIn?: string;
  productWidthIn?: string;
  productHeightIn?: string;
  thresholdWidthIn?: string;
  shape?: string;
  variantSalsifyIds?: string[];
};

export const SALSIFY_CATEGORIES = ${JSON.stringify(CATEGORIES)} as const;

export const SALSIFY_SYNCED_AT = ${JSON.stringify(syncedAt)};

export const SALSIFY_PRODUCTS: SalsifyProduct[] = ${safe};
`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

(async () => {
  const env = loadEnv();
  console.log('→ Fetching Florestone products from Salsify…');
  const raw = await fetchAllFlorestone(env);
  console.log(`  got ${raw.length} SKUs`);

  const allRows = raw.map(transform);

  // Salsify stores pricing-tier and Base/Sellable duplicates as separate SKUs
  // for the same physical product. Collapse them by (category, series, name, dims, drain)
  // so the catalog grid shows one card per real product.
  const groups = new Map();
  for (const r of allRows) {
    const key = [r.category, r.series, r.name, r.productLengthIn, r.productWidthIn, r.productHeightIn, r.drain || ''].join('|');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }

  // Prefer the variant with a price and the simplest (shortest) ID — it's usually the "main" SKU.
  const pickRepresentative = (g) =>
    [...g].sort((a, b) => {
      const aHasPrice = a.listPriceUsd ? 1 : 0;
      const bHasPrice = b.listPriceUsd ? 1 : 0;
      if (aHasPrice !== bHasPrice) return bHasPrice - aHasPrice;
      return a.salsifyId.length - b.salsifyId.length;
    })[0];

  const rows = [];
  for (const group of groups.values()) {
    const primary = pickRepresentative(group);
    primary.variantSalsifyIds = group.filter((v) => v.salsifyId !== primary.salsifyId).map((v) => v.salsifyId);
    rows.push(primary);
  }

  const counts = rows.reduce((acc, r) => ((acc[r.category] = (acc[r.category] ?? 0) + 1), acc), {});
  console.log(`  deduped: ${allRows.length} SKUs → ${rows.length} products`);
  console.log('  categorized:');
  for (const c of CATEGORIES) console.log(`    ${String(counts[c] ?? 0).padStart(4)}  ${c}`);

  const syncedAt = new Date().toISOString();
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, toTS(rows, counts, syncedAt));
  console.log(`✔ wrote ${OUT.replace(ROOT + '/', '')} (${rows.length} products)`);
})().catch((e) => {
  console.error('✖ sync failed:', e.message);
  process.exit(1);
});
