export type SeriesKey = 's-series' | 'f-series' | 't-series' | 'barrier-free';

export interface SeriesSpec {
  label: string;
  value: string;
}

export interface SeriesFeature {
  title: string;
  body: string;
}

export interface SeriesModel {
  code: string;
  name: string;
  dimensions: string;
  type: string;
  ada?: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Series {
  key: SeriesKey;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  label: string;
  badge: string;
  description: string;
  heroBody: string;
  specChips: string[];
  ada: boolean;
  hero: { swatch: string; tint: string };
  specs: SeriesSpec[];
  features: SeriesFeature[];
  models: SeriesModel[];
  faqs: FAQ[];
  compareWith: SeriesKey[];
  metaTitle: string;
  metaDescription: string;
}

export const SERIES: Record<SeriesKey, Series> = {
  's-series': {
    key: 's-series',
    slug: 's-series',
    name: 'S Series',
    subtitle: 'Compression-Molded Recess Shower Bases',
    tagline: 'Compression-molded in the USA since 1965 — stain-resistant, slip-resistant, built for the trade.',
    label: 'S Series · Compression-Molded',
    badge: 'S Series',
    description:
      'Single-threshold recess shower receptors with Wedge-Lok® integral drain seal. Stain, fungus and abrasion resistant — compression-molded in Denison, TX.',
    heroBody:
      'The S Series is Florestone\'s compression-molded recess shower receptor line, manufactured in Denison, Texas. Each one-piece base ships with our patented Wedge-Lok® integral drain seal, a slip-resistant floor that doesn\'t trap water, and an off-white finish that is stain, fungus and abrasion resistant. Specified into multifamily, hospitality and renovation projects through plumbing wholesalers nationwide.',
    specChips: ['Compression-Molded', 'Wedge-Lok® Drain', 'Stain & Fungus Resistant', 'Slip-Resistant', 'Off-White Std.', 'One-Piece Recess'],
    ada: false,
    hero: { swatch: '#EDE4D6', tint: 'sand' },
    specs: [
      { label: 'Line', value: 'S Series — compression-molded recess' },
      { label: 'Construction', value: 'Compression-molded composite' },
      { label: 'Install Type', value: 'Recessed (single threshold)' },
      { label: 'Drain', value: 'Wedge-Lok® integral seal' },
      { label: 'Color (Std.)', value: 'Off-white — stain/fungus resistant' },
      { label: 'Finish', value: 'Slip-resistant; resists fading & abrasion' },
      { label: 'Heritage', value: 'Compression-molded since 1965' },
      { label: 'Codes', value: 'IAPMO File 0687 · ANSI Z124.1.2-2005' },
    ],
    features: [
      {
        title: 'Wedge-Lok® Integral Drain',
        body: 'Florestone\'s patented Wedge-Lok® seal at the drain — no field-applied gasket, no callbacks on a leaking pan.',
      },
      {
        title: 'Stain & Fungus Resistant',
        body: 'Off-white finish from the mold resists stain, fungus, fading and abrasion under heavy commercial and multifamily use.',
      },
      {
        title: 'Slip-Resistant Floor',
        body: 'Engineered floor pattern is slip-resistant without trapping water — the trade-spec balance Florestone has shipped since 1965.',
      },
      {
        title: 'One-Piece Recess',
        body: 'Single-threshold one-piece units drop into a prepared recess. No seams, no field joints, no leaks at the floor transition.',
      },
      {
        title: 'Specified Across Categories',
        body: 'Standard, ADA barrier-free, NEO angle, corner and offset drain configurations — one finish family, broad spec range.',
      },
      {
        title: 'Stocked Through the Trade',
        body: 'Distributed through plumbing supply wholesalers nationwide — Ferguson, Pacific Plumbing Supply, VAMAC and the rest of the spec channel.',
      },
    ],
    models: [
      { code: 'SR-3232', name: 'S Series Recess 32×32', dimensions: '32 × 32', type: 'Single-threshold recess' },
      { code: 'SR-3636', name: 'S Series Recess 36×36', dimensions: '36 × 36', type: 'Single-threshold recess' },
      { code: 'SR-3648', name: 'S Series Recess 36×48', dimensions: '36 × 48', type: 'Single-threshold recess' },
      { code: 'SR-3660', name: 'S Series Recess 36×60', dimensions: '36 × 60', type: 'Single-threshold recess' },
      { code: 'SR-CORNER', name: 'S Series Corner Recess', dimensions: 'Multiple', type: 'Two-wall corner / Edge' },
      { code: 'SR-NEO', name: 'S Series NEO Angle', dimensions: 'Multiple', type: 'NEO angle corner' },
    ],
    faqs: [
      {
        q: 'What is the Wedge-Lok® Seal?',
        a: 'Wedge-Lok® is Florestone\'s patented integral drain seal. Instead of relying on a field-applied gasket, the drain is sealed into the base at the mold — eliminating one of the most common leak callbacks in shower-pan installs.',
      },
      {
        q: 'What is the S Series compression-molded process?',
        a: 'S Series bases are compression-molded — our proprietary manufacturing process where composite material is formed under high pressure in a closed mold. The result is a dense, dimensionally stable receptor with our stain, fungus and abrasion resistant finish from the mold. Florestone has used this process since 1965.',
      },
      {
        q: 'What colors are available?',
        a: 'Off-white is standard from the mold and is engineered to resist stain, fungus, fading and abrasion. Custom color matching is available on volume orders through your Florestone plumbing wholesaler.',
      },
    ],
    compareWith: ['f-series', 't-series', 'barrier-free'],
    metaTitle: 'S Series — Compression-Molded Recess Shower Bases | Florestone',
    metaDescription:
      'Florestone S Series compression-molded recess shower receptors with Wedge-Lok® integral drain seal. Stain, fungus and abrasion resistant. Made in the USA since 1965.',
  },
  'f-series': {
    key: 'f-series',
    slug: 'f-series',
    name: 'F Series',
    subtitle: 'Closed Mold Fiberglass w/ AcrylX™',
    tagline: 'Closed mold fiberglass shower bases, stalls and tub-showers with our proprietary AcrylX™ surface.',
    label: 'F Series · Closed Mold Fiberglass · AcrylX™',
    badge: 'AcrylX™ Surface',
    description:
      'Our closed mold fiberglass platform — shower bases, one-piece stalls, tub-showers and 3-piece wall systems finished in our proprietary AcrylX™ applied acrylic.',
    heroBody:
      'F Series is Florestone\'s closed mold fiberglass platform. Shells are laminated with our proprietary AcrylX™ applied acrylic and a composite reinforcement matrix — delivering a tough, repairable, color-matched surface in shower bases, one-piece stalls, tub-shower units (60×32/60×34/60×36/60×42) and three-piece wall systems for remodel work. The line where Florestone\'s 60+ years of plastics manufacturing meets modern installation realities.',
    specChips: ['AcrylX™ Surface', 'Closed Mold Fiberglass', 'Tub-Showers Available', '3-Piece Walls', 'Repairable', 'Edge Option'],
    ada: false,
    hero: { swatch: '#EDE4D6', tint: 'sand' },
    specs: [
      { label: 'Surface', value: 'AcrylX™ proprietary applied acrylic' },
      { label: 'Substrate', value: 'Closed mold fiberglass' },
      { label: 'Reinforcement', value: 'Composite reinforcement matrix' },
      { label: 'Configurations', value: 'Bases · Stalls · Tub-Showers · Walls' },
      { label: 'Edge Variant', value: '"The Edge" — premium tile transition' },
      { label: 'Use', value: 'Residential · Multifamily · Remodel · Light Commercial' },
      { label: 'Warranty', value: 'Lifetime residential (AcrylX™); 30-yr commercial' },
      { label: 'Codes', value: 'IAPMO File 0687 · UPC · ANSI Z124.2' },
    ],
    features: [
      {
        title: 'AcrylX™ Surface',
        body: 'Florestone\'s proprietary applied acrylic — color-through, stain-resistant, repairable in the field. Lifetime warranted in residential use, 30 years commercial.',
      },
      {
        title: 'Compression-Molded Heritage',
        body: 'Florestone was one of the first manufacturers of compression-molded shower receptors when we pioneered the process in 1965. F Series is that legacy in modern materials.',
      },
      {
        title: 'Full Bath Configurations',
        body: 'Beyond bases: one-piece shower stalls, 3-piece walls, and 60-inch tub-shower combos (6032TS, 6034TS, 6036TS, 6042TS) for full remodels and rentals.',
      },
      {
        title: 'The Edge Treatment',
        body: 'Optional Edge profile — Florestone\'s premium tile-transition detail at the perimeter. A featured Florestone innovation on closed mold and recess bases.',
      },
      {
        title: 'Built for the Trade',
        body: 'Lightweight against terrazzo, faster install, and finished color-through — what plumbers reach for on volume builds and renovation specs.',
      },
      {
        title: 'Two US Plants',
        body: 'Produced in Madera, California and Denison, Texas — duo-coast manufacturing for shorter lead times to your jobsite.',
      },
    ],
    models: [
      { code: 'F-3636', name: 'F Series 36×36 Base', dimensions: '36 × 36', type: 'Shower base — standard' },
      { code: 'F-4242', name: 'F Series 42×42 Base', dimensions: '42 × 42', type: 'Shower base — standard' },
      { code: 'F-EDGE', name: 'F Series w/ The Edge', dimensions: 'Multiple', type: 'Premium edge base' },
      { code: 'F-3232-3W', name: 'F Series 32-3W Shower Stall', dimensions: '32 × 32', type: 'One-piece shower stall' },
      { code: '6032TS', name: 'Model 6032TS Tub-Shower', dimensions: '60 × 32', type: '3-Wall tub-shower unit' },
      { code: '6034TS', name: 'Model 6034TS Tub-Shower', dimensions: '60 × 34', type: '3-Wall tub-shower unit' },
      { code: '6036TS', name: 'Model 6036TS Tub-Shower', dimensions: '60 × 36', type: '3-Wall tub-shower unit' },
      { code: 'F-3PC-NEO', name: '3-PC NEO Corner Walls', dimensions: 'Multiple', type: '3-piece wall system' },
    ],
    faqs: [
      {
        q: 'What is AcrylX™?',
        a: 'AcrylX™ is Florestone\'s proprietary applied acrylic with a composite reinforcement matrix. It\'s color-through, stain- and chip-resistant, and repairable in the field. Lifetime warranted in residential use and 30 years in commercial use.',
      },
      {
        q: 'What\'s the difference between F Series and S Series?',
        a: 'F Series is closed mold fiberglass with our AcrylX™ surface — lighter, designed for both bases and full one-piece configurations including tub-showers and stalls. S Series is the compression-molded recess line — heavier-duty for single-threshold recess installs.',
      },
      {
        q: 'Can the F Series tub-showers ship as a single piece for new construction?',
        a: 'Yes — F Series tub-showers are available as one-piece (new construction) and 3-piece (remodel through a doorway). The 3-piece variant is designed specifically for renovation, where the existing wall framing won\'t accommodate a one-piece haul-in.',
      },
    ],
    compareWith: ['s-series', 't-series', 'barrier-free'],
    metaTitle: 'F Series Closed Mold Fiberglass Shower Bases & Tub-Showers | Florestone',
    metaDescription:
      'Florestone F Series — closed mold fiberglass shower bases, one-piece stalls, 60-inch tub-showers and 3-piece walls, finished in proprietary AcrylX™. Lifetime warranted residential.',
  },
  't-series': {
    key: 't-series',
    slug: 't-series',
    name: 'T Series',
    subtitle: 'Terrazzo Shower Bases',
    tagline: 'Cast terrazzo — the original Florestone product. White portland cement, marble chips, 3,000+ PSI.',
    label: 'T Series · Terrazzo',
    badge: 'Heritage',
    description:
      'Solid terrazzo shower bases — tan and white marble chips cast in white portland cement, ground and polished. Models 100, 200, 300, 350, 400, 500 — standard, corner, NEO angle and barrier-free.',
    heroBody:
      'Terrazzo is where Florestone started. Our T Series bases are cast from tan and white marble chips in white portland cement to a minimum 3,000 PSI compressive strength, then ground, polished, grouted and sealed. The surface that gave Florestone its name in 1958 — and the line still specified into institutional, hospitality and high-spec residential projects today. Available standard (Model 100), recess (Model 200), corner (Model 300), NEO angle (Model 350) and barrier-free (Models 400 and 500).',
    specChips: ['Solid Terrazzo', '3,000+ PSI', 'Cast & Polished', 'White Portland Cement', 'Marble Chips', 'Heritage Since 1958'],
    ada: true,
    hero: { swatch: '#D9E8F4', tint: 'accent' },
    specs: [
      { label: 'Material', value: 'Terrazzo — marble chips + white portland cement' },
      { label: 'Compressive Strength', value: '3,000 PSI minimum' },
      { label: 'Finish', value: 'Ground & polished; grouted, sealed' },
      { label: 'Configurations', value: 'Std · Recess · Corner · NEO · Barrier-Free' },
      { label: 'Surface', value: 'Stain & moisture resistant' },
      { label: 'Models', value: '100 · 200 · 300 · 350 · 400 · 500 · 23-2HR' },
      { label: 'Heritage', value: 'Terrazzo line since 1958' },
      { label: 'Codes', value: 'IAPMO File 0687 · UPC · ANSI Z124.2' },
    ],
    features: [
      {
        title: 'Cast Terrazzo',
        body: 'Tan and white marble chips cast in white portland cement — solid through, polished, sealed. The material that gave Florestone its name.',
      },
      {
        title: '3,000+ PSI Compressive Strength',
        body: 'Cast to a minimum 3,000 PSI compressive strength. Specified into institutional and commercial settings where shower pans take real punishment.',
      },
      {
        title: 'Stain & Moisture Resistant',
        body: 'Ground and polished surface with all pits grouted and sealed — resists staining and moisture intrusion under heavy use.',
      },
      {
        title: 'Full Configuration Range',
        body: 'Model 100 standard, 200 recess, 300 corner, 350 NEO angle, 400 and 500 barrier-free, plus the 23-2HR transfer/seat configuration.',
      },
      {
        title: 'Heritage Product, Modern Spec',
        body: 'Terrazzo is what Florestone was founded on in 1947 — and it\'s still the right answer when the spec calls for solid mass, long life and industrial-grade durability.',
      },
      {
        title: 'Two US Plants',
        body: 'Cast in Madera, California and Denison, Texas. Two-plant US manufacturing for the institutional and commercial spec channel.',
      },
    ],
    models: [
      { code: 'T-100', name: 'Model 100 Standard Terrazzo', dimensions: 'Multiple', type: 'Standard base' },
      { code: 'T-200', name: 'Model 200 Recess Terrazzo', dimensions: 'Multiple', type: 'Recess base' },
      { code: 'T-300', name: 'Model 300 Corner Terrazzo', dimensions: 'Multiple', type: 'Two-wall corner' },
      { code: 'T-350', name: 'Model 350 NEO Angle', dimensions: 'Multiple', type: 'NEO angle corner' },
      { code: 'T-400', name: 'Model 400 Barrier-Free', dimensions: 'Multiple', type: 'Curbless / Roll-In', ada: true },
      { code: 'T-500', name: 'Model 500 Barrier-Free Transfer', dimensions: '36 × 36', type: 'Transfer base', ada: true },
      { code: 'T-23-2HR', name: 'Model 23-2HR Barrier-Free', dimensions: 'Multiple', type: 'Barrier-free recess', ada: true },
    ],
    faqs: [
      {
        q: 'Why terrazzo and not just acrylic?',
        a: 'Terrazzo is solid material — 3,000+ PSI compressive strength all the way through. For institutional, healthcare, school and high-traffic commercial specs where a shower pan needs to outlast the building, terrazzo is the right material. Florestone has cast terrazzo bases since 1958.',
      },
      {
        q: 'Are all T Series models ADA compliant?',
        a: 'Models 400 and 500 (plus 23-2HR) are the barrier-free / ADA variants. Models 100, 200, 300 and 350 are standard configurations that are not ADA on their own. Florestone is an industry leader in developing products that meet ADA requirements — our barrier-free terrazzo line is one of the deepest in the category.',
      },
      {
        q: 'How heavy is a T Series base?',
        a: 'Terrazzo is solid material — significantly heavier than fiberglass or acrylic. That weight is the point: it gives you the compressive strength and sound dampening that institutional specs require. Confirm load with your structural engineer before install.',
      },
    ],
    compareWith: ['s-series', 'f-series', 'barrier-free'],
    metaTitle: 'T Series Terrazzo Shower Bases — Models 100-500 | Florestone',
    metaDescription:
      'Florestone T Series — solid terrazzo shower bases cast from marble chips in white portland cement. 3,000+ PSI. Models 100 standard, 200 recess, 300 corner, 350 NEO, 400/500 barrier-free.',
  },
  'barrier-free': {
    key: 'barrier-free',
    slug: 'barrier-free',
    name: 'Barrier-Free',
    subtitle: 'ADA-Compliant Bases',
    tagline: 'Florestone is an industry leader in ADA — one of the deepest barrier-free catalogs in the category.',
    label: 'Barrier-Free · ADA',
    badge: 'ADA Leader',
    description:
      'One of the industry\'s deepest barrier-free catalogs — terrazzo Models 400 and 500, fiberglass molded BF, plus AcrylX™ curbless and roll-in configurations engineered for ADA compliance.',
    heroBody:
      'Florestone is an industry leader in developing products that meet the requirements of the Americans with Disabilities Act. Our barrier-free line spans cast terrazzo (Models 400 and 500), molded fiberglass with AcrylX™, and dedicated curbless / roll-in / transfer configurations. The line specified into healthcare, senior living, school, multifamily and accessible housing projects across all 50 states and Canada.',
    specChips: ['ADA Compliant', 'Curbless · Roll-In · Transfer', 'Terrazzo + AcrylX™', 'Healthcare-Spec', 'IAPMO Listed', 'Two US Plants'],
    ada: true,
    hero: { swatch: '#D9E8F4', tint: 'accent' },
    specs: [
      { label: 'Compliance', value: 'Americans with Disabilities Act (ADA)' },
      { label: 'Materials', value: 'Cast terrazzo · Closed mold fiberglass · AcrylX™' },
      { label: 'Configurations', value: 'Curbless · Roll-In · Transfer · Drop Front' },
      { label: 'Drain', value: 'Linear (where required) or center' },
      { label: 'Featured Models', value: 'T-400 · T-500 · T-23-2HR · 4040F BF' },
      { label: 'Use', value: 'Healthcare · Senior Living · School · Multifamily' },
      { label: 'Distribution', value: 'All 50 states + Canada via wholesalers' },
      { label: 'Codes', value: 'IAPMO File 0687 · UPC · ANSI Z124.2' },
    ],
    features: [
      {
        title: 'Industry Leader in ADA',
        body: 'Florestone is one of the original developers of ADA-compliant shower products. Our barrier-free catalog runs 16+ named models — across terrazzo, fiberglass and AcrylX™.',
      },
      {
        title: 'Three Materials, One Compliance Standard',
        body: 'Spec cast terrazzo (T-400/500/23-2HR) for institutional weight, closed mold fiberglass with AcrylX™ for renovation, or molded fiberglass barrier-free (4040F) — all meet ADA out of the box.',
      },
      {
        title: 'Curbless, Roll-In and Transfer',
        body: 'The three install patterns aging-in-place residential and accessible commercial specs actually require — engineered as their own product lines, not field-modified standard bases.',
      },
      {
        title: 'Healthcare & Senior Living Spec',
        body: 'The same line specified into hospitals, rehab facilities, senior living communities and accessible-housing projects nationwide.',
      },
      {
        title: 'Wedge-Lok® Drain on S Series Variants',
        body: 'On S Series barrier-free bases, our patented Wedge-Lok® integral drain seal eliminates one of the most common ADA-spec leak callbacks.',
      },
      {
        title: 'Stocked Through the Trade',
        body: 'Distributed through plumbing wholesalers — Ferguson, Pacific Plumbing Supply, VAMAC and the rest of the spec channel — across all 50 states and Canada.',
      },
    ],
    models: [
      { code: 'T-400', name: 'Model 400 Terrazzo Barrier-Free', dimensions: 'Multiple', type: 'Curbless / Roll-In terrazzo', ada: true },
      { code: 'T-500', name: 'Model 500 Terrazzo Transfer', dimensions: '36 × 36', type: 'Transfer terrazzo', ada: true },
      { code: 'T-23-2HR', name: 'Model 23-2HR Terrazzo BF', dimensions: 'Multiple', type: 'Barrier-free recess', ada: true },
      { code: '4040F-BF', name: 'Model 4040F Molded Fiberglass BF', dimensions: '40 × 40', type: 'Molded fiberglass curbless', ada: true },
      { code: 'F-BF-AcrylX', name: 'F Series BF w/ AcrylX™', dimensions: 'Multiple', type: 'Closed mold fiberglass / AcrylX™', ada: true },
      { code: 'SR-BF', name: 'S Series Barrier-Free', dimensions: 'Multiple', type: 'Compression-molded BF with Wedge-Lok®', ada: true },
    ],
    faqs: [
      {
        q: 'How long has Florestone been making ADA-compliant shower products?',
        a: 'Florestone has been an industry leader in developing barrier-free shower products since shortly after the ADA was passed in 1990. We were already producing accessible shower configurations before the legislation — our compression-molded heritage from 1965 gave us the manufacturing flexibility to lead the category.',
      },
      {
        q: 'Which material should I spec for a healthcare project?',
        a: 'For institutional healthcare with heavy use, T Series terrazzo (Models 400, 500, 23-2HR) gives you 3,000+ PSI solid material that outlasts most building skins. For senior-living renovation or multifamily aging-in-place, our closed mold fiberglass with AcrylX™ is lighter, faster to install and repairable in the field. Both meet ADA.',
      },
      {
        q: 'Does Florestone document ADA compliance on its products?',
        a: 'Yes — Florestone is IAPMO Research and Testing listed (File 0687) and our barrier-free models are documented under ANSI Z124. Spec sheets and compliance documentation are available through your authorized plumbing wholesaler or by request from sales.',
      },
    ],
    compareWith: ['s-series', 'f-series', 't-series'],
    metaTitle: 'Barrier-Free ADA Shower Bases — Terrazzo, AcrylX™, Fiberglass | Florestone',
    metaDescription:
      'Florestone Barrier-Free line — one of the industry\'s deepest ADA-compliant shower catalogs. Terrazzo Models 400/500, molded fiberglass 4040F, AcrylX™ and S Series barrier-free options.',
  },
};

export const HOME_FAQS: FAQ[] = [
  {
    q: 'Who is Florestone?',
    a: 'Florestone is an American manufacturer of shower bases, ADA barrier-free units, terrazzo mop sinks and bath solutions, founded in 1947. We pioneered compression-molded shower receptors in 1965 and have been one of the original developers of ADA-compliant shower products. Today we manufacture at two US plants — Madera, California and Denison, Texas — as part of American Bath Group.',
  },
  {
    q: 'What does Florestone make?',
    a: 'Shower bases (S Series compression-molded, F Series closed mold fiberglass with AcrylX™, T Series terrazzo), one-piece shower stalls, 60-inch tub-shower units, 3-piece shower walls for remodel, bathtubs (Reyna, Diana, Pegasus, Venetian), terrazzo mop sinks for commercial/institutional, and utility sinks. Distributed across all 50 states and Canada through plumbing wholesalers.',
  },
  {
    q: 'What\'s the difference between S Series, F Series, and T Series?',
    a: 'S Series is our compression-molded recess line — single-threshold with Wedge-Lok® integral drain seal. F Series is our closed mold fiberglass platform finished in proprietary AcrylX™ — lighter, broader configuration range (bases, stalls, tub-showers, walls). T Series is solid cast terrazzo at 3,000+ PSI — the heritage line still specified into institutional and healthcare projects.',
  },
  {
    q: 'Where are Florestone products made?',
    a: 'Florestone manufactures at two US plants — our original facility in Madera, California (15 acres) and a second plant in Denison, Texas. Two-plant US manufacturing supports shorter lead times to the spec channel.',
  },
  {
    q: 'How do I buy Florestone?',
    a: 'Through your plumbing wholesaler. Florestone is a B2B trade brand — we ship through Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial and other plumbing supply houses across the country. Use the Find a Dealer page or call (800) 446-2647 to get connected to a wholesaler in your area.',
  },
  {
    q: 'What about commercial mop sinks and utility sinks?',
    a: 'A big part of Florestone\'s catalog. Our terrazzo mop sinks (Models 5, 10–40, 50–70, 80–87, 90–99 plus MSR-2424/3624 molded variants) are specified into schools, hospitals, assisted living, hospitality and other commercial buildings nationwide. Utility sinks ship in molded fiberglass, wall-mount, and freestanding configurations.',
  },
];

export const TRUST_PILLS = [
  'USA-made since 1947',
  'Compression-molded since 1965',
  'ADA leadership',
  'IAPMO File 0687 · UPC · ANSI Z124',
  'All 50 states + Canada',
];
