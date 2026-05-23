import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import CompareBar from '@/components/product/CompareBar';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { Series } from '@/lib/products';

export default function SeriesPage({ series }: { series: Series }) {
  const p = series;

  return (
    <>
      <Navbar activePage={`/${p.slug}`} />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <Link href="/products" className="hover:text-[var(--color-accent)]">Products</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">{p.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-charcoal)] relative overflow-hidden py-20 lg:py-24 px-6">
        <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden />
        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-stone)] bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-stone)]" />
                {p.label}
              </p>
              <h1 className="font-display text-white text-5xl md:text-6xl leading-[1.05] mb-5 tracking-tight">
                {p.name}
                <br />
                <em className="not-italic text-[var(--color-stone)] font-display italic">{p.subtitle}</em>
              </h1>
              <p className="font-display italic text-white/60 text-xl mb-8">&ldquo;{p.tagline}&rdquo;</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.specChips.map((chip, i) => (
                  <span
                    key={chip}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium ${
                      i === 0
                        ? 'bg-[var(--color-accent)] text-white'
                        : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="font-body text-white/70 leading-relaxed mb-10 max-w-lg">{p.heroBody}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/find-a-dealer"
                  className="px-7 py-3.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-body font-medium text-sm rounded-md transition-colors"
                >
                  Request Information
                </Link>
                <Link
                  href="/resources"
                  className="px-7 py-3.5 border border-white/30 hover:border-white text-white font-body font-medium text-sm rounded-md hover:bg-white/5 transition-colors"
                >
                  Download Spec Sheets
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className={`rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center relative ${
                  p.hero.tint === 'accent'
                    ? 'bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-dark)] to-[var(--color-charcoal)]'
                    : 'bg-gradient-to-br from-[var(--color-stone)] via-[var(--color-stone-dark)] to-[var(--color-charcoal)]'
                }`}
              >
                <div className="text-center">
                  <div className="font-display text-7xl text-white/30 mb-2">{p.name.split(' ')[0]}</div>
                  <div className="font-mono text-xs text-white/40 uppercase tracking-[0.18em]">
                    Series Image — Salsify PIM
                  </div>
                </div>
                <span className="absolute top-4 right-4 bg-white/90 text-[var(--color-charcoal)] text-[10px] font-mono uppercase tracking-[0.14em] px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Technical Specifications
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-12 tracking-tight">
            {p.name} at a glance
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-xl overflow-hidden max-w-[1000px]">
            {p.specs.map((spec) => (
              <div key={spec.label} className="bg-white px-6 py-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-stone-dark)] mb-1.5">
                  {spec.label}
                </p>
                <p className="font-display text-lg text-[var(--color-charcoal)]">{spec.value}</p>
              </div>
            ))}
          </div>

          {p.ada && (
            <div className="mt-8 border-l-4 border-[var(--color-accent)] pl-6 bg-[var(--color-accent-light)] py-4 rounded-r-lg max-w-[1000px]">
              <p className="font-body font-medium text-[var(--color-accent-dark)] text-sm mb-1">
                ADA &amp; ANSI A117.1 Compliant
              </p>
              <p className="font-body text-[var(--color-slate)] text-sm">
                Engineered to meet ADA and ANSI A117.1 standards as shipped. Full compliance documentation available on
                the Resources page.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Models grid */}
      <section className="bg-[var(--color-sand)] py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Available Models
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-12 tracking-tight">
            Choose your {p.name} configuration
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.models.map((m) => (
              <div
                key={m.code}
                className="bg-white rounded-xl border border-[var(--color-line)] overflow-hidden hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div
                  className={`aspect-[5/3] flex items-center justify-center relative ${
                    m.ada ? 'bg-[var(--color-accent-light)]' : 'bg-[var(--color-sand-dark)]'
                  }`}
                >
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--color-charcoal)]/60 bg-white/70 rounded px-2 py-1">
                    {m.code}
                  </span>
                  {m.ada && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-[0.12em] bg-[var(--color-accent)] text-white rounded px-2 py-1">
                      ADA
                    </span>
                  )}
                  <div className="font-display text-5xl text-[var(--color-charcoal)]/20">{m.dimensions}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-[var(--color-charcoal)] mb-1">{m.name}</h3>
                  <p className="font-body text-sm text-[var(--color-slate)] mb-4">{m.type}</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-body font-medium text-[#C0392B] bg-[#C0392B]/5 border border-[#C0392B]/20 rounded-md py-2 hover:bg-[#C0392B]/10 transition-colors"
                    >
                      PDF Spec
                    </button>
                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-body font-medium text-[var(--color-accent)] bg-[var(--color-accent-light)] border border-[var(--color-accent)]/20 rounded-md py-2 hover:bg-[var(--color-accent)]/10 transition-colors"
                    >
                      CAD File
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Why the {p.name}
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-12 tracking-tight max-w-2xl">
            Engineered for the work.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-[var(--color-offwhite)] rounded-xl p-7 border border-[var(--color-line)] hover:border-[var(--color-accent)]/40 transition-colors"
              >
                <div className="font-mono text-sm text-[var(--color-accent)] mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl text-[var(--color-charcoal)] mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-sand)] py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Questions
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-10 tracking-tight">
            {p.name} FAQ
          </h2>
          <FAQAccordion items={p.faqs} />
        </div>
      </section>

      <CompareBar models={p.compareWith} />

      <CTABand
        heading={`Ready to spec the ${p.name}?`}
        body="Connect with an authorized Florestone dealer for pricing, lead times, and ADA documentation."
        ctaLabel="Find a Dealer Near You"
        ctaHref="/find-a-dealer"
        secondaryLabel="View Resources"
        secondaryHref="/resources"
      />

      <Footer />
    </>
  );
}
