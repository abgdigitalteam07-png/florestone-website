import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Florestone | (800) 446-2647',
  description:
    'Contact Florestone for contractor inquiries, volume pricing, and project specifications. Call (800) 446-2647 Mon–Fri 7am–5pm PT. Plants in Madera, CA and Denison, TX.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Florestone Products',
  description:
    'American manufacturer of shower bases, ADA barrier-free units, terrazzo mop sinks and complete bath solutions since 1947.',
  url: 'https://www.florestone.com',
  telephone: '+1-800-446-2647',
  email: 'info@florestone.com',
  openingHours: 'Mo-Fr 07:00-17:00',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '1234 Industrial Blvd',
      addressLocality: 'Madera',
      addressRegion: 'CA',
      postalCode: '93637',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Denison',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-446-2647',
    contactType: 'sales',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Fr 07:00-17:00',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <Navbar activePage="/contact" />

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* LEFT — Navy */}
        <div style={{ backgroundColor: 'var(--color-secondary)' }} className="px-8 py-14 lg:px-14 lg:py-20">
          <div className="max-w-md">
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
            >
              Get in Touch
            </p>
            <h1
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-white text-3xl md:text-4xl tracking-tight mb-5 leading-tight"
            >
              Get in Touch
            </h1>
            <p className="text-white/70 font-light leading-relaxed text-base mb-10">
              Whether you&rsquo;re specifying a project, placing a volume order, or need technical documentation —
              our team is ready.
            </p>

            <div className="space-y-7 mb-10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 18l.42-1.08z" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-1"
                  >
                    Phone
                  </p>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-white font-semibold text-base"
                  >
                    (800) 446-2647
                  </p>
                  <p className="text-white/50 text-xs font-light mt-0.5">Mon–Fri 7am–5pm PT</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-1"
                  >
                    Email
                  </p>
                  <p className="text-white font-light text-base">info@florestone.com</p>
                </div>
              </div>

              {/* Madera */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)]"
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
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-1"
                  >
                    Madera Plant
                  </p>
                  <p className="text-white font-light text-base">1234 Industrial Blvd</p>
                  <p className="text-white/60 text-sm font-light">Madera, CA 93637</p>
                </div>
              </div>

              {/* Denison */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)]"
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
                <div>
                  <p
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/40 mb-1"
                  >
                    Denison Plant
                  </p>
                  <p className="text-white font-light text-base">Denison, TX</p>
                </div>
              </div>
            </div>

            <Link
              href="/find-a-dealer"
              style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-primary)' }}
              className="inline-flex items-center justify-center px-7 py-3 text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded transition-opacity hover:opacity-85"
            >
              Find a Dealer
            </Link>
          </div>
        </div>

        {/* RIGHT — White */}
        <div className="bg-white px-8 py-14 lg:px-14 lg:py-20">
          <div className="max-w-xl">
            <p
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
            >
              Send a Message
            </p>
            <h2
              style={{ fontFamily: 'var(--font-heading)' }}
              className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-2"
            >
              Send us a message
            </h2>
            <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-sm mb-8">
              For contractor inquiries, volume pricing, and project specifications.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
