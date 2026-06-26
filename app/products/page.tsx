import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTABand from '@/components/shared/CTABand';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import ProductCatalogClient from './ProductCatalogClient';
import { SYNCED_PRODUCTS } from './products-data';

export const metadata: Metadata = {
  title: 'The Florestone Catalog — Shower Bases, ADA Units, Mop Sinks & Utility Fixtures',
  description:
    'Browse every Florestone product: Saflor® compression-molded recess bases (S Series), F Series RTM fiberglass with AcrylX™, T Series cast terrazzo, ADA barrier-free units, terrazzo mop sinks, and utility fixtures. USA-made since 1947. Spec sheets and CAD files available.',
  openGraph: {
    title: 'The Florestone Catalog — Shower Bases, ADA Units & Bath Fixtures',
    description:
      'Complete catalog of Florestone shower bases, ADA-compliant units, terrazzo mop sinks and utility fixtures manufactured in Madera, CA and Denison, TX.',
    type: 'website',
    url: 'https://www.florestone.com/products',
  },
};

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: 'https://www.florestone.com/' },
  { name: 'Products', url: 'https://www.florestone.com/products' },
]);

const ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Florestone Product Catalog',
  description: 'Complete catalog of Florestone shower bases, ADA-compliant units, terrazzo mop sinks and utility fixtures manufactured in the USA.',
  url: 'https://www.florestone.com/products',
  numberOfItems: SYNCED_PRODUCTS.length,
  itemListElement: SYNCED_PRODUCTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    description: `${p.type} — ${p.size}`,
    url: `https://www.florestone.com/products#${p.id}`,
  })),
};

export default function ProductsCatalogPage() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <JsonLd data={ITEM_LIST_SCHEMA} />
      <Navbar activePage="/products" />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-20 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-8 text-white/40">
            <Link href="/" className="text-[11px] tracking-wider uppercase hover:text-white/70 transition-colors font-light">Home</Link>
            <span className="text-[11px]">/</span>
            <span className="text-[11px] tracking-wider uppercase text-white/60 font-light">Catalog</span>
          </div>
          <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-4">
            The Florestone Catalog — Est. 1947
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-white text-4xl md:text-5xl tracking-tight mb-5 max-w-2xl leading-tight">
            The Complete Florestone Catalog
          </h1>
          <p className="text-white/60 text-[16px] leading-relaxed max-w-2xl font-light">
            Shower bases in three material platforms — Saflor® compression-molded, F Series RTM fiberglass with AcrylX™, and T Series solid terrazzo — plus the ADA barrier-free line, terrazzo mop sinks, and utility fixtures. Every product ships through the plumbing trade with a spec sheet and CAD file.
          </p>
        </div>
      </section>

      {/* ── CATALOG WITH SEARCH + FILTERS ── */}
      <ProductCatalogClient />

      <CTABand
        heading="Need a spec pulled?"
        body="Florestone is a B2B trade brand. Connect to your plumbing wholesaler or call (800) 446-2647 to reach our sales team in Madera, CA direct."
        ctaLabel="Find a Wholesaler"
        ctaHref="/find-a-dealer"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
