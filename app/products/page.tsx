import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { SERIES, SeriesKey } from '@/lib/products';

export const metadata: Metadata = {
  title: 'The Florestone Catalog — Shower Bases, Mop Sinks, Bathtubs, ADA Units',
  description:
    'Browse the full Florestone catalog — Saflor® recess bases, F Series AcrylX™ RTM fiberglass, T Series terrazzo, ADA barrier-free, terrazzo mop sinks, fiberglass bathtubs, tub-showers and utility fixtures. USA-made since 1947.',
};

const seriesOrder: SeriesKey[] = ['s-series', 'f-series', 't-series', 'barrier-free'];

const additionalCategories = [
  {
    title: 'Terrazzo Mop Sinks',
    label: 'Commercial · Janitorial',
    body: 'Models 5 · 10–40 · 50–70 · 80–87 (Neo Angle) · 90–99 — half-round, drop-front, neo-angle. Plus MSR-2424/3624 molded fiberglass variants. Specified into schools, hospitals, hospitality and public buildings.',
    chips: ['Cast Terrazzo', 'Molded Fiberglass', 'Neo Angle', 'Drop Front'],
  },
  {
    title: 'F Series Bathtubs',
    label: 'Fiberglass · AcrylX™',
    body: 'Florestone fiberglass tubs — Reyna Island, Reyna Full Apron, Diana, Oriental, Pegasus, Catrina and Venetian. Finished in proprietary AcrylX™ applied acrylic with composite reinforcement.',
    chips: ['Premium Cast Acrylic', 'AcrylX™ Surface', 'RTM Fiberglass', '7 Models'],
  },
  {
    title: 'Shower Stalls & Wall Systems',
    label: 'F Series · Remodel & New Build',
    body: 'F Series 32-3W through 60-3W one-piece shower stalls for new construction, plus 3-piece tub/shower walls and 3-piece NEO corner walls engineered for remodel through-the-doorway delivery.',
    chips: ['1-Piece', '3-Piece Remodel', 'NEO Corner', 'Wall Surrounds'],
  },
  {
    title: 'Tub-Shower Units',
    label: 'F Series · One-Piece & Remodel',
    body: 'Models 6032TS, 6034TS, 6036TS and 6042TS — 60-inch tub-shower units in RTM fiberglass with AcrylX™. Available one-piece for new construction or 3-piece for renovation.',
    chips: ['60×32 to 60×42', 'One-Piece', '3-Piece Remodel', 'AcrylX™'],
  },
  {
    title: 'Utility Sinks',
    label: 'Commercial · Laundry · Janitorial',
    body: 'Wall-mount (WM, WMD), freestanding (FM, FMD, 20FM, 20WM) and service-room utility sinks (SC, SR, SR1). Molded fiberglass construction for laundry rooms, janitorial closets and back-of-house specs.',
    chips: ['Wall-Mount', 'Freestanding', 'Service Room', 'Molded Fiberglass'],
  },
];

export default function ProductsCatalogPage() {
  return (
    <>
      <Navbar activePage="/products" />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">Catalog</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-sand)] py-16 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4">
            The Florestone Catalog — Est. 1947
          </p>
          <h1 className="font-display text-[var(--color-charcoal)] text-4xl md:text-5xl xl:text-6xl leading-[1.05] mb-5 tracking-tight max-w-3xl">
            Three materials. Six categories.{' '}
            <em className="font-display italic">One family business.</em>
          </h1>
          <p className="font-body text-[var(--color-slate)] text-base md:text-lg leading-relaxed max-w-2xl">
            Shower bases in Saflor® compression-molded, F Series RTM fiberglass with AcrylX™, and T Series solid
            terrazzo — plus the ADA barrier-free line, terrazzo mop sinks for commercial spec, fiberglass bathtubs,
            and utility fixtures. Every product ships through the plumbing trade with a spec sheet and CAD file.
          </p>
        </div>
      </section>

      {/* Series cards */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-3">
            Shower Bases — Three Material Platforms
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-10 tracking-tight">
            Pick the platform that matches the spec.
          </h2>

          <div className="space-y-5">
            {seriesOrder.map((key) => {
              const s = SERIES[key];
              return (
                <Link
                  key={key}
                  href={`/${s.slug}`}
                  className="group block bg-white border border-[var(--color-line)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)] hover:shadow-lg transition-all"
                >
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    <div
                      className={`relative p-10 flex flex-col justify-between min-h-[240px] ${
                        s.hero.tint === 'accent'
                          ? 'bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-dark)] to-[var(--color-charcoal)]'
                          : 'bg-gradient-to-br from-[var(--color-stone)] via-[var(--color-stone-dark)] to-[var(--color-charcoal)]'
                      }`}
                    >
                      <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/85 bg-white/10 rounded-full px-3 py-1 self-start backdrop-blur-sm">
                        {s.badge}
                      </span>
                      <div>
                        <div className="font-display text-5xl text-white mb-1">{s.name}</div>
                        <div className="font-body text-white/75 text-sm">{s.subtitle}</div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10">
                      <p className="font-body text-[var(--color-slate)] text-base leading-relaxed mb-6 max-w-2xl">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {s.specChips.slice(0, 4).map((chip) => (
                          <span
                            key={chip}
                            className="px-3 py-1 rounded-md text-[11px] font-mono bg-[var(--color-sand)] text-[var(--color-slate)]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-stone-dark)]">
                          {s.models.length} models · IAPMO File 0687
                        </p>
                        <span className="inline-flex items-center gap-1.5 font-body font-medium text-sm text-[var(--color-accent)] group-hover:text-[var(--color-accent-dark)]">
                          Open {s.name} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beyond shower bases — Mop Sinks, Bathtubs, Stalls, Tub-Showers, Utility */}
      <section className="bg-[var(--color-sand)] py-20 px-6 border-t border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Beyond the Shower Base
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-3 tracking-tight">
            The half of Florestone the trade quietly relies on.
          </h2>
          <p className="font-body text-[var(--color-slate)] text-base leading-relaxed max-w-2xl mb-10">
            Florestone has shipped terrazzo mop sinks, fiberglass bathtubs, one-piece stalls and utility fixtures since
            our terrazzo line began in 1958. These are the unglamorous specifications that keep schools, hospitals and
            multifamily projects running.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {additionalCategories.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-[var(--color-line)] p-8 hover:border-[var(--color-accent)] transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-2">
                  {c.label}
                </p>
                <h3 className="font-display text-2xl text-[var(--color-charcoal)] mb-3 tracking-tight">{c.title}</h3>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-5">{c.body}</p>
                <div className="flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[var(--color-sand)] text-[var(--color-slate)]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Need a spec pulled? Call the family."
        body="Florestone is a B2B trade brand. Connect to your plumbing wholesaler — or call (800) 446-2647 to reach our sales team in Madera, CA direct."
        ctaLabel="Find a Wholesaler"
        ctaHref="/find-a-dealer"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
