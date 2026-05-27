import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { JsonLd, ORG_SCHEMA, WEBSITE_SCHEMA, faqSchema } from '@/components/seo/JsonLd';
import { HOME_FAQS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Florestone | Made for the Trade — Shower Bases, ADA Units & Bath Solutions',
  description:
    'Florestone manufactures shower bases, ADA barrier-free units, terrazzo mop sinks and complete bath solutions in the USA. Spec sheets, CAD files, and a nationwide dealer network.',
};

const trustItems = [
  { icon: '🇺🇸', label: 'Made in the USA' },
  { icon: '♿', label: 'ADA & ANSI A117.1' },
  { icon: '📋', label: 'IAPMO File 0687' },
  { icon: '📐', label: 'CAD & Spec Sheets' },
  { icon: '🏪', label: 'Nationwide Dealers' },
];

const categories = [
  {
    href: '/s-series',
    label: 'S Series',
    title: 'Saflor® Recess Bases',
    body: 'Compression-molded recess shower receptors with Wedge-Lok® drain seal. The original since 1965.',
    image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
    badge: 'Saflor®',
  },
  {
    href: '/f-series',
    label: 'F Series',
    title: 'RTM Fiberglass · AcrylX™',
    body: 'RTM bases, stalls, 3-piece walls and 60-inch tub-shower units in durable AcrylX™.',
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
    badge: 'AcrylX™',
  },
  {
    href: '/t-series',
    label: 'T Series',
    title: 'Cast Terrazzo Bases',
    body: 'Solid terrazzo at 3,000+ PSI — Models 100, 200, 300, 350, 400, 500. Heritage strength.',
    image: '/images/bases/terrazzo/jpg/florestone-model-300-6032-water-deco.jpg',
    badge: 'Terrazzo',
  },
  {
    href: '/barrier-free',
    label: 'Barrier-Free',
    title: 'ADA-Compliant Units',
    body: 'Curbless, roll-in and transfer configurations in terrazzo, fiberglass and AcrylX™.',
    image: '/images/ada/3562h/3562h-ada-deco.jpg',
    badge: 'ADA Leader',
    highlight: true,
  },
  {
    href: '/products',
    label: 'Shower Walls',
    title: 'Wall Surrounds',
    body: 'Smooth and textured wall panels to complete your shower installation.',
    image: '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg',
    badge: 'F Series',
  },
  {
    href: '/products',
    label: 'Utility & Mop Sinks',
    title: 'Terrazzo Mop Sinks',
    body: 'Commercial-grade terrazzo mop and utility sinks for schools, hospitals, and hospitality.',
    image: '/images/sinks/wm20/3648terrazo-sr17-wm20-deco.jpg',
    badge: 'Commercial',
  },
];

const whyCards = [
  {
    num: '01',
    title: 'Made in the USA',
    body: 'Manufactured in Madera, California and Denison, Texas. Dual-coast production serves all 50 states and Canada with consistent quality and lead times.',
  },
  {
    num: '02',
    title: 'ADA Expertise',
    body: 'An industry leader in developing barrier-free shower products — 16+ named ADA models across terrazzo, fiberglass and AcrylX™.',
  },
  {
    num: '03',
    title: 'Spec-Ready Documentation',
    body: 'CAD files, spec sheet PDFs, installation guides, and pricing — everything the trade needs, ready to download.',
  },
  {
    num: '04',
    title: 'Nationwide Distribution',
    body: 'Ships through Ferguson, Pacific Plumbing Supply, VAMAC, and hundreds of authorized plumbing wholesalers coast to coast.',
  },
];

const galleryItems = [
  {
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg',
    tag: 'Multifamily · Residential',
    title: 'Apartments & Rentals',
    sub: 'F Series 6042 · AcrylX™',
  },
  {
    image: '/images/bases/terrazzo/jpg/florestone-model-400-6333-deco.jpg',
    tag: 'Healthcare · ADA Barrier-Free',
    title: 'Hospital & Rehab',
    sub: 'T Series Model 400 · Roll-In',
  },
  {
    image: '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg',
    tag: 'Hospitality · Commercial',
    title: 'Hotels & Senior Living',
    sub: 'F Series 6032TS · 3-Wall Unit',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={ORG_SCHEMA} />
      <JsonLd data={WEBSITE_SCHEMA} />
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Navbar activePage="/" />

      {/* ── HERO ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden min-h-[600px] lg:min-h-[700px]">

        {/* Mobile-only photo banner */}
        <div className="relative h-56 sm:h-64 lg:hidden w-full overflow-hidden">
          <Image
            src="/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg"
            alt="Florestone shower base installed in modern bathroom"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-secondary)]/30" />
        </div>

        {/* Left: text panel */}
        <div className="relative flex items-center bg-[var(--color-secondary)] w-full lg:w-[52%] px-8 sm:px-12 lg:px-16 xl:px-20 py-14 lg:py-24">
          {/* Vertical teal accent line — desktop right edge */}
          <div className="absolute inset-y-0 right-0 w-[3px] bg-[var(--color-primary)]/25 hidden lg:block" />

          <div className="relative z-10 max-w-[480px] w-full">

            {/* Eyebrow badge */}
            <div
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border border-[var(--color-primary)]/40 rounded"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                Made for the Trade · Est. 1947
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-white text-[2.6rem] sm:text-[3rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.06] tracking-tight mb-6"
            >
              Built for the
              <br />
              job&nbsp;site.
              <br />
              <span className="text-[var(--color-primary)]">Spec&rsquo;d to last.</span>
            </h1>

            {/* Body */}
            <p className="text-white/65 text-[15px] lg:text-[16px] leading-[1.8] mb-9 font-light">
              Shower bases, ADA-compliant units, and complete bath solutions engineered in America for contractors, architects, and builders.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/find-a-dealer"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
              >
                Find a Dealer
              </Link>
              <Link
                href="/products"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/60 text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded hover:bg-white/8 transition-colors"
              >
                Browse Products
              </Link>
            </div>

            {/* Stats row — anchored inside text panel */}
            <div className="grid grid-cols-4 gap-0 border-t border-white/10 pt-8">
              {[
                { num: '75+', label: 'Years Mfg.' },
                { num: '200+', label: 'Configs' },
                { num: 'ADA', label: 'Certified' },
                { num: 'USA', label: 'Made In' },
              ].map((s, i) => (
                <div key={s.label} className={`text-center ${i > 0 ? 'border-l border-white/10' : ''}`}>
                  <span
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="block text-[22px] lg:text-[26px] font-semibold text-[var(--color-primary)] leading-none"
                  >
                    {s.num}
                  </span>
                  <span className="block text-[9px] lg:text-[10px] text-white/40 tracking-wider uppercase mt-1.5 font-light">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: photo panel — desktop only */}
        <div className="relative hidden lg:block lg:w-[48%] overflow-hidden">
          <Image
            src="/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg"
            alt="Florestone shower base installed in modern bathroom"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient blend from navy panel into photo */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)]/40 to-transparent" />
        </div>

      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-white border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-y-3 py-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-4">
                <span className="text-[15px]">{item.icon}</span>
                <span
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--color-text-muted)]"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-lg">
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
              >
                The Florestone Catalog
              </p>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl leading-tight tracking-tight mb-3"
              >
                Every project, covered.
              </h2>
              <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed font-light">
                Shower bases in three materials, full bath configurations, ADA barrier-free, shower walls, and the commercial terrazzo mop-sink line.
              </p>
            </div>
            <Link
              href="/products"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold text-[12px] tracking-[0.06em] uppercase rounded transition-colors self-start whitespace-nowrap"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`group bg-white rounded-lg overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  cat.highlight
                    ? 'border-[var(--color-primary)]/30'
                    : 'border-[var(--color-line)]'
                } hover:border-[var(--color-primary)]`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-light)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      style={{ fontFamily: 'var(--font-heading)' }}
                      className="text-[9px] font-semibold tracking-[0.12em] uppercase bg-white/90 text-[var(--color-secondary)] px-2 py-1 rounded"
                    >
                      {cat.label}
                    </span>
                  </div>
                  {cat.highlight && (
                    <div className="absolute top-3 right-3 z-10">
                      <span
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[9px] font-semibold tracking-[0.12em] uppercase bg-[var(--color-primary)] text-white px-2 py-1 rounded"
                      >
                        ADA
                      </span>
                    </div>
                  )}
                </div>
                {/* Body */}
                <div className="p-5">
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="font-semibold text-[var(--color-secondary)] text-[17px] mb-2 leading-snug"
                  >
                    {cat.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed font-light mb-4">
                    {cat.body}
                  </p>
                  <span
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold tracking-[0.04em] text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors"
                  >
                    View series →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FLORESTONE ── */}
      <section style={{ backgroundColor: 'var(--color-powder)' }} className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-xl mb-12">
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
            >
              Why contractors spec Florestone
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl leading-tight tracking-tight"
            >
              Family-built since 1947.
              <br />
              Trade-grade every time.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg p-7 border border-white hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all"
              >
                <div
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-semibold tracking-[0.12em] text-[var(--color-primary)] mb-5"
                >
                  {card.num}
                </div>
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-semibold text-[var(--color-secondary)] text-[16px] mb-3 leading-snug"
                >
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed font-light">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND A DEALER ── */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
              >
                Plumbing Trade Channel
              </p>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-white text-3xl md:text-4xl leading-tight tracking-tight mb-5"
              >
                Florestone ships
                <br />
                through your wholesaler.
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed font-light mb-8 max-w-md">
                We&apos;re a B2B trade brand. Find your local Ferguson, Pacific Plumbing Supply, VAMAC, or other authorized Florestone wholesaler — or call our sales team direct.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/find-a-dealer"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
                >
                  Find a Dealer
                </Link>
                <a
                  href="tel:8004462647"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:border-white/60 text-white/80 hover:text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
                >
                  (800) 446-2647
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
              {[
                { num: '50', label: 'States + Canada' },
                { num: '2', label: 'US Plants — CA + TX' },
                { num: '1947', label: 'Family Founded' },
                { num: '3', label: 'Generations' },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--color-secondary-dark)] px-8 py-8">
                  <div
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[40px] font-semibold text-white leading-none mb-2"
                  >
                    {s.num}
                  </div>
                  <div className="text-[11px] text-white/40 tracking-wider uppercase font-light">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
            >
              Florestone in the Field
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl leading-tight tracking-tight"
            >
              Where we get spec'd.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="relative rounded-lg overflow-hidden aspect-[4/5] group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--color-primary)] mb-2"
                  >
                    {item.tag}
                  </p>
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="font-semibold text-[22px] leading-tight mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: 'var(--color-offwhite)' }} className="py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
            >
              FAQ
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl leading-tight tracking-tight"
            >
              Specifying Florestone, answered.
            </h2>
          </div>
          <FAQAccordion items={HOME_FAQS} />
        </div>
      </section>

      <CTABand
        heading="Ready to spec Florestone?"
        body="Find your local Florestone wholesaler — Ferguson, Pacific Plumbing Supply, VAMAC and the rest of the trade channel. Or call (800) 446-2647."
        ctaLabel="Find a Dealer"
        ctaHref="/find-a-dealer"
        secondaryLabel="Browse Catalog"
        secondaryHref="/products"
      />

      <Footer />
    </>
  );
}
