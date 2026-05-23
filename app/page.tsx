import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { HOME_FAQS, SERIES } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Florestone | Contractor-Spec Shower Bases, ADA Units & Bath Solutions Since 1969',
  description:
    'Florestone manufactures shower bases, ADA & barrier-free units, and complete bath solutions in the USA. Spec sheets, CAD files, and nationwide dealer network for contractors, architects, and builders.',
};

const categories = [
  {
    href: '/s-series',
    eyebrow: 'S Series',
    title: 'Saflor® Recess Bases',
    body: 'Registered Saflor® recess shower receptors with Wedge-Lok® drain seal.',
    chip: 'Saflor®',
    tint: 'sand',
  },
  {
    href: '/f-series',
    eyebrow: 'F Series',
    title: 'RTM Fiberglass · AcrylX™',
    body: 'RTM bases, stalls, 3-piece walls and 60-inch tub-shower units in AcrylX™.',
    chip: 'AcrylX™',
    tint: 'sand',
  },
  {
    href: '/t-series',
    eyebrow: 'T Series',
    title: 'Cast Terrazzo Bases',
    body: 'Solid terrazzo at 3,000+ PSI — Models 100, 200, 300, 350, 400, 500.',
    chip: 'Heritage',
    tint: 'sand',
  },
  {
    href: '/barrier-free',
    eyebrow: 'Barrier-Free',
    title: 'ADA-Compliant Bases',
    body: 'Curbless, roll-in and transfer in terrazzo, fiberglass and AcrylX™.',
    chip: 'ADA Leader',
    tint: 'accent',
  },
  {
    href: '/products',
    eyebrow: 'Mop Sinks',
    title: 'Terrazzo Mop & Utility',
    body: 'Models 5 through 99, half-round and drop-front — schools, hospitals, hospitality.',
    chip: 'Commercial',
    tint: 'sand',
  },
  {
    href: '/products',
    eyebrow: 'Bathtubs',
    title: 'Fiberglass Bathtubs',
    body: 'Reyna, Diana, Pegasus, Catrina, Venetian — F Series fiberglass tubs.',
    chip: 'F Series',
    tint: 'sand',
  },
];

const whyCards = [
  {
    label: '01',
    title: 'Family-built since 1947',
    body: 'Founded by Ray and Ann Flores in Oakland, CA. Three generations of family ownership inside American Bath Group — small-shop pride with trade-channel scale.',
  },
  {
    label: '02',
    title: 'Compression-molded pioneer',
    body: 'One of the first manufacturers of compression-molded shower receptors when we introduced the process in 1965. Six decades of refinement in every base.',
  },
  {
    label: '03',
    title: 'ADA leadership',
    body: 'An industry leader in developing barrier-free shower products — 16+ named ADA models across terrazzo, fiberglass and AcrylX™.',
  },
  {
    label: '04',
    title: 'Two US plants',
    body: 'Manufactured in Madera, California (15 acres) and Denison, Texas. Duo-coast manufacturing serves all 50 states and Canada through the plumbing trade.',
  },
];

const galleryEntries = [
  {
    tag: 'Healthcare · ADA Barrier-Free',
    name: 'Hospital & Rehab Spec',
    sub: 'T Series Model 400 terrazzo · Roll-In',
    accent: 'from-[#1A4A72] via-[#2B5F8E]/80 to-transparent',
  },
  {
    tag: 'Commercial · Janitorial',
    name: 'Schools & Public Buildings',
    sub: 'Terrazzo Mop Sinks · Models 10–40',
    accent: 'from-[#2D3748] via-[#4A5568]/70 to-transparent',
  },
  {
    tag: 'Multifamily · Renovation',
    name: 'Apartments & Rentals',
    sub: 'F Series 6032TS · 3-Piece Walls',
    accent: 'from-[#1B2537] via-[#3D7AB0]/60 to-transparent',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar activePage="/" />

      {/* Hero — editorial 7/5 split, cream left, photo right, hard seam */}
      <section className="relative bg-[var(--color-sand)] overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-12 items-stretch">
          {/* LEFT — 5 cols, cream, hard right edge */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 lg:pl-12 lg:pr-14 py-10 lg:py-16 max-h-[680px] relative">
            {/* Single blue accent — 2px vertical rule beside the eyebrow */}
            <div className="absolute left-0 top-16 lg:top-20 w-[2px] h-12 bg-[var(--color-accent)] hidden lg:block" aria-hidden />

            <div className="max-w-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-charcoal)]/60 mb-6">
                Florestone — Est. 1947 · Madera, CA
              </p>

              <h1 className="font-display text-[var(--color-charcoal)] text-[2.25rem] sm:text-[2.75rem] xl:text-[3.25rem] leading-[1.05] tracking-[-0.02em] mb-6">
                Three generations of trade-grade.{' '}
                <em className="font-display italic">Cast in stone since 1947.</em>
              </h1>

              <p className="font-body text-[var(--color-charcoal)]/75 text-[15px] leading-[1.65] mb-8 max-w-sm">
                Saflor® recess shower bases, AcrylX™ RTM fiberglass, cast terrazzo and ADA barrier-free units —
                family-built for the plumbing trade since Ray and Ann Flores founded the company in 1947.
              </p>

              <div className="flex flex-wrap items-stretch gap-3 mb-10">
                <Link
                  href="/find-a-dealer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-charcoal)] hover:bg-[var(--color-accent-dark)] text-[var(--color-sand)] font-body font-medium text-sm rounded-sm transition-colors cursor-pointer"
                >
                  Find a Wholesaler
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-sand)] font-body font-medium text-sm rounded-sm transition-colors cursor-pointer"
                >
                  Browse the catalog
                  <span className="font-mono text-xs">→</span>
                </Link>
              </div>

              {/* Spec ticker — product-line index, contractor-grade signal */}
              <div className="pt-4 border-t border-[var(--color-charcoal)]/15">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-charcoal)]/55 leading-relaxed">
                  <span className="text-[var(--color-charcoal)]/75">Saflor® · AcrylX™ · Terrazzo · ADA</span>
                  <span className="hidden sm:inline"> —— Bases · Stalls · Tub-Showers · Mop Sinks · Bathtubs</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — 7 cols, photo, hard edge against cream */}
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[640px]">
            <img
              src="https://24202603.fs1.hubspotusercontent-na1.net/hubfs/24202603/florestone-6032ts-3w-unit-deco.jpg"
              alt="Florestone Model 6032TS three-wall tub-shower unit with vanity in a designed bathroom"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: '50% 70%' }}
            />

            {/* Minimal model identifier — bottom-left, mono, sits over the photo without overlay panels */}
            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                F Series · Model 6032TS — 3-Wall Tub-Shower
              </span>
            </div>
          </div>
        </div>

        {/* Bottom marquee — real Florestone credentials */}
        <div className="relative z-10 border-t border-[var(--color-line)] bg-[var(--color-sand)]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-y-3 gap-x-8 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-charcoal)]/55">
            {[
              'IAPMO File 0687',
              'UPC · ANSI Z124',
              'AcrylX™ · Wedge-Lok®',
              'Madera, CA + Denison, TX',
              'All 50 states + Canada',
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-[var(--color-accent)]">{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-[var(--color-offwhite)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-3">
                The Florestone Catalog
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight mb-3 tracking-tight">
                Six categories. One family business.
              </h2>
              <p className="font-body text-[var(--color-slate)] text-base leading-relaxed">
                Shower bases in three materials, full bath configurations, ADA barrier-free, plus the terrazzo
                mop-sink and utility line that has been the backbone of our commercial business since 1958.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-body font-medium text-sm rounded-md transition-colors self-start"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-white border border-[var(--color-line)] rounded-xl overflow-hidden hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div
                  className={`aspect-[5/3] flex items-center justify-center relative ${
                    cat.tint === 'accent' ? 'bg-[var(--color-accent-light)]' : 'bg-[var(--color-sand)]'
                  }`}
                >
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--color-charcoal)]/60 bg-white/70 rounded px-2 py-1">
                    {cat.eyebrow}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-[0.12em] bg-[var(--color-charcoal)] text-white rounded px-2 py-1">
                    {cat.chip}
                  </span>
                  <div
                    className={`w-32 h-20 rounded-lg border-2 ${
                      cat.tint === 'accent'
                        ? 'border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8'
                        : 'border-[var(--color-stone)]/40 bg-white/40'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[var(--color-charcoal)] mb-1.5">{cat.title}</h3>
                  <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-4">{cat.body}</p>
                  <span className="inline-flex items-center gap-1.5 font-body font-medium text-sm text-[var(--color-accent)] group-hover:text-[var(--color-accent-dark)]">
                    View series →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Florestone */}
      <section className="bg-[var(--color-sand)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
              Why the trade specs Florestone
            </p>
            <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight tracking-tight">
              Family-built. Three generations. Cast in stone since 1947.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-7 border border-[var(--color-line)] hover:border-[var(--color-accent)]/40 transition-colors"
              >
                <div className="font-mono text-[var(--color-accent)] text-sm mb-6">{card.label}</div>
                <h3 className="font-display text-xl text-[var(--color-charcoal)] mb-3">{card.title}</h3>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer locator teaser — light sand panel */}
      <section className="bg-[var(--color-sand)] py-16 px-6 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
                Plumbing Trade Channel
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                Florestone ships through your wholesaler.
              </h2>
              <p className="font-body text-[var(--color-slate)] text-base leading-relaxed mb-8 max-w-md">
                We are a B2B trade brand. Find your local Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial
                or other authorized Florestone wholesaler — or call our sales team direct at (800) 446-2647.
              </p>
              <Link
                href="/find-a-dealer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-charcoal)] hover:bg-[var(--color-accent-dark)] text-white font-body font-medium text-sm rounded-md transition-colors"
              >
                Find a Wholesaler →
              </Link>
            </div>

            <div className="relative bg-white border border-[var(--color-line)] rounded-xl p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent)] mb-5">
                Coverage Summary
              </div>
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <div className="font-display text-[var(--color-charcoal)] text-4xl">50</div>
                  <div className="text-xs text-[var(--color-slate-light)] mt-1 uppercase tracking-wider font-mono">States + Canada</div>
                </div>
                <div>
                  <div className="font-display text-[var(--color-charcoal)] text-4xl">2</div>
                  <div className="text-xs text-[var(--color-slate-light)] mt-1 uppercase tracking-wider font-mono">US Plants — CA + TX</div>
                </div>
                <div>
                  <div className="font-display text-[var(--color-charcoal)] text-4xl">1947</div>
                  <div className="text-xs text-[var(--color-slate-light)] mt-1 uppercase tracking-wider font-mono">Family Founded</div>
                </div>
                <div>
                  <div className="font-display text-[var(--color-charcoal)] text-4xl">3</div>
                  <div className="text-xs text-[var(--color-slate-light)] mt-1 uppercase tracking-wider font-mono">Generations Family-Run</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project gallery */}
      <section className="bg-[var(--color-offwhite)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-3">
                Where Florestone Ships
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight tracking-tight">
                The specs we live in.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {galleryEntries.map((entry) => (
              <div
                key={entry.name}
                className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[var(--color-stone)] via-[var(--color-stone-dark)] to-[var(--color-charcoal)] group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${entry.accent} opacity-90`} />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-stone)] mb-2">
                    {entry.tag}
                  </p>
                  <h3 className="font-display text-2xl leading-tight mb-1">{entry.name}</h3>
                  <p className="font-body text-sm text-white/70">{entry.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-sand)] py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
              FAQ
            </p>
            <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight tracking-tight">
              Specifying Florestone, answered.
            </h2>
          </div>
          <FAQAccordion items={HOME_FAQS} />
        </div>
      </section>

      <CTABand
        heading="Three generations stand behind every Florestone unit."
        body="Find your local Florestone wholesaler — Ferguson, Pacific Plumbing Supply, VAMAC and the rest of the trade channel. Or call (800) 446-2647."
        ctaLabel="Find a Wholesaler"
        ctaHref="/find-a-dealer"
        secondaryLabel="Browse Catalog"
        secondaryHref="/products"
      />

      <Footer />
    </>
  );
}
