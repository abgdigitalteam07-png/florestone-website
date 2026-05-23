import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { SERIES, SeriesKey } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Resources — Spec Sheets, CAD, Installation & ADA Documentation | Florestone',
  description:
    'Florestone PDF spec sheets, section CAD files, installation guides and ADA documentation. IAPMO File 0687 · UPC · ANSI Z124 certified. Documentation for Saflor®, AcrylX™, T Series terrazzo, mop sinks and bathtubs.',
};

const generalDocs = [
  { title: 'Florestone Full Product Catalog', scope: 'All Series + Mop Sinks + Tubs', kind: 'PDF' },
  { title: 'ADA Barrier-Free Reference Guide', scope: 'T-400 / T-500 / 4040F / Saflor® BF', kind: 'PDF' },
  { title: 'AcrylX™ Care & Repair Guide', scope: 'F Series + Bathtubs', kind: 'PDF' },
  { title: 'Saflor® Installation Guide', scope: 'S Series Recess + Wedge-Lok® drain', kind: 'PDF' },
  { title: 'Terrazzo Mop Sink Spec Sheets', scope: 'Models 5 through 99 + MSR', kind: 'PDF' },
  { title: 'Warranty Statement', scope: 'Lifetime residential · 30-yr commercial', kind: 'PDF' },
  { title: 'Codes & Listings Reference', scope: 'IAPMO File 0687 · UPC · ANSI Z124', kind: 'PDF' },
  { title: 'F Series Tub-Shower Installation', scope: '6032TS / 6034TS / 6036TS / 6042TS', kind: 'PDF' },
  { title: 'Prop 65 Disclosure', scope: 'California compliance', kind: 'PDF' },
];

const seriesOrder: SeriesKey[] = ['s-series', 'f-series', 't-series', 'barrier-free'];

export default function ResourcesPage() {
  return (
    <>
      <Navbar activePage="/resources" />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">Resources</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-sand)] py-16 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4">
            Spec Sheets · CAD · Installation · ADA
          </p>
          <h1 className="font-display text-[var(--color-charcoal)] text-4xl md:text-5xl xl:text-6xl leading-[1.05] mb-5 tracking-tight max-w-3xl">
            Documentation the trade actually uses.
          </h1>
          <p className="font-body text-[var(--color-slate)] text-base md:text-lg leading-relaxed max-w-2xl">
            Every Florestone product ships with a PDF spec sheet and section CAD. IAPMO listed (File 0687) and ANSI
            Z124 documented — the signoffs your spec engineer and inspector look for.
          </p>
        </div>
      </section>

      {/* By series */}
      <section className="bg-[var(--color-offwhite)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            By Shower Base Series
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-10 tracking-tight">
            Pull spec by series.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {seriesOrder.map((key) => {
              const s = SERIES[key];
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl border border-[var(--color-line)] p-7 hover:border-[var(--color-accent)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-stone-dark)] mb-1">
                        {s.badge}
                      </p>
                      <h3 className="font-display text-2xl text-[var(--color-charcoal)] tracking-tight">
                        {s.name} <span className="text-[var(--color-stone-dark)] text-base">— {s.subtitle}</span>
                      </h3>
                    </div>
                    {s.ada && (
                      <span className="text-[10px] font-mono uppercase tracking-[0.14em] bg-[var(--color-accent)] text-white rounded px-2 py-1 shrink-0">
                        ADA
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-5">{s.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[#C0392B]/5 text-[#C0392B] border border-[#C0392B]/20">
                      Spec PDF
                    </span>
                    <span className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[var(--color-accent-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                      Section CAD
                    </span>
                    <span className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[var(--color-sand)] text-[var(--color-slate)] border border-[var(--color-line)]">
                      Install Guide
                    </span>
                    {s.ada && (
                      <span className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] border border-[var(--color-accent)]/20">
                        ADA Compliance
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/${s.slug}`}
                    className="inline-flex items-center gap-2 font-body font-medium text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
                  >
                    Open {s.name} documentation →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General documentation */}
      <section className="bg-[var(--color-sand)] py-16 px-6 border-y border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Library
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl mb-10 tracking-tight">
            Catalogs, guides &amp; compliance docs
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generalDocs.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-xl border border-[var(--color-line)] p-6 hover:border-[var(--color-accent)] transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#C0392B]/8 text-[#C0392B] flex items-center justify-center font-mono text-xs font-medium shrink-0 group-hover:bg-[#C0392B]/15 transition-colors">
                    {doc.kind}
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-[var(--color-charcoal)] text-sm leading-snug mb-1">
                      {doc.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-stone-dark)]">
                      {doc.scope}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border-l-4 border-[var(--color-accent)] rounded-r-xl p-6 max-w-3xl">
            <p className="font-body text-sm text-[var(--color-charcoal)] leading-relaxed">
              <strong className="font-medium">Need a custom drawing?</strong> Older spec sheets, project-specific
              CADs, and engineer-submittal documentation can be requested through your Florestone wholesaler or
              direct from sales at (800) 446-2647.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        heading="Can't find a spec? Call the family."
        body="Florestone has shipped documentation through the plumbing trade since 1947 — sales will pull it from the archive."
        ctaLabel="Contact Sales"
        ctaHref="/contact"
        secondaryLabel="Find a Wholesaler"
        secondaryHref="/find-a-dealer"
      />

      <Footer />
    </>
  );
}
