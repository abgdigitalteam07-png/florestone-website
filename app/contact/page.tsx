import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DealerForm from '@/components/shared/DealerForm';

export const metadata: Metadata = {
  title: 'Contact Florestone | Sales, Spec Support & Wholesaler Routing',
  description:
    'Talk to Florestone in Madera, CA or Denison, TX. Sales (800) 446-2647. Spec support, ADA documentation, mop sink and bath inquiries — three generations of family service since 1947.',
};

const contactPoints = [
  { label: 'Sales · Madera, CA', value: '(800) 446-2647' },
  { label: 'Email', value: 'sales@florestone.com' },
  { label: 'West Plant', value: '2851 Falcon Drive · Madera, CA 93637' },
  { label: 'East Plant', value: '1215 Wayne Cabaniss Drive · Denison, TX' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="/contact" />

      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-line)] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 text-xs text-[var(--color-slate)] font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          <span className="mx-2 text-[var(--color-stone)]">/</span>
          <span className="text-[var(--color-charcoal)]">Contact</span>
        </div>
      </div>

      {/* Layout */}
      <section className="bg-[var(--color-offwhite)] min-h-[70vh]">
        <div className="grid lg:grid-cols-2">
          <div className="bg-[var(--color-sand)] p-12 lg:p-20 relative overflow-hidden border-r border-[var(--color-line)]">
            <div className="relative max-w-md">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-4">
                Get in touch · Since 1947
              </p>
              <h1 className="font-display text-[var(--color-charcoal)] text-4xl md:text-5xl mb-5 tracking-tight">
                Talk to the family.
              </h1>
              <p className="font-body text-[var(--color-slate)] text-base leading-relaxed mb-10 max-w-sm">
                Florestone is run by Ron Flores (President/CEO) and Carol Flores Deaver (CFO) — children of founders
                Ray and Ann Flores. Spec, ADA, mop-sink, bath, or trade-channel question — our sales team will route
                you to the right person.
              </p>

              <div className="space-y-6">
                {contactPoints.map((c) => (
                  <div key={c.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-1">
                      {c.label}
                    </p>
                    <p className="font-display text-lg text-[var(--color-charcoal)]">{c.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--color-line)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-stone-dark)] mb-2">
                  An American Bath Group Brand
                </p>
                <p className="font-body text-sm text-[var(--color-slate)] leading-relaxed">
                  Florestone is part of American Bath Group — the country&apos;s largest privately-held bath products
                  manufacturer. Family pride, trade-channel scale.
                </p>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20 bg-[var(--color-offwhite)]">
            <div className="max-w-xl">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)] mb-3">
                Send a message
              </p>
              <h2 className="font-display text-[var(--color-charcoal)] text-3xl mb-2 tracking-tight">
                We will route you in one business day.
              </h2>
              <p className="font-body text-sm text-[var(--color-slate)] mb-10">
                Contractors, architects, facility managers, plumbing wholesalers — tell us about the spec and we will
                route the inquiry to the right rep.
              </p>
              <DealerForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
