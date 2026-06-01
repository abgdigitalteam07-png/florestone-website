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

const categories = [
  {
    href: '/s-series',
    label: 'S Series',
    title: 'Saflor® Recess Bases',
    body: 'Compression-molded recess shower receptors with Wedge-Lok® drain seal. The original since 1965.',
    image: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
  },
  {
    href: '/f-series',
    label: 'F Series',
    title: 'RTM Fiberglass · AcrylX™',
    body: 'RTM bases, stalls, 3-piece walls and 60-inch tub-shower units in durable AcrylX™.',
    image: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
  },
  {
    href: '/t-series',
    label: 'T Series',
    title: 'Cast Terrazzo Bases',
    body: 'Solid terrazzo at 3,000+ PSI — Models 100, 200, 300, 350, 400, 500. Heritage strength.',
    image: '/images/bases/terrazzo/jpg/florestone-model-300-6032-water-deco.jpg',
  },
  {
    href: '/barrier-free',
    label: 'Barrier-Free',
    title: 'ADA-Compliant Units',
    body: 'Curbless, roll-in and transfer configurations in terrazzo, fiberglass and AcrylX™.',
    image: '/images/ada/3562h/3562h-ada-deco.jpg',
  },
  {
    href: '/products',
    label: 'Shower Walls',
    title: 'Wall Surrounds',
    body: 'Smooth and textured wall panels to complete your shower installation.',
    image: '/images/shower-walls/3060-walls/6030rtmbase-3060walls-deco.jpg',
  },
  {
    href: '/products',
    label: 'Mop Sinks',
    title: 'Terrazzo Mop Sinks',
    body: 'Commercial-grade terrazzo mop and utility sinks for schools, hospitals, and hospitality.',
    image: '/images/sinks/wm20/3648terrazo-sr17-wm20-deco.jpg',
  },
];

const stats = [
  { num: '75+', label: 'Years Manufacturing' },
  { num: '200+', label: 'Configurations' },
  { num: '16+', label: 'ADA Models' },
  { num: '2', label: 'US Plants' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={ORG_SCHEMA} />
      <JsonLd data={WEBSITE_SCHEMA} />
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Navbar activePage="/" />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'min(90vh, 720px)', minHeight: '520px' }}>
        {/* Background image */}
        <Image
          src="/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg"
          alt="Florestone shower base installed in modern bathroom"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[var(--color-secondary)]/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[var(--color-primary-light)] mb-5 opacity-90"
          >
            Made for the Trade
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-bold text-white text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] xl:text-[5rem] leading-[1.05] tracking-tight mb-5 max-w-[900px]"
          >
            Enduring Strength.
            <br />
            Classic Beauty.
          </h1>
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-white/70 text-[16px] sm:text-[18px] mb-8 font-light tracking-wide"
          >
            Family-built since 1947. Manufactured in the USA.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--color-secondary)] font-semibold text-[14px] rounded hover:bg-white/90 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/find-a-dealer"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/50 text-white font-semibold text-[14px] rounded hover:border-white hover:bg-white/10 transition-colors"
            >
              Find a Dealer
            </Link>
          </div>

          {/* Stats row */}
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-secondary)]/80 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 sm:grid-cols-4 gap-px">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center px-4 ${i > 0 ? 'border-l border-white/10' : ''}`}>
                  <span
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="block text-[24px] lg:text-[28px] font-bold text-white leading-none"
                  >
                    {s.num}
                  </span>
                  <span className="block text-[11px] text-white/45 tracking-wider uppercase mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[var(--color-offwhite)] border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-around gap-y-3 py-4">
            {[
              { icon: '🇺🇸', label: 'Made in the USA' },
              { icon: '♿', label: 'ADA & ANSI A117.1' },
              { icon: '📋', label: 'IAPMO File 0687' },
              { icon: '📐', label: 'CAD & Spec Sheets' },
              { icon: '🏪', label: 'Nationwide Dealers' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-3">
                <span className="text-[14px]">{item.icon}</span>
                <span
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-medium tracking-[0.06em] text-[var(--color-text-muted)]"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-bold text-[var(--color-secondary)] text-[2rem] md:text-[2.4rem] leading-tight tracking-tight"
              >
                Our Products
              </h2>
              <p className="text-[var(--color-text-muted)] text-[15px] mt-2 font-normal">
                Shower bases in three materials, full bath configurations, ADA barrier-free, and more.
              </p>
            </div>
            <Link
              href="/products"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              View All →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-white border border-[var(--color-line)] rounded overflow-hidden hover:border-[var(--color-secondary)] hover:shadow-lg transition-all duration-200"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-light)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                {/* Body */}
                <div className="p-6">
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-primary)] mb-1"
                  >
                    {cat.label}
                  </p>
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="font-bold text-[var(--color-secondary)] text-[17px] mb-2 leading-snug"
                  >
                    {cat.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed mb-4">
                    {cat.body}
                  </p>
                  <span
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors"
                  >
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="bg-[var(--color-secondary)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-4"
              >
                Our Story
              </p>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-bold text-white text-[2rem] md:text-[2.6rem] leading-tight tracking-tight mb-5"
              >
                Eight decades of
                <br />
                American craftsmanship.
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-md">
                Founded in 1947 by Ray and Ann Flores, Florestone has been family-owned for three generations. We manufacture in Madera, California and Denison, Texas — building products that contractors trust job after job.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/why-florestone"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[var(--color-secondary)] font-semibold text-[13px] rounded hover:bg-white/90 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/find-a-dealer"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white font-semibold text-[13px] rounded hover:border-white hover:bg-white/10 transition-colors"
                >
                  Find a Dealer
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded overflow-hidden border border-white/10">
              {[
                { num: '1947', label: 'Family Founded' },
                { num: '3', label: 'Generations' },
                { num: '2', label: 'US Plants — CA + TX' },
                { num: '50', label: 'States + Canada' },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--color-secondary-mid)] px-8 py-8">
                  <div
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[40px] font-bold text-white leading-none mb-2"
                  >
                    {s.num}
                  </div>
                  <div className="text-[11px] text-white/45 tracking-wider uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FLORESTONE ── */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-xl mb-12">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-bold text-[var(--color-secondary)] text-[2rem] md:text-[2.4rem] leading-tight tracking-tight"
            >
              Why contractors spec Florestone
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px] mt-3">
              Trade-grade quality, spec-ready documentation, and the nationwide distribution network you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                title: 'Made in the USA',
                body: 'Manufactured in Madera, California and Denison, Texas. Dual-coast production serves all 50 states and Canada.',
              },
              {
                num: '02',
                title: 'ADA Expertise',
                body: 'An industry leader in barrier-free shower products — 16+ named ADA models across terrazzo, fiberglass and AcrylX™.',
              },
              {
                num: '03',
                title: 'Spec-Ready Docs',
                body: 'CAD files, spec sheet PDFs, installation guides, and pricing — everything the trade needs, ready to download.',
              },
              {
                num: '04',
                title: 'Nationwide Distribution',
                body: 'Ships through Ferguson, Pacific Plumbing Supply, VAMAC, and hundreds of authorized wholesalers coast to coast.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded p-7 border border-[var(--color-line)] hover:border-[var(--color-secondary)] hover:shadow-md transition-all"
              >
                <div
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-bold tracking-[0.12em] text-[var(--color-primary)] mb-5"
                >
                  {card.num}
                </div>
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-bold text-[var(--color-secondary)] text-[16px] mb-3 leading-snug"
                >
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-bold text-[var(--color-secondary)] text-[2rem] md:text-[2.4rem] leading-tight tracking-tight"
            >
              Where we get spec&rsquo;d
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px] mt-2">
              Florestone in multifamily, healthcare, hospitality, and commercial projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
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
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded overflow-hidden aspect-[4/5] group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--color-primary-light)] mb-2 opacity-80"
                  >
                    {item.tag}
                  </p>
                  <h3
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="font-bold text-[22px] leading-tight mb-1"
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/55">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-12">
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-bold text-[var(--color-secondary)] text-[2rem] md:text-[2.4rem] leading-tight tracking-tight"
            >
              Specifying Florestone, answered.
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px] mt-3">
              Common questions from architects, contractors, and specifiers.
            </p>
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
