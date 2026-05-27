import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { JsonLd, faqSchema, breadcrumbSchema, productGroupSchema } from '@/components/seo/JsonLd';
import { Series } from '@/lib/products';

const SERIES_IMAGES: Record<string, { hero: string; fallback: string }> = {
  's-series': {
    hero: '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
    fallback: '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
  },
  'f-series': {
    hero: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
    fallback: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3460f-wht-deco.jpg',
  },
  't-series': {
    hero: '/images/bases/terrazzo/jpg/florestone-model-300-6032-water-deco.jpg',
    fallback: '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg',
  },
  'barrier-free': {
    hero: '/images/ada/3562h/3562h-ada-deco.jpg',
    fallback: '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
  },
};

const MODEL_IMAGES: Record<string, string> = {
  'SR-3232': '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot02-deco-w.jpg',
  'SR-3636': '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
  'SR-3648': '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
  'SR-3660': '/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg',
  'SR-CORNER': '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot02-deco-w.jpg',
  'SR-NEO': '/images/bases/saflor/lifestyle/florestone-saflor-4260-1-base-crr-shot01-deco-w.jpg',
  'F-3636': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3260f-wht-deco.jpg',
  'F-4242': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg',
  'F-EDGE': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-4842f-wht-deco.jpg',
  'F-3232-3W': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3963f-wht-deco.jpg',
  '6032TS': '/images/multi-brand/jpeg/florestone-6032ts-3w-unit-deco.jpg',
  '6034TS': '/images/multi-brand/jpeg/florestone-6033hst-unit-deco.jpg',
  '6036TS': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg',
  '6042TS': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-6042f-wht-deco.jpg',
  'F-3PC-NEO': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-38f-neo-wht-deco.jpg',
  'T-100': '/images/bases/terrazzo/jpg/florestone-terrazzo-model-100-3636-deco.jpg',
  'T-200': '/images/bases/terrazzo/jpg/florestone-terrazzo-model-200-4848-deco.jpg',
  'T-300': '/images/bases/terrazzo/jpg/florestone-terrazzo-model-300-3434-deco.jpg',
  'T-350': '/images/bases/terrazzo/jpg/florestone-terrazzo-model-350-38neo-deco.jpg',
  'T-400': '/images/bases/terrazzo/jpg/florestone-model-400-6333-deco.jpg',
  'T-500': '/images/bases/terrazzo/jpg/florestone-model-500-4248-deco.jpg',
  'T-23-2HR': '/images/ada/3562h/3562h-ada-deco.jpg',
  '4040F-BF': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
  'F-BF-AcrylX': '/images/bases/f-series/lifestyles/jpg/florestone-f-series-3060f-bf-lh-wht-deco.jpg',
  'SR-BF': '/images/ada/3562h/3562h-ada-deco.jpg',
};

const SERIES_LABELS: Record<string, string> = {
  's-series': 'S Series',
  'f-series': 'F Series',
  't-series': 'T Series',
  'barrier-free': 'Barrier-Free',
};

export default function SeriesPage({ series }: { series: Series }) {
  const p = series;
  const imgs = SERIES_IMAGES[p.key] ?? SERIES_IMAGES['f-series'];
  const BASE_URL = 'https://www.florestone.com';

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: BASE_URL },
        { name: 'Products', url: `${BASE_URL}/products` },
        { name: p.name, url: `${BASE_URL}/${p.slug}` },
      ])} />
      <JsonLd data={productGroupSchema({
        name: `${p.name} — ${p.subtitle}`,
        description: p.description,
        url: `${BASE_URL}/${p.slug}`,
        image: `${BASE_URL}${imgs.hero}`,
        category: 'Shower Bases',
      })} />
      <JsonLd data={faqSchema(p.faqs)} />

      <Navbar activePage={`/${p.slug}`} />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 flex items-center gap-2 text-xs text-[var(--color-text-light)]" style={{ fontFamily: 'var(--font-heading)' }}>
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors font-medium tracking-[0.04em] uppercase">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[var(--color-primary)] transition-colors font-medium tracking-[0.04em] uppercase">Products</Link>
          <span>/</span>
          <span className="text-[var(--color-secondary)] font-semibold tracking-[0.04em] uppercase">{p.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden bg-[var(--color-secondary)]">
        <div className="absolute inset-0">
          <Image
            src={imgs.hero}
            alt={`${p.name} — ${p.subtitle}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/95 via-[var(--color-secondary)]/70 to-[var(--color-secondary)]/20" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[var(--color-primary)]/40 rounded" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                {p.label}
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-white text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] leading-[1.08] tracking-tight mb-4">
              {p.name}
              <br />
              <span className="text-[var(--color-primary)] text-[0.75em]">{p.subtitle}</span>
            </h1>

            <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-lg font-light">
              {p.heroBody}
            </p>

            {/* Spec chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.specChips.map((chip, i) => (
                <span
                  key={chip}
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className={`px-3 py-1.5 rounded text-[10px] font-semibold tracking-[0.08em] uppercase ${
                    i === 0
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-white/10 text-white/75 border border-white/15'
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/find-a-dealer"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
              >
                Find a Dealer
              </Link>
              <Link
                href="/resources"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded hover:bg-white/10 transition-colors"
              >
                Spec Sheets & CAD
              </Link>
            </div>
          </div>
        </div>

        {/* ADA badge */}
        {p.ada && (
          <div className="absolute top-6 right-6 z-10 bg-[var(--color-primary)] text-white px-4 py-2 rounded" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase">ADA Compliant</span>
          </div>
        )}
      </section>

      {/* Specs */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
            Technical Specifications
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl mb-10 tracking-tight">
            {p.name} at a glance
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-lg overflow-hidden max-w-[960px]">
            {p.specs.map((spec) => (
              <div key={spec.label} className="bg-white px-6 py-5">
                <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-light)] mb-1.5">
                  {spec.label}
                </p>
                <p style={{ fontFamily: 'var(--font-heading)' }} className="font-medium text-[var(--color-secondary)] text-[15px]">{spec.value}</p>
              </div>
            ))}
          </div>

          {p.ada && (
            <div className="mt-8 flex items-start gap-4 border border-[var(--color-primary)]/30 bg-[var(--color-primary-light)] rounded-lg px-6 py-5 max-w-[960px]">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-bold">♿</div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-[14px] mb-1">
                  ADA &amp; ANSI A117.1 Compliant
                </p>
                <p className="text-[var(--color-text-muted)] text-sm font-light">
                  Engineered to meet ADA and ANSI A117.1 accessibility standards as shipped. Full compliance documentation and spec sheets available through your authorized wholesaler.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Models grid */}
      <section style={{ backgroundColor: 'var(--color-offwhite)' }} className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
            Available Models
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl mb-10 tracking-tight">
            Choose your {p.name} configuration
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.models.map((m) => {
              const modelImg = MODEL_IMAGES[m.code] ?? imgs.fallback;
              return (
                <div
                  key={m.code}
                  className="bg-white rounded-lg border border-[var(--color-line)] overflow-hidden hover:border-[var(--color-primary)] hover:-translate-y-1 hover:shadow-lg transition-all group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-light)]">
                    <Image
                      src={modelImg}
                      alt={m.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[9px] font-semibold tracking-[0.1em] uppercase bg-[var(--color-secondary)] text-white px-2 py-1 rounded">
                        {m.code}
                      </span>
                    </div>
                    {m.ada && (
                      <div className="absolute top-3 right-3">
                        <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[9px] font-semibold tracking-[0.1em] uppercase bg-[var(--color-primary)] text-white px-2 py-1 rounded">
                          ADA
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-[15px] mb-1 leading-snug">{m.name}</h3>
                    <p className="text-[var(--color-text-muted)] text-[13px] font-light mb-4">{m.type}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-[var(--color-coral)] bg-[var(--color-coral-light)] border border-[var(--color-coral)]/20 rounded py-2 hover:bg-[var(--color-coral)]/10 transition-colors"
                      >
                        PDF Spec
                      </button>
                      <button
                        type="button"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-[var(--color-primary)] bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 rounded py-2 hover:bg-[var(--color-primary)]/10 transition-colors"
                      >
                        CAD File
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
            Why the {p.name}
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl mb-10 tracking-tight">
            Engineered for the work.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-[var(--color-offwhite)] rounded-lg p-7 border border-[var(--color-line)] hover:border-[var(--color-primary)]/30 hover:shadow-sm transition-all"
              >
                <div style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.12em] text-[var(--color-primary)] mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-[16px] mb-3 leading-snug">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed font-light">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare with other series */}
      <section style={{ backgroundColor: 'var(--color-powder)' }} className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
            Compare Series
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-2xl mb-8 tracking-tight">
            Other Florestone series
          </h2>
          <div className="flex flex-wrap gap-3">
            {p.compareWith.map((key) => (
              <Link
                key={key}
                href={`/${key}`}
                style={{ fontFamily: 'var(--font-heading)' }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[var(--color-line)] hover:border-[var(--color-primary)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-semibold text-[12px] tracking-[0.06em] uppercase rounded transition-all"
              >
                {SERIES_LABELS[key] ?? key} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--color-offwhite)' }} className="py-20 px-6">
        <div className="max-w-[860px] mx-auto">
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3">
            FAQ
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl mb-10 tracking-tight">
            {p.name} questions, answered.
          </h2>
          <FAQAccordion items={p.faqs} />
        </div>
      </section>

      <CTABand
        heading={`Ready to spec the ${p.name}?`}
        body="Connect with an authorized Florestone wholesaler for pricing, lead times, spec sheets and CAD files."
        ctaLabel="Find a Dealer"
        ctaHref="/find-a-dealer"
        secondaryLabel="Download Resources"
        secondaryHref="/resources"
      />

      <Footer />
    </>
  );
}
