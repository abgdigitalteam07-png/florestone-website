// Shared product data — no 'use client', importable from server and client.
//
// ─── Salsify-ready shape ──────────────────────────────────────────────────────
// Each product declares its real catalog availability:
//   • colors        — finishes this SKU actually ships in
//   • drainOptions  — drain positions this SKU is offered with (empty = N/A, e.g. sinks)
//   • variants      — concrete (color, drain) combos with the image that shows that variant
//   • gallery       — additional lifestyle angles (always shown as thumbnails)
//
// When Salsify is connected we replace ALL_PRODUCTS with a fetcher that
// returns the same shape. UI consumes Product → ProductDetail and stays the same.
// ──────────────────────────────────────────────────────────────────────────────

export type DrainPosition = 'left' | 'right' | 'center' | 'reversible';

export type ProductSpec = {
  dimensions: string;
  height: string;
  weight: string;
  capacity: string;
  material: string;
  installation: string;
};

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductVariant = {
  color: string;          // color id
  drain?: DrainPosition;  // omit if drain not configurable for this product
  image: string;          // image shown when this variant is active
  sku?: string;           // optional override SKU for this exact variant
};

export type ProductDetail = {
  sku: string;
  modelNumber: string;
  gallery: string[];
  colors: ProductColor[];
  drainOptions: DrainPosition[];
  variants: ProductVariant[];
  spec: ProductSpec;
  keyBenefits: string[];
  attributes: Array<{ label: string; value: string }>;
  characteristics: string[];
  warrantyResidential: string;
  warrantyCommercial: string;
  listPrice?: string;
};

export type Product = {
  id: string;
  name: string;
  series: string;
  category: string;
  size: string;
  type: string;
  image: string;
  ada?: boolean;
  detail?: Partial<ProductDetail>;
};

// Master color palette — products pick which ones they actually offer.
const COLOR = {
  white:    { id: 'white',    name: 'White',     hex: '#FFFFFF' },
  bone:     { id: 'bone',     name: 'Bone',      hex: '#E8E1D5' },
  biscuit:  { id: 'biscuit',  name: 'Biscuit',   hex: '#E6D9BE' },
  grey:     { id: 'grey',     name: 'Grey',      hex: '#B8BCBE' },
  carrara:  { id: 'carrara',  name: 'Carrara',   hex: '#EDECE7' },
  terrazzo: { id: 'terrazzo', name: 'Terrazzo',  hex: '#D9D5CB' },
} as const;

export const ALL_PRODUCTS: Product[] = [
  // ─── S Series (Saflor compression-molded) ─────────────────────────────
  {
    id: 'SR-3232', name: 'S Series Recess 32×32', series: 'S Series', category: 'Shower Bases', size: '32×32', type: 'Single-threshold recess',
    image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
    detail: {
      sku: 'FS-SR-3232', modelNumber: 'SR-3232',
      colors: [COLOR.white, COLOR.bone],
      drainOptions: ['left', 'right'],
      variants: [
        { color: 'white', drain: 'left',  image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
        { color: 'white', drain: 'right', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg' },
        { color: 'bone',  drain: 'left',  image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
        { color: 'bone',  drain: 'right', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg' },
      ],
      gallery: [
        '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
        '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg',
      ],
      spec: { dimensions: '32" × 32"', height: '4.5"', weight: '38 lbs', capacity: '— gal', material: 'Compression-Molded', installation: 'Single-Threshold Recess' },
    },
  },
  {
    id: 'SR-3636', name: 'S Series Recess 36×36', series: 'S Series', category: 'Shower Bases', size: '36×36', type: 'Single-threshold recess',
    image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg',
    detail: {
      sku: 'FS-SR-3636', modelNumber: 'SR-3636',
      colors: [COLOR.white, COLOR.bone, COLOR.biscuit],
      drainOptions: ['left', 'right', 'center'],
      variants: [
        { color: 'white', drain: 'left',   image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
        { color: 'white', drain: 'right',  image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg' },
        { color: 'white', drain: 'center', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
        { color: 'bone',  drain: 'left',   image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg' },
        { color: 'bone',  drain: 'right',  image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
        { color: 'biscuit', drain: 'left', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg' },
      ],
      spec: { dimensions: '36" × 36"', height: '4.5"', weight: '44 lbs', capacity: '— gal', material: 'Compression-Molded', installation: 'Single-Threshold Recess' },
    },
  },
  { id: 'SR-3648', name: 'S Series Recess 36×48', series: 'S Series', category: 'Shower Bases', size: '36×48', type: 'Single-threshold recess', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
  {
    id: 'SR-3660', name: 'S Series Recess 36×60', series: 'S Series', category: 'Shower Bases', size: '36×60', type: 'Single-threshold recess',
    image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg',
    detail: {
      sku: 'FS-SR-3660', modelNumber: 'SR-3660',
      colors: [COLOR.white, COLOR.bone, COLOR.carrara],
      drainOptions: ['left', 'right'],
      variants: [
        { color: 'white',   drain: 'left',  image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
        { color: 'white',   drain: 'right', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg' },
        { color: 'bone',    drain: 'left',  image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },
        { color: 'bone',    drain: 'right', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg' },
        { color: 'carrara', drain: 'left',  image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-sw-carrara-zoom.jpg' },
        { color: 'carrara', drain: 'right', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-sw-carrara-zoom.jpg' },
      ],
      gallery: [
        '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
        '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg',
        '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
        '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg',
      ],
      spec: { dimensions: '36" × 60"', height: '4.5"', weight: '62 lbs', capacity: '— gal', material: 'Compression-Molded', installation: 'Single-Threshold Recess' },
      keyBenefits: [
        'Compression-molded marble composite — non-porous, won\'t crack or chip',
        'Compression-molded formula manufactured in Denison, TX since 1965',
        'Pre-pitched 1/4" per foot to a reversible left/right drain',
      ],
      characteristics: ['Single-threshold recess', 'Reversible drain location', 'Slip-resistant texture', 'Non-yellowing finish'],
      attributes: [
        { label: 'Above-the-Floor Rough', value: 'No' },
        { label: 'Residential Warranty', value: 'Lifetime' },
        { label: 'Commercial Warranty', value: '1-Year' },
        { label: 'Material', value: 'Compression-Molded Composite' },
        { label: 'Installation Type', value: 'Single-Threshold Recess' },
        { label: 'Shape', value: 'Rectangular' },
        { label: 'Pieces', value: '1' },
      ],
    },
  },
  { id: 'SR-CORNER', name: 'S Series Corner Recess', series: 'S Series', category: 'Shower Bases', size: 'Multiple', type: 'Two-wall corner', image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg' },
  { id: 'SR-NEO', name: 'S Series NEO Angle', series: 'S Series', category: 'Shower Bases', size: 'Multiple', type: 'NEO angle corner', image: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg' },

  // ─── F Series (RTM AcrylX) ──────────────────────────────────────────
  {
    id: 'F-3636', name: 'F Series 36×36 Base', series: 'F Series', category: 'Shower Bases', size: '36×36', type: 'Shower base',
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-deco.jpg',
    detail: {
      sku: 'FS-F-3636', modelNumber: 'F-3636',
      colors: [COLOR.white, COLOR.bone, COLOR.biscuit],
      drainOptions: ['left', 'right', 'center'],
      variants: [
        { color: 'white', drain: 'center', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-deco.jpg' },
        { color: 'white', drain: 'left',   image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-zoom.jpg' },
        { color: 'white', drain: 'right',  image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3460f-wht-deco.jpg' },
      ],
      spec: { dimensions: '36" × 36"', height: '5"', weight: '34 lbs', capacity: '— gal', material: 'Closed Mold Fiberglass · AcrylX™', installation: 'Recess' },
    },
  },
  {
    id: 'F-4242', name: 'F Series 42×42 Base', series: 'F Series', category: 'Shower Bases', size: '42×42', type: 'Shower base',
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
    detail: {
      sku: 'FS-F-4242', modelNumber: 'F-4242',
      colors: [COLOR.white, COLOR.bone, COLOR.biscuit],
      drainOptions: ['left', 'right', 'center'],
      variants: [
        { color: 'white', drain: 'center', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg' },
        { color: 'white', drain: 'left',   image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-zoom.jpg' },
        { color: 'white', drain: 'right',  image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-swan-mt-wht-zoom.jpg' },
        { color: 'bone',  drain: 'center', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-swan-mt-ms-kai-pk-deco.jpg' },
      ],
      gallery: [
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-zoom.jpg',
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-swan-mt-ms-kai-pk-deco.jpg',
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-swan-mt-wht-zoom.jpg',
      ],
      spec: { dimensions: '42" × 42"', height: '5"', weight: '46 lbs', capacity: '— gal', material: 'Closed Mold Fiberglass · AcrylX™', installation: 'Recess' },
    },
  },
  { id: 'F-EDGE', name: 'F Series w/ The Edge™', series: 'F Series', category: 'Shower Bases', size: 'Multiple', type: 'Premium edge base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4842f-wht-deco.jpg' },
  {
    id: '6032TS', name: 'Model 6032TS Tub-Shower', series: 'F Series', category: 'Shower Stalls', size: '60×32', type: '3-Wall tub-shower unit',
    image: '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg',
    detail: {
      sku: 'FS-6032TS', modelNumber: '6032TS',
      colors: [COLOR.white, COLOR.bone],
      drainOptions: ['left', 'right'],
      variants: [
        { color: 'white', drain: 'left',  image: '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg' },
        { color: 'white', drain: 'right', image: '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg' },
        { color: 'bone',  drain: 'left',  image: '/images/multi-brand/jpeg/florestone-6033hst-unit-zoom.jpg' },
        { color: 'bone',  drain: 'right', image: '/images/multi-brand/jpeg/florestone-603w-unit-zoom.jpg' },
      ],
      gallery: [
        '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg',
        '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg',
        '/images/multi-brand/jpeg/florestone-6033hst-unit-zoom.jpg',
        '/images/multi-brand/jpeg/florestone-603w-unit-zoom.jpg',
      ],
      spec: { dimensions: '60" × 32" × 73"', height: '73"', weight: '125 lbs', capacity: '32 gal', material: 'AcrylX™ over Fiberglass', installation: '3-Wall Alcove' },
    },
  },
  { id: '6034TS', name: 'Model 6034TS Tub-Shower', series: 'F Series', category: 'Shower Stalls', size: '60×34', type: '3-Wall tub-shower unit', image: '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg' },
  { id: 'F-3PC-NEO', name: '3-PC NEO Corner Walls', series: 'F Series', category: 'Shower Walls', size: 'Multiple', type: '3-piece wall system', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-38f-neo-wht-deco.jpg' },
  { id: 'F-6042', name: 'F Series 60×42 Base', series: 'F Series', category: 'Shower Bases', size: '60×42', type: 'Shower base', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg' },

  // ─── T Series (Cast Terrazzo) ──────────────────────────────────────
  {
    id: 'T-100', name: 'T Series Model 100 Bases', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Standard T Series · Multiple sizes',
    image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg',
    detail: {
      sku: 'FS-T-100', modelNumber: 'T-100',
      colors: [COLOR.terrazzo, COLOR.grey],
      drainOptions: ['left', 'right', 'center'],
      variants: [
        { color: 'terrazzo', drain: 'center', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg' },
        { color: 'terrazzo', drain: 'left',   image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-zoom.jpg' },
        { color: 'terrazzo', drain: 'right',  image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg' },
        { color: 'grey',     drain: 'center', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg' },
      ],
      gallery: [
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-zoom.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg',
      ],
      spec: { dimensions: '36" × 36"', height: '4"', weight: '85 lbs', capacity: '— gal', material: 'Cast Terrazzo', installation: 'Single-Threshold Recess' },
      keyBenefits: [
        'Solid cast terrazzo — marble chips in cementitious matrix, polished to a 600-grit finish',
        'Made in Denison, TX — the only US-cast terrazzo shower base still in production',
        'Specified by the Army Corps of Engineers, federal courthouses, and commercial barracks since 1969',
      ],
      characteristics: ['Single-threshold recess', 'Polished terrazzo surface', 'Integral threshold dam', 'Lead-free brass strainer compatible'],
    },
  },
  { id: 'T-200', name: 'T Series Model 200 Recess', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Recess terrazzo', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg' },
  { id: 'T-300', name: 'T Series Model 300 Corner', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Two-wall corner', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg' },
  {
    id: 'T-350', name: 'T Series Model 350 NEO', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'NEO angle corner',
    image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-deco.jpg',
    detail: {
      sku: 'FS-T-350', modelNumber: 'T-350',
      colors: [COLOR.terrazzo],
      drainOptions: ['left', 'right'],
      variants: [
        { color: 'terrazzo', drain: 'left',  image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-left-deco.jpg' },
        { color: 'terrazzo', drain: 'right', image: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-right-deco.jpg' },
      ],
      gallery: [
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-deco.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-left-deco.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-right-deco.jpg',
        '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-zoom.jpg',
      ],
      spec: { dimensions: '38" NEO', height: '4"', weight: '95 lbs', capacity: '— gal', material: 'Cast Terrazzo', installation: 'NEO Angle Corner' },
    },
  },
  { id: 'T-400', name: 'T Series Model 400 Barrier-Free', series: 'T Series', category: 'Shower Bases', size: 'Multiple', type: 'Roll-In · ADA & ANSI A117.1', image: '/images/bases/terrazzo/jpg/florestone-model-400-6333-deco.jpg', ada: true },
  { id: 'T-500', name: 'T Series Model 500 Barrier-Free', series: 'T Series', category: 'Shower Bases', size: '36×36', type: 'Transfer · ADA compliant', image: '/images/bases/terrazzo/jpg/florestone-model-500-4248-deco.jpg', ada: true },

  // ─── Barrier-Free ──────────────────────────────────────────────────
  {
    id: '4040F-BF', name: 'Model 4040F Fiberglass BF', series: 'F Series', category: 'Barrier-Free', size: '40×40', type: 'Molded fiberglass curbless ADA',
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg', ada: true,
    detail: {
      sku: 'FS-4040F-BF', modelNumber: '4040F-BF',
      colors: [COLOR.white, COLOR.bone],
      drainOptions: ['left', 'right'],
      variants: [
        { color: 'white', drain: 'left',  image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg' },
        { color: 'white', drain: 'right', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-zoom.jpg' },
        { color: 'bone',  drain: 'left',  image: '/images/ada/3562h/3562h-ada-deco.jpg' },
        { color: 'bone',  drain: 'right', image: '/images/ada/3562h/3562h-ada-zoom.jpg' },
      ],
      gallery: [
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
        '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-zoom.jpg',
        '/images/ada/3562h/3562h-ada-deco.jpg',
        '/images/ada/3562h/3562h-ada-zoom.jpg',
      ],
      spec: { dimensions: '40" × 40"', height: '< 1/2" threshold', weight: '52 lbs', capacity: '— gal', material: 'Closed Mold Fiberglass · AcrylX™', installation: 'Curbless Barrier-Free' },
      keyBenefits: [
        'Curbless barrier-free design meets ADA & ANSI A117.1 transfer-shower requirements',
        'Pre-pitched to a recessed drain — no field slope required',
        'Slip-resistant textured floor rated to ASTM F462',
      ],
      characteristics: ['ADA-compliant transfer entry', 'Reversible left/right drain', 'Integral nailing flange', 'Pre-leveled subfloor cavity'],
    },
  },
  { id: 'F-BF', name: 'F Series AcrylX™ Barrier-Free', series: 'F Series', category: 'Barrier-Free', size: 'Multiple', type: 'RTM AcrylX curbless ADA', image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg', ada: true },
  { id: 'SR-BF', name: 'S Series Barrier-Free', series: 'S Series', category: 'Barrier-Free', size: 'Multiple', type: 'Compression-molded BF ADA', image: '/images/ada/3562h/3562h-ada-deco.jpg', ada: true },
  { id: '3562H', name: 'Model 3562H ADA Roll-In', series: 'T Series', category: 'Barrier-Free', size: '35×62', type: 'Roll-In terrazzo ADA', image: '/images/ada/3562h/3562h-ada-deco.jpg', ada: true },

  // ─── Mop & Utility Sinks (no drain config — fixed drain) ────────────
  {
    id: 'WM-2222', name: 'Terrazzo Mop Sink WM-2222', series: 'Terrazzo', category: 'Mop Sinks', size: '22×22', type: 'Wall-mount terrazzo',
    image: '/images/sinks/wm20/3648terrazo-sr17-wm20-deco.jpg',
    detail: {
      sku: 'FS-WM-2222', modelNumber: 'WM-2222',
      colors: [COLOR.white],
      drainOptions: [],
      variants: [
        { color: 'white', image: '/images/sinks/wm20/florestone-wm-utilitysink-2222-wht-front-crop.jpg' },
      ],
      gallery: [
        '/images/sinks/wm20/florestone-wm-utilitysink-2222-wht-front-crop.jpg',
        '/images/sinks/wm20/florestone-wm-utilitysink-2222-wht-frontstraight-crop.jpg',
        '/images/sinks/wm20/florestone-wm-utilitysink-2222-wht-side-crop.jpg',
        '/images/sinks/wm20/florestone-wm-utilitysink-2222-wht-top-crop.jpg',
      ],
      spec: { dimensions: '22" × 22"', height: '12"', weight: '78 lbs', capacity: '14 gal', material: 'Cast Terrazzo', installation: 'Wall-Mount' },
    },
  },
  {
    id: 'SR-1720', name: 'Terrazzo Mop Sink SR-1720', series: 'Terrazzo', category: 'Mop Sinks', size: '17×20', type: 'Floor-mount terrazzo',
    image: '/images/sinks/sr17/sr17-drop-in-zoom.jpg',
    detail: {
      sku: 'FS-SR-1720', modelNumber: 'SR-1720',
      colors: [COLOR.white],
      drainOptions: [],
      variants: [
        { color: 'white', image: '/images/sinks/sr17/florestone-sr17-utilitysink-1720-wht-front-crop.jpg' },
      ],
      gallery: [
        '/images/sinks/sr17/florestone-sr17-utilitysink-1720-wht-front-crop.jpg',
        '/images/sinks/sr17/florestone-sr17-utilitysink-1720-wht-frontstraight-crop.jpg',
        '/images/sinks/sr17/florestone-sr17-utilitysink-1720-wht-side-crop.jpg',
        '/images/sinks/sr17/florestone-sr17-utilitysink-1720-wht-top-crop.jpg',
      ],
      spec: { dimensions: '17" × 20"', height: '10"', weight: '54 lbs', capacity: '10 gal', material: 'Cast Terrazzo', installation: 'Floor-Mount Drop-In' },
    },
  },
  {
    id: 'FM-2222', name: 'Utility Sink FM-2222', series: 'Terrazzo', category: 'Mop Sinks', size: '22×22', type: 'Freestanding utility',
    image: '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg',
    detail: {
      sku: 'FS-FM-2222', modelNumber: 'FM-2222',
      colors: [COLOR.white],
      drainOptions: [],
      variants: [
        { color: 'white', image: '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg' },
      ],
      gallery: [
        '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-front-crop.jpg',
        '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-frontstraight-crop.jpg',
        '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-side-crop.jpg',
        '/images/Utilities/crop/jpg/florestone-fm-utilitysink-2222-wht-top-crop.jpg',
      ],
      spec: { dimensions: '22" × 22"', height: '14"', weight: '82 lbs', capacity: '16 gal', material: 'Cast Terrazzo', installation: 'Freestanding' },
    },
  },
  { id: 'FM-4521', name: 'Utility Sink FM-4521', series: 'Terrazzo', category: 'Mop Sinks', size: '45×21', type: 'Freestanding utility', image: '/images/Utilities/crop/jpg/florestone-fmd-utilitysink-4521-wht-front-crop.jpg' },

  // ─── Shower Walls ───────────────────────────────────────────────────
  { id: 'WALLS-3060', name: 'Shower Wall Surround 30×60', series: 'F Series', category: 'Shower Walls', size: '30×60', type: 'Wall panels', image: '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg' },
];

export const ALL_SERIES = ['S Series', 'F Series', 'T Series', 'Terrazzo'];
export const ALL_CATEGORIES = ['Shower Bases', 'Shower Stalls', 'Shower Walls', 'Barrier-Free', 'Mop Sinks'];

// ─── Detail helpers ─────────────────────────────────────────────────────────

const DEFAULT_KEY_BENEFITS = [
  'Manufactured in the USA since 1947 — Madera, CA and Denison, TX',
  'Trade-spec quality: every unit ships through the plumbing wholesale channel',
  'Lifetime residential warranty backed by ABG, the largest US bath group',
];

const DEFAULT_CHARACTERISTICS = ['Slip-resistant textured floor', 'Pre-pitched to drain', 'Integral threshold', 'Non-porous surface'];

const materialForSeries = (series: string) =>
  series === 'T Series' ? 'Cast Terrazzo' :
  series === 'S Series' ? 'Compression-Molded' :
  series === 'F Series' ? 'Closed Mold Fiberglass · AcrylX™' : 'Terrazzo';

// Default availability when a product hasn't been hand-curated yet.
// (Will be replaced by Salsify-derived values.)
function defaultColorsFor(product: Product): ProductColor[] {
  if (product.category === 'Mop Sinks') return [COLOR.white];
  if (product.series === 'T Series') return [COLOR.terrazzo];
  if (product.series === 'S Series') return [COLOR.white, COLOR.bone];
  return [COLOR.white, COLOR.bone, COLOR.biscuit];
}

function defaultDrainsFor(product: Product): DrainPosition[] {
  if (product.category === 'Mop Sinks' || product.category === 'Shower Walls') return [];
  if (product.category === 'Barrier-Free') return ['left', 'right'];
  return ['left', 'right'];
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

export function getProductDetail(product: Product): ProductDetail {
  const d = product.detail ?? {};
  const colors = d.colors ?? defaultColorsFor(product);
  const drainOptions = d.drainOptions ?? defaultDrainsFor(product);
  const variants = d.variants ?? [{ color: colors[0].id, image: product.image }];
  const gallery = d.gallery && d.gallery.length ? d.gallery : Array.from(new Set([product.image, ...variants.map(v => v.image)]));

  return {
    sku: d.sku ?? `FS-${product.id}`,
    modelNumber: d.modelNumber ?? product.id,
    colors,
    drainOptions,
    variants,
    gallery,
    spec: d.spec ?? {
      dimensions: product.size,
      height: '—',
      weight: '—',
      capacity: '—',
      material: materialForSeries(product.series),
      installation: product.type,
    },
    keyBenefits: d.keyBenefits ?? DEFAULT_KEY_BENEFITS,
    attributes: d.attributes ?? [
      { label: 'Above-the-Floor Rough', value: 'No' },
      { label: 'Residential Warranty', value: 'Lifetime' },
      { label: 'Commercial Warranty', value: '1-Year' },
      { label: 'Material', value: materialForSeries(product.series) },
      { label: 'Installation Type', value: product.type },
      { label: 'Shape', value: 'Rectangular' },
      { label: 'Pieces', value: '1' },
      ...(product.ada ? [{ label: 'ADA / ANSI A117.1', value: 'Compliant' }] : []),
    ],
    characteristics: d.characteristics ?? DEFAULT_CHARACTERISTICS,
    warrantyResidential: d.warrantyResidential ?? 'Lifetime',
    warrantyCommercial: d.warrantyCommercial ?? '1-Year',
  };
}

// Resolves which image to show given current (color, drain) selection.
// Order of preference: exact match → color match → drain match → first variant → gallery[0].
export function resolveVariantImage(
  detail: ProductDetail,
  color: string,
  drain: DrainPosition | null,
): string {
  const exact = detail.variants.find(v => v.color === color && (drain ? v.drain === drain : !v.drain));
  if (exact) return exact.image;
  const byColorAndDrain = detail.variants.find(v => v.color === color && (drain ? v.drain === drain : true));
  if (byColorAndDrain) return byColorAndDrain.image;
  const byColor = detail.variants.find(v => v.color === color);
  if (byColor) return byColor.image;
  const byDrain = drain ? detail.variants.find(v => v.drain === drain) : null;
  if (byDrain) return byDrain.image;
  return detail.variants[0]?.image ?? detail.gallery[0];
}
