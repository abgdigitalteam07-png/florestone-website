import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { JsonLd, ORG_SCHEMA, faqSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Why Florestone | USA-Made Since 1947 — Two US Plants, ADA Leader',
  description:
    'Florestone has manufactured shower bases, terrazzo mop sinks, and ADA-compliant bath products in Madera, CA and Denison, TX since 1947. Two US manufacturing plants. IAPMO File 0687 · ANSI Z124 · ADA Leader.',
  openGraph: {
    title: 'Why Florestone | USA-Made Since 1947',
    description:
      'Two US manufacturing plants. 75+ years of trade-grade shower bases, ADA units, and terrazzo mop sinks made in America.',
    type: 'website',
    url: 'https://www.florestone.com/why-florestone',
    images: [
      {
        url: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6060f-wht-swan-mt-ms-kai-pk-deco.jpg',
        width: 1200,
        height: 630,
        alt: 'Florestone F Series 6060 shower base',
      },
    ],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { num: '75+', label: 'Years Manufacturing' },
  { num: '200+', label: 'Product Configurations' },
  { num: '16+', label: 'ADA Models' },
  { num: '2', label: 'US Plants' },
];

const certs = [
  {
    id: '01',
    title: 'IAPMO File 0687',
    body: 'Florestone is listed with IAPMO Research and Testing under File No. 0687 — the standard accreditation referenced by spec engineers, code officials, and plumbing inspectors nationwide.',
  },
  {
    id: '02',
    title: 'ADA / ANSI A117.1',
    body: 'Florestone barrier-free shower products comply with the Americans with Disabilities Act and ANSI A117.1 accessible design standards. Over 16 named ADA models in terrazzo, fiberglass, and AcrylX™.',
  },
  {
    id: '03',
    title: 'Made in USA',
    body: 'Every Florestone unit is manufactured in the United States — at our flagship 15-acre plant in Madera, California or our second plant in Denison, Texas. No offshore production.',
  },
  {
    id: '04',
    title: 'UPC Certified',
    body: 'Products certified to the Uniform Plumbing Code (UPC), ensuring acceptance by local jurisdictions and commercial inspectors from coast to coast.',
  },
  {
    id: '05',
    title: 'ANSI Z124',
    body: 'Compliant with ANSI Z124.1.2-2005 and ANSI Z-124.2 plastic shower receptor and bathtub standards — required for commercial specifications in schools, healthcare, and hospitality.',
  },
  {
    id: '06',
    title: 'S Series — Since 1965',
    body: 'The S Series compression-molded receptor — with its proprietary Wedge-Lok® drain seal — has been a trade standard since 1965. Manufactured in Denison, TX.',
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
    body: 'An industry leader in developing barrier-free shower products — 16+ named ADA models across terrazzo, fiberglass, and AcrylX™.',
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

const FAQS = [
  {
    q: 'Who makes Florestone products?',
    a: 'Florestone Products is an American manufacturer established in 1947. The company is part of American Bath Group (ABG), the largest privately-held bath products manufacturer in the United States, and operates two dedicated US manufacturing plants — in Madera, California and Denison, Texas. All products are manufactured in the USA.',
  },
  {
    q: 'Where are Florestone products manufactured?',
    a: 'All Florestone products are manufactured in the United States at two plants. The Madera, California plant (15 acres, est. 1947) produces closed mold fiberglass F Series units, cast terrazzo, and AcrylX™ surface-finished products. The Denison, Texas plant produces compression-molded S Series shower receptors and utility products, serving the Central, Gulf Coast, Southeast, and Midwest trade channels with shorter lead times. No Florestone products are manufactured offshore.',
  },
  {
    q: 'How long has Florestone been in business?',
    a: 'Florestone has been in continuous operation since 1947 — over 75 years. Key milestones include: 1947 (founded, cast utility products), 1958 (terrazzo added to catalog), 1965 (compression-molded shower receptors introduced), 1974 (fiberglass bathtubs), 1992 (acrylic surface products), and ongoing ADA leadership since the 1990s. Today Florestone operates under American Bath Group with two US manufacturing plants.',
  },
  {
    q: 'What certifications and approvals does Florestone hold?',
    a: 'Florestone holds multiple industry certifications. IAPMO File 0687 is the primary listing — Florestone is listed with IAPMO Research and Testing under File No. 0687, which is the certification referenced by specification engineers and plumbing inspectors. Products also comply with ANSI Z124.1.2-2005 and ANSI Z-124.2 plastic shower receptor and bathtub standards, and are certified to the Uniform Plumbing Code (UPC). ADA barrier-free products meet the Americans with Disabilities Act and ANSI A117.1 accessible design standards. All products are manufactured in the USA.',
  },
  {
    q: 'What product families does Florestone make?',
    a: 'Florestone manufactures three core material platforms for shower bases: the S Series (compression-molded recess bases, available in 32×32 through multiple configurations including corner and NEO angle), the F Series (closed mold fiberglass with proprietary AcrylX™ applied-acrylic surface, including tub-shower units, 3-piece wall systems, and The Edge premium series), and the T Series (solid cast terrazzo Models 100, 200, 300, 350, 400, and 500). In addition to shower bases, Florestone produces a dedicated Barrier-Free ADA line with 16+ models, terrazzo and molded-fiberglass mop sinks for commercial specification, fiberglass bathtubs, and utility sinks.',
  },
];

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: 'https://www.florestone.com/' },
  { name: 'Why Florestone', url: 'https://www.florestone.com/why-florestone' },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhyFlorestonePage() {
  return (
    <>
      <JsonLd data={ORG_SCHEMA} />
      <JsonLd data={BREADCRUMB} />
      <JsonLd data={faqSchema(FAQS)} />
      <Navbar activePage="/why-florestone" />

      {/* ── HERO ── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden bg-[var(--color-secondary)]">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/bases/f-series/lifestyles/jpg/florestone-f-series-6060f-wht-swan-mt-ms-kai-pk-deco.jpg"
            alt="Florestone F Series shower base installed in modern bathroom"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Left navy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-28 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-white/40">
            <Link href="/" className="text-[11px] tracking-wider uppercase hover:text-white/70 transition-colors font-light">
              Home
            </Link>
            <span className="text-[11px]">/</span>
            <span className="text-[11px] tracking-wider uppercase text-white/60 font-light">Why Florestone</span>
          </div>

          <div className="max-w-xl">
            <div
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[var(--color-primary)]/40 rounded"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                The Florestone Story · Est. 1947
              </span>
            </div>

            <h1
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-white text-[2.4rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.08] tracking-tight mb-6"
            >
              Why the Trade
              <br />
              Specs Florestone
            </h1>

            <p className="text-white/65 text-[16px] leading-[1.75] mb-8 max-w-md font-light">
              75+ years of American manufacturing — compression-molded, closed mold fiberglass, and hand-poured terrazzo. Two US plants. Every unit built to the trade standard.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/products"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
              >
                Browse the Catalog
              </Link>
              <Link
                href="/find-a-dealer"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded hover:bg-white/10 transition-colors"
              >
                Find a Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
              >
                The Florestone Story
              </p>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-7 leading-tight"
              >
                Founded 1947.<br />Two plants. Built for the trade.
              </h2>

              <div className="space-y-5 text-[var(--color-text-muted)] text-[15px] leading-[1.8] font-light">
                <p>
                  Florestone has been manufacturing trade-grade bath products in the United States since 1947 — starting with cast utility products and expanding into terrazzo, compression-molded shower receptors, closed mold fiberglass, and ADA-compliant barrier-free units.
                </p>
                <p>
                  In 1965, Florestone was one of the first manufacturers in the industry to produce compression-molded shower receptors. That process — refined over six decades — is what the S Series is built on today, produced at our Denison, Texas plant.
                </p>
                <p>
                  Our Madera, California plant produces closed mold fiberglass F Series units, AcrylX™ surface-finished products, and hand-poured terrazzo — the same process used in cultured marble, delivering a dense, non-porous surface that holds up to commercial specification.
                </p>
                <p>
                  Since the 1990s, Florestone has been an ADA leadership brand — developing barrier-free shower products that meet the Americans with Disabilities Act and ANSI A117.1 before most competitors entered the space. Part of American Bath Group, the largest privately-held bath products manufacturer in the United States.
                </p>
              </div>

              {/* Timeline pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { year: '1947', event: 'Founded, Oakland CA' },
                  { year: '1958', event: 'Terrazzo + renamed Florestone' },
                  { year: '1965', event: 'Compression-molding pioneer' },
                  { year: '1990s', event: 'ADA leadership begins' },
                ].map((m) => (
                  <div
                    key={m.year}
                    className="flex items-center gap-2 px-3 py-2 rounded border border-[var(--color-line)] bg-[var(--color-offwhite)]"
                  >
                    <span
                      style={{ fontFamily: 'var(--font-heading)' }}
                      className="text-[11px] font-semibold text-[var(--color-primary)]"
                    >
                      {m.year}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)] font-light">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[var(--color-offwhite)]">
              <Image
                src="/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg"
                alt="Florestone S Series shower base in modern bathroom setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="bg-white border-y border-[var(--color-line)] py-2">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-10 ${i < stats.length - 1 ? 'md:border-r border-[var(--color-line)]' : ''} ${i < 2 ? 'border-b md:border-b-0 border-[var(--color-line)]' : ''}`}
              >
                <div
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[46px] font-semibold text-[var(--color-secondary)] leading-none mb-3"
                >
                  {s.num}
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] tracking-wider uppercase font-light">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING ── */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
          >
            Manufacturing
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl"
          >
            Two US plants. Dual-coast production for the trade.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Madera */}
            <div className="relative rounded-lg overflow-hidden min-h-[380px] flex flex-col justify-end group">
              <Image
                src="/images/ref-base-texture-2025/20241205_060634.jpg"
                alt="Florestone Madera California plant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/40 to-transparent" />
              <div className="relative z-10 p-8 text-white">
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-2"
                >
                  Original Plant · 15 Acres · Est. 1947
                </p>
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-semibold text-2xl tracking-tight mb-3"
                >
                  Madera, California
                </h3>
                <p className="text-white/70 text-[14px] leading-relaxed font-light mb-3 max-w-sm">
                  2851 Falcon Drive — our flagship 15-acre plant in California&apos;s Central Valley. Closed mold fiberglass F Series, terrazzo casting, and AcrylX™ surface application all happen here. West Coast distribution hub serving all of California, the Pacific Northwest, and the Mountain West.
                </p>
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)]"
                >
                  West Coast Distribution Hub
                </p>
              </div>
            </div>

            {/* Denison */}
            <div className="relative rounded-lg overflow-hidden min-h-[380px] flex flex-col justify-end group">
              <Image
                src="/images/ref-base-texture-2025/20241205_070341.jpg"
                alt="Florestone Denison Texas plant"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/40 to-transparent" />
              <div className="relative z-10 p-8 text-white">
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-2"
                >
                  Second Plant
                </p>
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-semibold text-2xl tracking-tight mb-3"
                >
                  Denison, Texas
                </h3>
                <p className="text-white/70 text-[14px] leading-relaxed font-light mb-3 max-w-sm">
                  1215 Wayne Cabaniss Drive — our second US plant serving the Central, Gulf Coast, Southeast, and Midwest trade channels. Shorter lead times into Texas, Louisiana, Florida, and the Midwest reduce freight costs for regional distributors and contractors.
                </p>
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)]"
                >
                  Central + East Distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ backgroundColor: 'var(--color-powder)' }} className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
          >
            Codes &amp; Credentials
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl"
          >
            The signoffs spec engineers actually look for.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certs.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-lg border border-[var(--color-line)] p-7 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all"
              >
                <div
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-semibold text-[var(--color-primary)] mb-5"
                >
                  {c.id}
                </div>
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-semibold text-[var(--color-secondary)] text-[17px] mb-3 leading-snug"
                >
                  {c.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed font-light">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CARDS ── */}
      <section className="bg-white py-20 px-6">
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
              USA-made since 1947.
              <br />
              Trade-grade every time.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-[var(--color-offwhite)] rounded-lg p-7 border border-[var(--color-line)] hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all"
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
                <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed font-light">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: 'var(--color-offwhite)' }} className="py-20 px-6 border-t border-[var(--color-line)]">
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
              Everything the trade asks about Florestone.
            </h2>
            <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed font-light mt-4 max-w-xl mx-auto">
              Comprehensive answers covering Florestone&apos;s history, manufacturing, certifications, and product families — written for spec engineers, contractors, and facility managers.
            </p>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTABand
        heading="Three generations stand behind every Florestone unit."
        body="Find your Florestone wholesaler or call our sales team in Madera direct at (800) 446-2647."
        ctaLabel="Where to Buy"
        ctaHref="/find-a-dealer"
        secondaryLabel="Browse the Catalog"
        secondaryHref="/products"
      />

      <Footer />
    </>
  );
}
