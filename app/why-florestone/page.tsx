import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';

export const metadata: Metadata = {
  title: 'Why Florestone | Family-Built Since 1947 — Three Generations, Two US Plants',
  description:
    'Florestone was founded in 1947 by Ray and Ann Flores in Oakland, California. Three generations later, we still build shower bases, terrazzo mop sinks and ADA-compliant bath products under the family name in Madera, CA and Denison, TX.',
};

const milestones = [
  { year: '1947', title: 'Founded by Ray & Ann Flores', body: 'Started as Pacific Cement Laundry Tray Company in Oakland, California — building cast utility products for the post-war housing boom.' },
  { year: '1958', title: 'Terrazzo line + name change', body: 'Added cast terrazzo products to the catalog. Combined the family name "Flores" with "stone" — and Florestone Products was born.' },
  { year: '1965', title: 'Compression-molding pioneer', body: 'Became one of the first manufacturers in the industry to produce compression-molded shower receptors, mop sinks and laundry trays.' },
  { year: '1974', title: 'Fiberglass tubs & whirlpools', body: 'Expanded into fiberglass bathtubs and whirlpool baths as the residential bath market evolved.' },
  { year: '1992', title: 'Acrylic products added', body: 'Added acrylic bath products to complement the fiberglass and terrazzo lines.' },
  { year: 'Now', title: 'Three generations · ABG-backed', body: 'Run by Ron Flores (President/CEO) and Carol Flores Deaver (CFO) — children of the founders. Part of American Bath Group since the 2010s.' },
];

const stats = [
  { num: '77+', label: 'Years family-built' },
  { num: '3', label: 'Generations of Flores leadership' },
  { num: '2', label: 'US manufacturing plants' },
  { num: '50+', label: 'States + Canada served' },
];

const certs = [
  {
    title: 'IAPMO File 0687',
    body: 'Florestone is listed with IAPMO Research and Testing under File No. 0687 — the standard accreditation referenced by spec engineers and plumbing inspectors.',
  },
  {
    title: 'ANSI Z124 + UPC',
    body: 'Compliant with ANSI Z124.1.2-2005 and ANSI Z-124.2 plastic shower receptor standards, plus the Uniform Plumbing Code (UPC).',
  },
  {
    title: 'ADA Leadership',
    body: 'An industry leader in developing products that meet the Americans with Disabilities Act. One of the deepest barrier-free shower catalogs in the category — 16+ named models.',
  },
];

export default function WhyFlorestonePage() {
  return (
    <>
      <Navbar activePage="/why-florestone" />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">Why Florestone</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-sand)] py-20 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4">
            The Florestone Story
          </p>
          <h1 className="font-display text-[var(--color-charcoal)] text-4xl md:text-5xl xl:text-6xl leading-[1.05] mb-6 tracking-tight max-w-3xl">
            Family-built since 1947.{' '}
            <em className="font-display italic">Cast in stone since 1958.</em>
          </h1>
          <p className="font-body text-[var(--color-slate)] text-base md:text-lg leading-relaxed max-w-2xl">
            Ray and Ann Flores founded Florestone in Oakland, California, in 1947. Three generations later we still
            ship under the family name — out of plants in Madera, California and Denison, Texas, through plumbing
            wholesalers in all 50 states and Canada.
          </p>
        </div>
      </section>

      {/* Family motto pull-quote */}
      <section className="bg-white py-16 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-6">
            The Family Motto
          </p>
          <p className="font-display italic text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight mb-6">
            &ldquo;You stand behind your product. And you take care of the customers.&rdquo;
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-slate-light)]">
            — Ray Flores, founder
          </p>
        </div>
      </section>

      {/* Heritage timeline */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Timeline · 1947 to today
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl">
            Seven decades. Three generations. One name on every unit.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-white rounded-xl border border-[var(--color-line)] p-7 hover:border-[var(--color-accent)] transition-colors"
              >
                <p className="font-display text-[var(--color-accent)] text-3xl mb-4 leading-none">{m.year}</p>
                <h3 className="font-body font-medium text-[var(--color-charcoal)] text-base mb-2">{m.title}</h3>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
                Origin
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl leading-tight tracking-tight">
                A name on every unit.
              </h2>
            </div>
            <div className="font-body text-[var(--color-slate)] text-base leading-[1.75] space-y-5">
              <p>
                When Ray and Ann Flores opened the Pacific Cement Laundry Tray Company in Oakland in 1947, the
                arrangement was simple — they cast the products, sold the products, and personally stood behind every
                one of them.
              </p>
              <p>
                In 1958, with terrazzo added to the catalog, they renamed the company by combining their last name
                with the material that defined it: <strong className="text-[var(--color-charcoal)]">Flore</strong> +{' '}
                <strong className="text-[var(--color-charcoal)]">stone</strong>. From that point on, every shower base,
                every mop sink, every utility tray that left the plant carried the family name.
              </p>
              <p>
                In 1965, Florestone became one of the first manufacturers in the industry to produce compression-molded
                shower receptors, mop sinks and laundry trays — a process that still defines our Saflor® line today.
                Fiberglass tubs followed in 1974, acrylic in 1992, and our proprietary AcrylX™ applied-acrylic system
                anchored the F Series RTM line that runs through our catalog now.
              </p>
              <p>
                Today, Florestone is run by Ron Flores (President/CEO) and Carol Flores Deaver (Secretary/CFO) —
                children of the founders, and the second generation of the family to lead the business. We are part of
                American Bath Group, the country&apos;s largest privately-held bath products manufacturer — but the
                name on every unit is still the same name that was on the first one in 1947.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-[var(--color-sand)] py-16 px-6 border-y border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center py-6 ${i !== stats.length - 1 ? 'md:border-r border-[var(--color-line)]' : ''} ${
                  i < 2 ? 'border-b md:border-b-0 border-[var(--color-line)]' : ''
                }`}
              >
                <div className="font-display text-4xl md:text-5xl text-[var(--color-accent)] mb-3">{s.num}</div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two plants */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Manufacturing
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl">
            Two US plants. Duo-coast manufacturing for the trade.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[var(--color-sand)] rounded-2xl p-8 border border-[var(--color-line)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-2">
                Original Plant · 15 Acres
              </p>
              <h3 className="font-display text-2xl text-[var(--color-charcoal)] tracking-tight mb-3">
                Madera, California
              </h3>
              <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-4">
                2851 Falcon Drive — our flagship plant on a 15-acre site in the California Central Valley. Compression
                molding, terrazzo casting, RTM fiberglass and AcrylX™ surface application all happen here.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-slate-light)]">
                West Coast Distribution Hub
              </p>
            </div>
            <div className="bg-[var(--color-sand)] rounded-2xl p-8 border border-[var(--color-line)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-2">
                Second Plant
              </p>
              <h3 className="font-display text-2xl text-[var(--color-charcoal)] tracking-tight mb-3">
                Denison, Texas
              </h3>
              <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed mb-4">
                1215 Wayne Cabaniss Drive — our second US plant serves the Central, Gulf and East Coast trade channels
                with shorter lead times into Texas, the Southeast and the Midwest.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-slate-light)]">
                Central + East Distribution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[var(--color-offwhite)] py-20 px-6 border-t border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
            Codes &amp; Credentials
          </p>
          <h2 className="font-display text-[var(--color-charcoal)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl">
            The signoffs spec engineers actually look for.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {certs.map((c, i) => (
              <div
                key={c.title}
                className="bg-white rounded-xl border border-[var(--color-line)] p-7"
              >
                <div className="font-mono text-sm text-[var(--color-accent)] mb-6">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display text-xl text-[var(--color-charcoal)] mb-3">{c.title}</h3>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Three generations stand behind every Florestone unit."
        body="Find your Florestone wholesaler or call our sales team in Madera direct at (800) 446-2647."
        ctaLabel="Find a Wholesaler"
        ctaHref="/find-a-dealer"
        secondaryLabel="Browse the Catalog"
        secondaryHref="/products"
      />

      <Footer />
    </>
  );
}
