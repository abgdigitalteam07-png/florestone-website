import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { ALL_FAMILIES_DATA, getFamilyBySlug } from '../../products-data';

export async function generateStaticParams() {
  return ALL_FAMILIES_DATA.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) return { title: 'Family not found — Florestone' };
  return {
    title: `${family.name} — ${family.category} · Florestone`,
    description: `${family.name} ${family.category.toLowerCase()} from Florestone. ${family.count} ${family.count === 1 ? 'size' : 'sizes'} available (${family.sizeRange}). USA-made bath fixtures since 1947.`,
    openGraph: {
      title: `${family.name} — Florestone`,
      description: `${family.category} · ${family.count} sizes · ${family.sizeRange}`,
      type: 'website',
      url: `https://www.florestone.com/products/family/${family.slug}`,
    },
  };
}

export default async function FamilyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://www.florestone.com/' },
    { name: 'Products', url: 'https://www.florestone.com/products' },
    { name: family.name, url: `https://www.florestone.com/products/family/${family.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Navbar activePage="/products" />

      {/* ── HERO ── */}
      <section style={{ backgroundColor: 'var(--color-secondary)' }} className="py-16 px-6 border-b border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 mb-8 text-white/40">
            <Link href="/" className="text-[11px] tracking-wider uppercase hover:text-white/70 transition-colors font-light">Home</Link>
            <span className="text-[11px]">/</span>
            <Link href="/products" className="text-[11px] tracking-wider uppercase hover:text-white/70 transition-colors font-light">Catalog</Link>
            <span className="text-[11px]">/</span>
            <span className="text-[11px] tracking-wider uppercase text-white/60 font-light">{family.name}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--color-primary)] mb-4">
                {family.series} · {family.category}
              </p>
              <h1 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-white text-4xl md:text-5xl tracking-tight mb-5 leading-tight">
                {family.name}
              </h1>
              <p className="text-white/70 text-[15px] leading-relaxed mb-6 font-light">
                {family.count} {family.count === 1 ? 'size' : 'sizes'} available · {family.sizeRange}{family.ada ? ' · ADA / Barrier-Free models included' : ''}
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
              <Image src={family.image} alt={family.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── SPEC TABLE ── */}
      <section className="py-12 px-6 bg-[var(--color-offwhite)] min-h-screen">
        <div className="max-w-[1280px] mx-auto">
          <h2 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-2xl tracking-tight mb-6">
            Available Sizes
          </h2>
          <div className="bg-white rounded-lg border border-[var(--color-line)] overflow-hidden overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="bg-[var(--color-light)] text-[var(--color-text-muted)]">
                <tr>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">Model</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">Dimensions</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">Drain</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">Weight</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">List Price</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-left text-[11px] font-semibold tracking-wider uppercase">ADA</th>
                  <th style={{ fontFamily: 'var(--font-heading)' }} className="px-4 py-3 text-right text-[11px] font-semibold tracking-wider uppercase">Spec</th>
                </tr>
              </thead>
              <tbody>
                {family.variants.map((v) => (
                  <tr key={v.id} className="border-t border-[var(--color-line)] hover:bg-[var(--color-light)]/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-[var(--color-secondary)]">{v.salsifyId}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{v.size || '—'}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{v.drain || '—'}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{v.weightLbs ? `${v.weightLbs} lbs` : '—'}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{v.listPriceUsd ? `$${v.listPriceUsd}` : '—'}</td>
                    <td className="px-4 py-3">{v.ada ? <span className="text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-2 py-0.5 rounded">ADA</span> : <span className="text-[var(--color-text-light)]">—</span>}</td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/products/${v.id}`} style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
