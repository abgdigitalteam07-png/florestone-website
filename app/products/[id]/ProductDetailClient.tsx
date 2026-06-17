'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { resolveVariantImage, type Product, type ProductDetail, type DrainPosition } from '../products-data';

type Tab = 'features' | 'specs' | 'reviews';

const DRAIN_LABEL: Record<DrainPosition, string> = {
  left: 'Left',
  right: 'Right',
  center: 'Center',
  reversible: 'Reversible',
};

const drainCode = (d: DrainPosition | null) =>
  d === 'left' ? 'L' : d === 'right' ? 'R' : d === 'center' ? 'C' : d === 'reversible' ? 'X' : '';

export default function ProductDetailClient({
  product,
  detail,
}: {
  product: Product;
  detail: ProductDetail;
}) {
  const [color, setColor] = useState(detail.colors[0].id);
  const [drain, setDrain] = useState<DrainPosition | null>(detail.drainOptions[0] ?? null);
  const [galleryOverride, setGalleryOverride] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>('features');
  const [added, setAdded] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const variantImage = useMemo(() => resolveVariantImage(detail, color, drain), [detail, color, drain]);
  const activeImage = galleryOverride ?? variantImage;

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2400);
  };

  const handleColor = (id: string) => {
    setColor(id);
    setGalleryOverride(null);
  };

  const handleDrain = (d: DrainPosition) => {
    setDrain(d);
    setGalleryOverride(null);
  };

  const handleAddToQuote = () => {
    setAdded(v => !v);
    showToast(added ? 'Removed from project specs' : `${product.name} added to project specs`);
  };

  const currentColor = detail.colors.find(c => c.id === color) ?? detail.colors[0];
  const stockSku = [detail.sku, drainCode(drain), currentColor.id.toUpperCase()].filter(Boolean).join('-');

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-[var(--color-text-light)]" style={{ fontFamily: 'var(--font-heading)' }}>
          <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/products" className="hover:text-[var(--color-primary)] transition-colors">{product.series}</Link></li>
          <li>/</li>
          <li className="text-[var(--color-text-muted)] normal-case tracking-normal">{product.name}</li>
        </ol>
      </nav>

      {/* ── Hero two-column ── */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── LEFT: Gallery ── */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] bg-[var(--color-offwhite)] rounded-lg overflow-hidden border border-[var(--color-line)] group">
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${product.name} — ${currentColor.name}${drain ? `, ${DRAIN_LABEL[drain]} drain` : ''}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover animate-[fadeIn_0.3s_ease-out]"
              />
              <button
                aria-label="Zoom image"
                className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded border border-[var(--color-line)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-white hover:text-[var(--color-primary)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>

              {/* Variant chip overlay */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-wide uppercase bg-white/95 backdrop-blur px-2.5 py-1 rounded text-[var(--color-secondary)] border border-[var(--color-line)]">
                  {currentColor.name}
                </span>
                {drain && (
                  <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary)] text-white px-2.5 py-1 rounded">
                    {DRAIN_LABEL[drain]} Drain
                  </span>
                )}
              </div>
            </div>
            {detail.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {detail.gallery.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setGalleryOverride(src)}
                    aria-label={`View image ${i + 1}`}
                    aria-current={activeImage === src}
                    className={`relative aspect-square bg-[var(--color-offwhite)] rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === src
                        ? 'border-[var(--color-primary)] shadow-sm'
                        : 'border-transparent hover:border-[var(--color-powder-dark)] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={src} alt={`Thumbnail ${i + 1}`} fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--color-text-light)]">
                Florestone · {product.series}
              </p>
              <div className="flex gap-3 text-[var(--color-text-light)]">
                <button aria-label="Share to Facebook" className="hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33V22c4.78-.75 8.44-4.88 8.44-9.94z"/></svg>
                </button>
                <button aria-label="Share to Pinterest" className="hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.93-.2-2.37.04-3.4.22-.91 1.4-5.78 1.4-5.78s-.36-.71-.36-1.77c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.69 0 1.02-.65 2.55-1 3.97-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.76-2.25 3.76-5.5 0-2.87-2.07-4.88-5.02-4.88-3.42 0-5.43 2.56-5.43 5.22 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.34 1.38c-.05.22-.17.27-.4.16-1.48-.69-2.4-2.85-2.4-4.59 0-3.74 2.72-7.17 7.83-7.17 4.11 0 7.31 2.93 7.31 6.85 0 4.09-2.58 7.38-6.16 7.38-1.2 0-2.34-.62-2.72-1.36l-.74 2.82c-.27 1.04-1 2.34-1.5 3.13A12 12 0 1 0 12 0z"/></svg>
                </button>
              </div>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-3xl md:text-4xl tracking-tight leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-[var(--color-text-muted)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              <span><span className="font-semibold text-[var(--color-text)]">SKU:</span> {stockSku}</span>
              <span><span className="font-semibold text-[var(--color-text)]">Model:</span> {detail.modelNumber}</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5 text-[var(--color-primary)]">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.05 2.93a1 1 0 011.9 0l1.42 4.36a1 1 0 00.95.69h4.58a1 1 0 01.59 1.81l-3.7 2.69a1 1 0 00-.36 1.12l1.41 4.36a1 1 0 01-1.54 1.12l-3.7-2.69a1 1 0 00-1.18 0l-3.7 2.69a1 1 0 01-1.54-1.12l1.41-4.36a1 1 0 00-.36-1.12L1.51 9.79a1 1 0 01.59-1.81h4.58a1 1 0 00.95-.69L9.05 2.93z"/></svg>
                ))}
              </div>
              <button className="text-[12px] text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] underline" style={{ fontFamily: 'var(--font-heading)' }}>
                (1) Write a Review
              </button>
            </div>

            {/* Configurators */}
            <div className="flex flex-wrap gap-8 mb-6">
              {detail.colors.length > 0 && (
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                    Color <span className="text-[var(--color-text-light)] font-normal normal-case tracking-normal">— {currentColor.name}</span>
                  </p>
                  <div className="flex gap-2">
                    {detail.colors.map(c => (
                      <button
                        key={c.id}
                        onClick={() => handleColor(c.id)}
                        aria-label={`Color: ${c.name}`}
                        aria-pressed={color === c.id}
                        title={c.name}
                        className={`relative w-8 h-8 rounded-full border transition-all ${
                          color === c.id
                            ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)] ring-offset-2'
                            : 'border-[var(--color-powder-dark)] hover:border-[var(--color-text-muted)]'
                        }`}
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {detail.drainOptions.length > 0 && (
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                    Drain Position
                  </p>
                  <div className="inline-flex rounded border border-[var(--color-line)] overflow-hidden">
                    {detail.drainOptions.map(d => (
                      <button
                        key={d}
                        onClick={() => handleDrain(d)}
                        aria-pressed={drain === d}
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className={`px-5 py-2 text-[13px] font-semibold transition-all ${
                          drain === d
                            ? 'bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] border-2 border-[var(--color-primary)] -m-px z-10 relative'
                            : 'bg-white text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                        }`}
                      >
                        {DRAIN_LABEL[d]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Spec grid 3×2 */}
            <div className="grid grid-cols-3 border border-[var(--color-line)] rounded-lg overflow-hidden mb-6">
              {[
                { label: 'Dimensions', value: detail.spec.dimensions },
                { label: 'Height', value: detail.spec.height },
                { label: 'Weight', value: detail.spec.weight },
                { label: 'Capacity', value: detail.spec.capacity },
                { label: 'Material', value: detail.spec.material },
                { label: 'Installation', value: detail.spec.installation },
              ].map((s, i) => (
                <div key={s.label} className={`p-4 ${i < 3 ? 'border-b' : ''} ${(i % 3) !== 2 ? 'border-r' : ''} border-[var(--color-line)] bg-white`}>
                  <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-wider uppercase text-[var(--color-text-light)] mb-1">
                    {s.label}
                  </p>
                  <p className="text-[13px] text-[var(--color-text)] leading-snug font-medium">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Trade callout */}
            <div className="mb-4">
              <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-wider uppercase text-[var(--color-text-light)] mb-1">
                Trade Pricing
              </p>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                Specified through the plumbing wholesale channel. Contact your local rep or wholesaler for project pricing.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={handleAddToQuote}
                style={{ fontFamily: 'var(--font-heading)' }}
                className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded border text-[13px] font-semibold tracking-wide uppercase transition-all ${
                  added
                    ? 'bg-[var(--color-primary-light)] border-[var(--color-primary)] text-[var(--color-primary-dark)]'
                    : 'bg-white border-[var(--color-powder-dark)] text-[var(--color-text)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {added
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  }
                </svg>
                {added ? 'Added to Specs' : 'Add to Quote'}
              </button>
              <Link
                href="/find-a-dealer"
                style={{ fontFamily: 'var(--font-heading)' }}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded text-[13px] font-semibold tracking-wide uppercase bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Find a Rep
              </Link>
            </div>

            {/* Warranty card */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-[var(--color-primary-light)]/40 border border-[var(--color-primary-light)] mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <p className="text-[13px] font-semibold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Warranty Information Included
                </p>
              </div>
              <Link href="/resources" className="text-[12px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] tracking-wide underline" style={{ fontFamily: 'var(--font-heading)' }}>
                View Full Terms →
              </Link>
            </div>

            {/* Sales agent card */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-[var(--color-light)] border border-[var(--color-line)]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 border border-[var(--color-line)]">
                  <svg className="w-4 h-4 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    Speak With Florestone Sales
                  </p>
                  <p className="text-[12px] text-[var(--color-text-muted)] leading-snug mt-0.5">
                    Get spec support, lead-time check, or contractor pricing
                  </p>
                </div>
              </div>
              <Link href="/contact" className="text-[12px] font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] tracking-wide underline whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
                Contact Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs section ── */}
      <section className="bg-[var(--color-offwhite)] border-y border-[var(--color-line)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14">
          <div className="flex gap-8 border-b border-[var(--color-line)] mb-10" role="tablist">
            {[
              { id: 'features' as Tab, label: 'Features and Benefits' },
              { id: 'specs' as Tab, label: 'Technical Specs' },
              { id: 'reviews' as Tab, label: 'Reviews' },
            ].map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                style={{ fontFamily: 'var(--font-heading)' }}
                className={`relative pb-3 text-[15px] font-semibold tracking-wide transition-colors ${
                  tab === t.id ? 'text-[var(--color-secondary)]' : 'text-[var(--color-text-light)] hover:text-[var(--color-text-muted)]'
                }`}
              >
                {t.label}
                {tab === t.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-primary)] rounded-t" />
                )}
              </button>
            ))}
          </div>

          {tab === 'features' && (
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 animate-[fadeIn_0.3s_ease-out]">
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-[18px] font-semibold text-[var(--color-secondary)] mb-4">Key Benefits</h3>
                <ul className="space-y-2.5">
                  {detail.keyBenefits.map(b => (
                    <li key={b} className="flex gap-2.5 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                      <span className="text-[var(--color-primary)] mt-1.5 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {detail.characteristics.length > 0 && (
                  <>
                    <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-[18px] font-semibold text-[var(--color-secondary)] mb-4 mt-8">Characteristics</h3>
                    <ul className="space-y-2.5">
                      {detail.characteristics.map(c => (
                        <li key={c} className="flex gap-2.5 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                          <span className="text-[var(--color-primary)] mt-1.5 shrink-0">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-[18px] font-semibold text-[var(--color-secondary)] mb-4">Attributes Set</h3>
                <ul className="space-y-2.5">
                  {detail.attributes.map(a => (
                    <li key={a.label} className="flex gap-2.5 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                      <span className="text-[var(--color-primary)] mt-1.5 shrink-0">•</span>
                      <span><span className="text-[var(--color-text)] font-medium">{a.label} :</span> {a.value}</span>
                    </li>
                  ))}
                </ul>

                <h3 style={{ fontFamily: 'var(--font-heading)' }} className="text-[18px] font-semibold text-[var(--color-secondary)] mb-4 mt-8">Available Configurations</h3>
                <ul className="space-y-2.5 text-[14px] text-[var(--color-text-muted)] leading-relaxed">
                  <li className="flex gap-2.5">
                    <span className="text-[var(--color-primary)] mt-1.5 shrink-0">•</span>
                    <span><span className="text-[var(--color-text)] font-medium">Colors :</span> {detail.colors.map(c => c.name).join(', ')}</span>
                  </li>
                  {detail.drainOptions.length > 0 && (
                    <li className="flex gap-2.5">
                      <span className="text-[var(--color-primary)] mt-1.5 shrink-0">•</span>
                      <span><span className="text-[var(--color-text)] font-medium">Drain Options :</span> {detail.drainOptions.map(d => DRAIN_LABEL[d]).join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {tab === 'specs' && (
            <div className="animate-[fadeIn_0.3s_ease-out] max-w-3xl">
              <div className="bg-white rounded-lg border border-[var(--color-line)] overflow-hidden">
                {[
                  { label: 'Dimensions', value: detail.spec.dimensions },
                  { label: 'Height', value: detail.spec.height },
                  { label: 'Weight', value: detail.spec.weight },
                  { label: 'Capacity', value: detail.spec.capacity },
                  { label: 'Material', value: detail.spec.material },
                  { label: 'Installation Type', value: detail.spec.installation },
                  { label: 'Selected SKU', value: stockSku },
                  { label: 'Model Number', value: detail.modelNumber },
                  { label: 'Available Colors', value: detail.colors.map(c => c.name).join(', ') },
                  ...(detail.drainOptions.length > 0 ? [{ label: 'Drain Options', value: detail.drainOptions.map(d => DRAIN_LABEL[d]).join(', ') }] : []),
                  { label: 'Residential Warranty', value: detail.warrantyResidential },
                  { label: 'Commercial Warranty', value: detail.warrantyCommercial },
                  ...(product.ada ? [{ label: 'ADA / ANSI A117.1', value: 'Compliant' }] : []),
                ].map((row, i, arr) => (
                  <div key={row.label} className={`grid grid-cols-[200px_1fr] gap-4 px-5 py-3.5 text-[13px] ${i < arr.length - 1 ? 'border-b border-[var(--color-line)]' : ''}`}>
                    <p className="text-[var(--color-text-muted)] font-medium" style={{ fontFamily: 'var(--font-heading)' }}>{row.label}</p>
                    <p className="text-[var(--color-text)]">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <Link href="/resources" style={{ fontFamily: 'var(--font-heading)' }} className="inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider bg-white border border-[var(--color-line)] rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Spec Sheet (PDF)
                </Link>
                <Link href="/resources" style={{ fontFamily: 'var(--font-heading)' }} className="inline-flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider bg-white border border-[var(--color-line)] rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  CAD Drawing (DWG)
                </Link>
              </div>
            </div>
          )}

          {tab === 'reviews' && (
            <div className="animate-[fadeIn_0.3s_ease-out] max-w-2xl">
              <div className="flex items-start gap-4 p-5 bg-white rounded-lg border border-[var(--color-line)] mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
                  <span className="text-[13px] font-semibold text-[var(--color-primary-dark)]" style={{ fontFamily: 'var(--font-heading)' }}>JC</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[13px] font-semibold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-heading)' }}>James C. — General Contractor</p>
                    <div className="flex gap-0.5 text-[var(--color-primary)]">
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.05 2.93a1 1 0 011.9 0l1.42 4.36a1 1 0 00.95.69h4.58a1 1 0 01.59 1.81l-3.7 2.69a1 1 0 00-.36 1.12l1.41 4.36a1 1 0 01-1.54 1.12l-3.7-2.69a1 1 0 00-1.18 0l-3.7 2.69a1 1 0 01-1.54-1.12l1.41-4.36a1 1 0 00-.36-1.12L1.51 9.79a1 1 0 01.59-1.81h4.58a1 1 0 00.95-.69L9.05 2.93z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                    Spec'd these on a six-unit multifamily renovation. Drain location flipped easily, finish was consistent across the order, and lead time held. Will spec again.
                  </p>
                </div>
              </div>
              <button
                onClick={() => showToast('Review form coming soon')}
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[13px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] underline"
              >
                Write a Review →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-[var(--color-secondary)] text-white rounded-lg shadow-lg text-[13px] font-medium animate-[fadeIn_0.2s_ease-out]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {toast}
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
