import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'The Florestone Catalog — Shower Bases, ADA Units, Mop Sinks & Utility Fixtures',
  description:
    'Browse every Florestone product: Saflor® compression-molded recess bases (S Series), F Series RTM fiberglass with AcrylX™, T Series cast terrazzo, ADA barrier-free units, terrazzo mop sinks, and utility fixtures. USA-made since 1947. Spec sheets and CAD files available.',
  openGraph: {
    title: 'The Florestone Catalog — Shower Bases, ADA Units & Bath Fixtures',
    description:
      'Complete catalog of Florestone shower bases, ADA-compliant units, terrazzo mop sinks, and utility fixtures manufactured in Madera, CA and Denison, TX.',
    type: 'website',
    url: 'https://www.florestone.com/products',
  },
};

// ─── Product Data ─────────────────────────────────────────────────────────────

type Product = {
  id: string;
  name: string;
  size: string;
  type: string;
  image: string;
  ada?: boolean;
};

type Category = {
  id: string;
  heading: string;
  label: string;
  products: Product[];
};

const CATEGORIES: Category[] = [
  {
    id: 's-series',
    heading: 'S Series — Saflor® Recess Bases',
    label: 'Compression-Molded',
    products: [
      {
        id: 'SR-3232',
        name: 'Saflor® Recess 32×32',
        size: '32×32',
        type: 'Single-threshold recess',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
      },
      {
        id: 'SR-3636',
        name: 'Saflor® Recess 36×36',
        size: '36×36',
        type: 'Single-threshold recess',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg',
      },
      {
        id: 'SR-3648',
        name: 'Saflor® Recess 36×48',
        size: '36×48',
        type: 'Single-threshold recess',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
      },
      {
        id: 'SR-3660',
        name: 'Saflor® Recess 36×60',
        size: '36×60',
        type: 'Single-threshold recess',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg',
      },
      {
        id: 'SR-CORNER',
        name: 'Saflor® Corner Recess',
        size: 'Multiple',
        type: 'Two-wall corner/Edge',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
      },
      {
        id: 'SR-NEO',
        name: 'Saflor® NEO Angle',
        size: 'Multiple',
        type: 'NEO angle corner',
        image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
      },
    ],
  },
  {
    id: 'f-series',
    heading: 'F Series — RTM Fiberglass · AcrylX™',
    label: 'RTM Fiberglass · AcrylX™',
    products: [
      {
        id: 'F-3636',
        name: 'F Series 36×36 Base',
        size: '36×36',
        type: 'Shower base',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-deco.jpg',
      },
      {
        id: 'F-4242',
        name: 'F Series 42×42 Base',
        size: '42×42',
        type: 'Shower base',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
      },
      {
        id: 'F-EDGE',
        name: 'F Series w/ The Edge',
        size: 'Multiple',
        type: 'Premium edge base',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4842f-wht-deco.jpg',
      },
      {
        id: '6032TS',
        name: 'Model 6032TS Tub-Shower',
        size: '60×32',
        type: '3-Wall tub-shower',
        image: '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg',
      },
      {
        id: '6034TS',
        name: 'Model 6034TS Tub-Shower',
        size: '60×34',
        type: '3-Wall tub-shower',
        image: '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg',
      },
      {
        id: 'F-3PC-NEO',
        name: '3-PC NEO Corner Walls',
        size: 'Multiple',
        type: '3-piece wall system',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-38f-neo-wht-deco.jpg',
      },
    ],
  },
  {
    id: 't-series',
    heading: 'T Series — Cast Terrazzo',
    label: 'Cast Terrazzo',
    products: [
      {
        id: 'T-100',
        name: 'Model 100 Standard',
        size: 'Multiple',
        type: 'Standard terrazzo',
        image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg',
      },
      {
        id: 'T-200',
        name: 'Model 200 Recess',
        size: 'Multiple',
        type: 'Recess terrazzo',
        image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg',
      },
      {
        id: 'T-300',
        name: 'Model 300 Corner',
        size: 'Multiple',
        type: 'Two-wall corner',
        image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg',
      },
      {
        id: 'T-350',
        name: 'Model 350 NEO Angle',
        size: 'Multiple',
        type: 'NEO angle corner',
        image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-deco.jpg',
      },
      {
        id: 'T-400',
        name: 'Model 400 Barrier-Free',
        size: 'Multiple',
        type: 'Curbless/Roll-In ADA',
        image: '/images/bases/terrazzo/jpg/florestone-model-400-6333-deco.jpg',
        ada: true,
      },
      {
        id: 'T-500',
        name: 'Model 500 Transfer',
        size: '36×36',
        type: 'Transfer ADA',
        image: '/images/bases/terrazzo/jpg/florestone-model-500-4248-deco.jpg',
        ada: true,
      },
    ],
  },
  {
    id: 'barrier-free',
    heading: 'Barrier-Free · ADA',
    label: 'ADA-Compliant',
    products: [
      {
        id: 'T-400-BF',
        name: 'Model 400 Terrazzo Roll-In',
        size: 'Multiple',
        type: 'Roll-In terrazzo ADA',
        image: '/images/ada/3562h/3562h-ada-deco.jpg',
        ada: true,
      },
      {
        id: 'T-500-BF',
        name: 'Model 500 Terrazzo Transfer',
        size: '36×36',
        type: 'Transfer terrazzo ADA',
        image: '/images/ada/3562h/3562h-ada-zoom.jpg',
        ada: true,
      },
      {
        id: '4040F-BF',
        name: 'Model 4040F Fiberglass BF',
        size: '40×40',
        type: 'Molded fiberglass curbless ADA',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
        ada: true,
      },
      {
        id: 'F-BF',
        name: 'F Series AcrylX™ Barrier-Free',
        size: 'Multiple',
        type: 'RTM AcrylX curbless ADA',
        image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
        ada: true,
      },
      {
        id: 'SR-BF',
        name: 'Saflor® Barrier-Free',
        size: 'Multiple',
        type: 'Compression-molded BF ADA',
        image: '/images/ada/3562h/3562h-ada-crop.jpg',
        ada: true,
      },
    ],
  },
  {
    id: 'sinks',
    heading: 'Utility & Mop Sinks',
    label: 'Commercial · Janitorial',
    products: [
      {
        id: 'WM-2222',
        name: 'Terrazzo Mop Sink WM-2222',
        size: '22×22',
        type: 'Wall-mount terrazzo',
        image: '/images/sinks/wm20/3648terrazo-sr17-wm20-deco.jpg',
      },
      {
        id: 'SR-1720',
        name: 'Terrazzo Mop Sink SR-1720',
        size: '17×20',
        type: 'Floor-mount terrazzo',
        image: '/images/sinks/sr17/sr17-drop-in-zoom.jpg',
      },
      {
        id: 'FM-2222',
        name: 'Utility Sink FM-2222',
        size: '22×22',
        type: 'Freestanding utility',
        image: '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg',
      },
      {
        id: 'FM-4521',
        name: 'Utility Sink FM-4521',
        size: '45×21',
        type: 'Freestanding utility',
        image: '/images/Utilities/crop/jpg/florestone-fmd-utilitysink-4521-wht-front-crop.jpg',
      },
    ],
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: 'https://www.florestone.com/' },
  { name: 'Products', url: 'https://www.florestone.com/products' },
]);

const ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Florestone Product Catalog',
  description:
    'Complete catalog of Florestone shower bases, ADA-compliant units, terrazzo mop sinks and utility fixtures manufactured in the USA.',
  url: 'https://www.florestone.com/products',
  numberOfItems: CATEGORIES.reduce((n, c) => n + c.products.length, 0),
  itemListElement: CATEGORIES.flatMap((cat, ci) =>
    cat.products.map((p, pi) => ({
      '@type': 'ListItem',
      position: ci * 100 + pi + 1,
      name: p.name,
      description: `${p.type} — ${p.size}`,
      url: `https://www.florestone.com/products#${p.id}`,
    }))
  ),
};

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      id={product.id}
      className="group bg-white rounded-lg border border-[var(--color-line)] overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-offwhite)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Model badge — top left */}
        <div className="absolute top-3 left-3 z-10">
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[9px] font-semibold tracking-[0.12em] uppercase bg-white/90 text-[var(--color-secondary)] px-2 py-1 rounded"
          >
            {product.id}
          </span>
        </div>
        {/* ADA badge — top right */}
        {product.ada && (
          <div className="absolute top-3 right-3 z-10">
            <span
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[9px] font-semibold tracking-[0.12em] uppercase bg-[var(--color-coral)] text-white px-2 py-1 rounded"
            >
              ADA
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-[var(--color-secondary)] text-[15px] leading-snug mb-1"
          >
            {product.name}
          </h3>
          <p className="text-[var(--color-text-muted)] text-[12px] font-light">
            {product.size} · {product.type}
          </p>
        </div>

        {/* Doc buttons */}
        <div className="flex gap-2 pt-1 border-t border-[var(--color-line)] mt-auto">
          <Link
            href="/resources"
            style={{ fontFamily: 'var(--font-heading)' }}
            className="flex-1 text-center text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-2 rounded border border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            PDF Spec
          </Link>
          <Link
            href="/resources"
            style={{ fontFamily: 'var(--font-heading)' }}
            className="flex-1 text-center text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-2 rounded border border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            CAD File
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsCatalogPage() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <JsonLd data={ITEM_LIST_SCHEMA} />
      <Navbar activePage="/products" />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-20 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-white/40">
            <Link href="/" className="text-[11px] tracking-wider uppercase hover:text-white/70 transition-colors font-light">
              Home
            </Link>
            <span className="text-[11px]">/</span>
            <span className="text-[11px] tracking-wider uppercase text-white/60 font-light">Catalog</span>
          </div>

          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-4"
          >
            The Florestone Catalog — Est. 1947
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-white text-4xl md:text-5xl tracking-tight mb-5 max-w-2xl leading-tight"
          >
            The Complete Florestone Catalog
          </h1>
          <p className="text-white/60 text-[16px] leading-relaxed max-w-2xl font-light mb-10">
            Shower bases in three material platforms — Saflor® compression-molded, F Series RTM fiberglass with AcrylX™, and T Series solid terrazzo — plus the ADA barrier-free line, terrazzo mop sinks, and utility fixtures. Every product ships through the plumbing trade with a spec sheet and CAD file.
          </p>

          {/* Quick-jump tabs */}
          <nav aria-label="Product categories" className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-2 rounded border border-white/20 text-white/70 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── PRODUCT SECTIONS ── */}
      <div className="bg-[var(--color-offwhite)]">
        {CATEGORIES.map((cat, ci) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-20 px-6 ${ci > 0 ? 'border-t border-[var(--color-line)]' : ''}`}
          >
            <div className="max-w-[1280px] mx-auto">
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
                  >
                    {cat.label}
                  </p>
                  <h2
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight"
                  >
                    {cat.heading}
                  </h2>
                </div>
                <span className="text-[12px] text-[var(--color-text-light)] font-light tabular-nums">
                  {cat.products.length} models
                </span>
              </div>

              {/* Product grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABand
        heading="Need a spec pulled?"
        body="Florestone is a B2B trade brand. Connect to your plumbing wholesaler or call (800) 446-2647 to reach our sales team in Madera, CA direct."
        ctaLabel="Find a Wholesaler"
        ctaHref="/find-a-dealer"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
