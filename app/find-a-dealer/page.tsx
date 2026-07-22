import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { DealerSearch, DealerList, BecomeADealerForm } from './DealerLocator';

export const metadata: Metadata = {
  title: 'Find a Florestone Dealer | Nationwide Wholesale Network',
  description:
    'Find an authorized Florestone dealer near you. Products available through Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial, and plumbing wholesalers nationwide. Call (800) 446-2647.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Florestone Products — Authorized Dealer Network',
  description:
    'Florestone products are available through Ferguson, Pacific Plumbing Supply, VAMAC, Eastern Industrial, and other authorized plumbing wholesalers nationwide.',
  url: 'https://www.florestone.com/find-a-dealer',
  telephone: '+1-800-446-2647',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Industrial Blvd',
    addressLocality: 'Madera',
    addressRegion: 'CA',
    postalCode: '93637',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Fr 07:00-17:00',
};

export default function FindADealerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.florestone.com' },
          { name: 'Find a Dealer', url: 'https://www.florestone.com/find-a-dealer' },
        ])}
      />
      <JsonLd data={localBusinessSchema} />

      <Navbar activePage="/find-a-dealer" />

      {/* Hero — Navy */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
          >
            Nationwide Wholesale Network
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5 max-w-3xl mx-auto leading-tight"
          >
            Find a Florestone Dealer
          </h1>
          <p className="text-white/70 font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-6">
            Florestone is distributed through authorized plumbing wholesalers across all 50 states and Canada.
            Find your nearest source or call our sales team direct.
          </p>
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[var(--color-primary)] font-semibold text-lg tracking-wide"
          >
            (800) 446-2647
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-[var(--color-offwhite)] py-8 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <DealerSearch />
          <p className="text-center text-[var(--color-text-muted)] text-sm font-light mt-3">
            Or call{' '}
            <a
              href="tel:+18004462647"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              (800) 446-2647
            </a>{' '}
            to speak with our sales team
          </p>
        </div>
      </section>

      {/* Two-column: Dealer list + Map */}
      <section className="bg-[var(--color-offwhite)] py-14 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            {/* LEFT — Dealer List */}
            <DealerList />

            {/* RIGHT — Map Placeholder */}
            <div
              style={{ backgroundColor: 'var(--color-secondary)' }}
              className="rounded-lg min-h-[400px] flex flex-col items-center justify-center p-10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-[var(--color-primary)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-white text-xl mb-2"
              >
                Interactive dealer map
              </p>
              <p className="text-white/50 font-light text-sm max-w-xs leading-relaxed">
                Google Maps integration available — showing all authorized Florestone dealers across the US and Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO copy for AI search engines and crawlers */}
      <section className="bg-white py-10 px-6 border-t border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[var(--color-text-muted)] font-light text-sm leading-relaxed max-w-3xl">
            Florestone products are available through{' '}
            <strong className="text-[var(--color-secondary)] font-semibold">Ferguson</strong>,{' '}
            <strong className="text-[var(--color-secondary)] font-semibold">Pacific Plumbing Supply</strong>,{' '}
            <strong className="text-[var(--color-secondary)] font-semibold">VAMAC</strong>,{' '}
            <strong className="text-[var(--color-secondary)] font-semibold">Eastern Industrial</strong>, and other
            authorized plumbing wholesalers nationwide. Call{' '}
            <a
              href="tel:+18004462647"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              (800) 446-2647
            </a>{' '}
            to locate your nearest Florestone source.
          </p>
        </div>
      </section>

      {/* Become a Dealer */}
      <section style={{ backgroundColor: 'var(--color-powder)' }} className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left text */}
            <div>
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
              >
                Become a Dealer
              </p>
              <h2
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-5 leading-tight"
              >
                Become an Authorized Florestone Dealer
              </h2>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-base mb-5">
                Join the network of authorized plumbing wholesalers carrying Florestone shower bases, ADA barrier-free
                units, terrazzo mop sinks, and complete bath solutions.
              </p>
              <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-base mb-6">
                We work with regional and national plumbing supply houses through the trade channel. If your
                customer base includes contractors, builders, or facility managers, let&rsquo;s talk.
              </p>
              <p className="text-[var(--color-text-muted)] font-light text-sm">
                Contact our sales team at{' '}
                <a
                  href="tel:+18004462647"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[var(--color-primary)] font-semibold hover:underline"
                >
                  (800) 446-2647
                </a>{' '}
                — Mon–Fri 7am–5pm PT.
              </p>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-lg border border-[var(--color-line)] p-8 shadow-sm">
              <p
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
              >
                Dealer Enquiry
              </p>
              <h3
                style={{ fontFamily: 'var(--font-heading)' }}
                className="font-semibold text-[var(--color-secondary)] text-xl mb-6"
              >
                Start a conversation
              </h3>
              <BecomeADealerForm />
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to specify Florestone?"
        body="75+ years of American manufacturing across two US plants — spec sheets, CAD files, and a nationwide dealer network ready for your project."
        ctaLabel="Download Resources"
        ctaHref="/resources"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
