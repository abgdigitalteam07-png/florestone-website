import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DealerForm from '@/components/shared/DealerForm';

export const metadata: Metadata = {
  title: 'Find a Wholesaler | Florestone Authorized Plumbing Trade Channel',
  description:
    'Florestone ships through plumbing wholesalers in all 50 states and Canada — Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial Supplies and more. Find yours or call sales at (800) 446-2647.',
};

const trustSignals = [
  { icon: '01', text: 'Family-built since 1947 — three generations of Flores leadership' },
  { icon: '02', text: 'Two US plants — Madera, CA and Denison, TX' },
  { icon: '03', text: 'IAPMO File 0687 · UPC · ANSI Z124 · ADA' },
  { icon: '04', text: 'Distributed to all 50 states and Canada through the plumbing trade' },
];

const wholesalerSamples = [
  {
    name: 'Ferguson Plumbing Supply',
    address: 'National plumbing wholesaler · 1,400+ locations',
    contact: 'Florestone authorized · Pro accounts available',
    tags: ['National', 'Trade Account'],
  },
  {
    name: 'Pacific Plumbing Supply',
    address: 'Pacific Northwest plumbing wholesaler',
    contact: 'Authorized Florestone source — WA, OR, ID, AK',
    tags: ['Regional · West', 'Authorized'],
  },
  {
    name: 'Eastern Industrial Supplies',
    address: 'Southeast industrial plumbing distributor',
    contact: 'Florestone trade-channel source for the Carolinas + GA',
    tags: ['Regional · Southeast'],
  },
  {
    name: 'VAMAC',
    address: 'Mid-Atlantic plumbing wholesaler',
    contact: 'VA · MD · NC · stock and special-order Florestone',
    tags: ['Regional · Mid-Atlantic'],
  },
];

export default function FindADealerPage() {
  return (
    <>
      <Navbar activePage="/find-a-dealer" />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">Find a Wholesaler</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-sand)] py-16 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4">
            Plumbing Trade Channel · Est. 1947
          </p>
          <h1 className="font-display text-[var(--color-charcoal)] text-4xl md:text-5xl mb-5 tracking-tight max-w-3xl mx-auto">
            Florestone ships through your{' '}
            <em className="font-display italic">wholesaler.</em>
          </h1>
          <p className="font-body text-[var(--color-slate)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We are a B2B trade brand. Florestone is distributed through plumbing supply wholesalers nationwide —
            Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial Supplies and more. Use the inquiry form to
            connect to your local source, or call our sales team direct in Madera, CA.
          </p>
        </div>
      </section>

      {/* Search + Map mock */}
      <section className="bg-[var(--color-offwhite)] py-10 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl border border-[var(--color-line)] p-2 flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto shadow-sm">
            <input
              type="text"
              placeholder="Enter ZIP code or city — we will route you to your closest wholesaler…"
              className="flex-1 px-5 py-3 font-body text-sm text-[var(--color-charcoal)] focus:outline-none rounded-md"
            />
            <button
              type="button"
              className="px-7 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-body font-medium text-sm rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Two-column: results + form */}
      <section className="bg-[var(--color-offwhite)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
                Authorized Wholesalers · Sample
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl mb-2 tracking-tight">
                The plumbing-trade channel.
              </h2>
              <p className="font-body text-[var(--color-slate)] text-sm leading-relaxed mb-8 max-w-md">
                Florestone is stocked through the plumbing supply houses your jobsite already deals with. A short list
                of authorized wholesalers below — full search returns your closest source by ZIP.
              </p>

              <div className="space-y-4 mb-8">
                {wholesalerSamples.map((d, i) => (
                  <div
                    key={d.name}
                    className={`bg-white rounded-xl border p-6 transition-colors ${
                      i === 0
                        ? 'border-[var(--color-accent)] shadow-sm'
                        : 'border-[var(--color-line)] hover:border-[var(--color-accent)]/40'
                    }`}
                  >
                    <h3 className="font-display text-lg text-[var(--color-charcoal)] mb-1">{d.name}</h3>
                    <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-1">{d.address}</p>
                    <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-3">{d.contact}</p>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[var(--color-sand)] text-[var(--color-slate)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-sand-dark)] border border-[var(--color-line)] flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="font-display text-2xl text-[var(--color-stone-dark)] mb-2">
                    Interactive wholesaler map
                  </p>
                  <p className="font-body text-sm text-[var(--color-slate)]">
                    Coverage across all 50 states + Canada
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-line)] shadow-sm lg:sticky lg:top-24">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
                  Direct to Sales · Madera, CA
                </p>
                <h2 className="font-display text-[var(--color-charcoal)] text-3xl mb-2 tracking-tight">
                  Or talk to the family.
                </h2>
                <p className="font-body text-sm text-[var(--color-slate)] mb-7">
                  Tell us about your spec — shower base, ADA barrier-free, terrazzo mop sink or full bath
                  configuration — and we will route you to the right wholesaler and the right Florestone rep.
                </p>
                <DealerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-[var(--color-sand)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
              Why the trade specs Florestone
            </p>
            <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl tracking-tight">
              Three generations stand behind every unit.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustSignals.map((s) => (
              <div
                key={s.text}
                className="bg-white rounded-xl p-6 border border-[var(--color-line)]"
              >
                <div className="font-mono text-sm text-[var(--color-accent)] mb-4">{s.icon}</div>
                <p className="font-body text-sm text-[var(--color-charcoal)] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
