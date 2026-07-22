import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Spec Sheets, CAD Files & Resources | Florestone',
  description:
    'Download Florestone spec sheets, CAD drawings, installation guides, and ADA compliance documentation. PDF and CAD files available for S Series Saflor®, F Series AcrylX™, T Series Terrazzo, and barrier-free shower products.',
};

type ResourceType = 'pdf' | 'cad' | 'install' | 'cert';

interface Resource {
  name: string;
  description: string;
  type: ResourceType;
  category: string;
}

const resources: Resource[] = [
  // PDF Spec Sheets
  { name: 'S Series Spec Sheet', description: 'Complete dimensions, materials, colors, compliance', type: 'pdf', category: 'PDF Spec Sheets' },
  { name: 'F Series AcrylX™ Spec Sheet', description: 'Closed mold fiberglass bases, stalls, tub-showers', type: 'pdf', category: 'PDF Spec Sheets' },
  { name: 'T Series Terrazzo Spec Sheet', description: 'Models 100–500, dimensions, 3000 PSI', type: 'pdf', category: 'PDF Spec Sheets' },
  { name: 'Barrier-Free / ADA Documentation', description: 'All ADA models, ANSI A117.1 compliance', type: 'pdf', category: 'PDF Spec Sheets' },
  { name: 'Utility & Mop Sink Catalog', description: 'Commercial terrazzo and molded utility sinks', type: 'pdf', category: 'PDF Spec Sheets' },
  { name: 'Complete Product Catalog', description: 'Full Florestone product line overview', type: 'pdf', category: 'PDF Spec Sheets' },
  // CAD Files
  { name: 'S Series CAD Drawings', description: 'Section CAD for all S Series recess configurations', type: 'cad', category: 'CAD Files' },
  { name: 'F Series CAD Drawings', description: 'Section CAD for F Series bases and tub-showers', type: 'cad', category: 'CAD Files' },
  { name: 'T Series CAD Drawings', description: 'Terrazzo Models 100–500 section drawings', type: 'cad', category: 'CAD Files' },
  { name: 'Barrier-Free CAD Package', description: 'ADA models 400, 500, 23-2HR CAD files', type: 'cad', category: 'CAD Files' },
  // Installation Guides
  { name: 'Shower Base Installation Guide', description: 'Step-by-step for all series', type: 'install', category: 'Installation Guides' },
  { name: 'Barrier-Free Installation Guide', description: 'ADA curbless, roll-in, and transfer install', type: 'install', category: 'Installation Guides' },
  { name: 'Mop Sink Installation Guide', description: 'Wall-mount and floor-mount terrazzo sinks', type: 'install', category: 'Installation Guides' },
  // Certifications
  { name: 'IAPMO Certification — File 0687', description: 'Current IAPMO Research and Testing listing', type: 'cert', category: 'Certifications' },
  { name: 'ADA Compliance Documentation', description: 'Americans with Disabilities Act compliance docs', type: 'cert', category: 'Certifications' },
];

const faqs = [
  {
    q: 'How do I get a spec sheet for a specific Florestone product?',
    a: 'All current spec sheets are available for download on this page in PDF format. If you need a spec sheet for a discontinued model or require a project-specific document, contact our sales team at (800) 446-2647 or email info@florestone.com.',
  },
  {
    q: 'What CAD file formats are available for Florestone products?',
    a: 'Florestone provides section CAD drawings in DWG and PDF formats for all current series. Files include plan view, elevation, and section views suitable for architectural and engineering submissions.',
  },
  {
    q: 'Can I request custom documentation for a large project submittal?',
    a: 'Yes. For healthcare, multifamily, hospitality, or institutional projects requiring custom engineer-submittal packages — including custom CAD, ADA documentation, and IAPMO certification letters — contact our sales team at (800) 446-2647.',
  },
];

const typeConfig: Record<ResourceType, { label: string; iconBg: string; iconText: string; iconBorder: string; abbr: string }> = {
  pdf: {
    label: 'PDF',
    iconBg: 'bg-[var(--color-coral-light)]',
    iconText: 'text-[var(--color-coral)]',
    iconBorder: 'border-[var(--color-coral)]/20',
    abbr: 'PDF',
  },
  cad: {
    label: 'CAD',
    iconBg: 'bg-[var(--color-primary-light)]',
    iconText: 'text-[var(--color-primary)]',
    iconBorder: 'border-[var(--color-primary)]/20',
    abbr: 'CAD',
  },
  install: {
    label: 'Install',
    iconBg: 'bg-[var(--color-secondary)]/10',
    iconText: 'text-[var(--color-secondary)]',
    iconBorder: 'border-[var(--color-secondary)]/20',
    abbr: 'GDE',
  },
  cert: {
    label: 'Cert',
    iconBg: 'bg-[var(--color-powder)]',
    iconText: 'text-[var(--color-secondary)]',
    iconBorder: 'border-[var(--color-secondary)]/20',
    abbr: 'CERT',
  },
};

const categories = ['PDF Spec Sheets', 'CAD Files', 'Installation Guides', 'Certifications'];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Florestone Downloads & Documentation',
  description: 'Spec sheets, CAD files, installation guides, and certifications for Florestone products.',
  numberOfItems: categories.length,
  itemListElement: categories.map((cat, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: cat,
    url: `https://www.florestone.com/resources#${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
  })),
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://www.florestone.com' },
        { name: 'Resources', url: 'https://www.florestone.com/resources' },
      ])} />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema(faqs)} />

      <Navbar activePage="/resources" />

      {/* Page Header */}
      <section className="bg-white border-b border-[var(--color-line)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
          >
            Downloads &amp; Documentation
          </p>
          <h1
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-4 max-w-2xl"
          >
            Resources &amp; Literature
          </h1>
          <p className="text-[var(--color-text-muted)] font-light leading-relaxed max-w-2xl text-base">
            Spec sheets, CAD files, installation guides, and certification documents for every Florestone product
            series — ready to download for your project submittal.
          </p>
        </div>
      </section>

      {/* Resource Grid by Category */}
      <section className="bg-[var(--color-offwhite)] py-16 px-6">
        <div className="max-w-[1280px] mx-auto space-y-14">
          {categories.map((category) => {
            const categoryResources = resources.filter((r) => r.category === category);
            return (
              <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                <p
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
                >
                  {category}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categoryResources.map((resource) => {
                    const cfg = typeConfig[resource.type];
                    return (
                      <div
                        key={resource.name}
                        className="bg-white rounded-lg border border-[var(--color-line)] p-6 hover:border-[var(--color-primary)] hover:shadow-sm transition-all flex flex-col"
                      >
                        {/* Type badge */}
                        <div className="mb-4">
                          <span
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-semibold tracking-[0.12em] uppercase border ${cfg.iconBg} ${cfg.iconText} ${cfg.iconBorder}`}
                          >
                            {cfg.abbr}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="font-semibold text-[var(--color-secondary)] text-base leading-snug mb-2"
                          >
                            {resource.name}
                          </h3>
                          <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-sm">
                            {resource.description}
                          </p>
                        </div>

                        {/* Download button */}
                        <div className="mt-5 pt-4 border-t border-[var(--color-line)]">
                          <Link
                            href="#"
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className={`inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase transition-colors ${cfg.iconText} hover:opacity-75`}
                            aria-label={`Download ${resource.name}`}
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download {cfg.label}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-6 border-t border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-3"
          >
            Frequently Asked Questions
          </p>
          <h2
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight mb-10 max-w-2xl"
          >
            Documentation questions
          </h2>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[var(--color-offwhite)] rounded-lg border border-[var(--color-line)] p-6"
              >
                <h3
                  style={{ fontFamily: 'var(--font-heading)' }}
                  className="font-semibold text-[var(--color-secondary)] text-base mb-3 leading-snug"
                >
                  {faq.q}
                </h3>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Need a custom spec package?"
        body="For project submittals, volume orders, and custom documentation — our sales team will pull exactly what your spec engineer needs."
        ctaLabel="Where to Buy"
        ctaHref="/find-a-dealer"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
