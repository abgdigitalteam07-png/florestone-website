'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_PRODUCTS, ALL_SERIES, ALL_CATEGORIES, type Product } from './products-data';

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg border border-[var(--color-line)] overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-offwhite)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 z-10 flex gap-1.5">
          <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[9px] font-semibold tracking-[0.1em] uppercase bg-[var(--color-secondary)] text-white px-2 py-1 rounded">
            {product.series}
          </span>
          {product.ada && (
            <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[9px] font-semibold tracking-[0.1em] uppercase bg-[var(--color-primary)] text-white px-2 py-1 rounded">
              ADA
            </span>
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)' }} className="font-semibold text-[var(--color-secondary)] text-[14px] leading-snug mb-1">
            {product.name}
          </h3>
          <p className="text-[var(--color-text-muted)] text-[12px]">{product.type}</p>
          <div className="flex gap-1.5 mt-2 flex-wrap">
            <span className="text-[10px] bg-[var(--color-light)] text-[var(--color-text-muted)] px-2 py-0.5 rounded font-medium">{product.size}</span>
            {product.ada && <span className="text-[10px] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-2 py-0.5 rounded font-medium">ADA Compliant</span>}
          </div>
        </div>
        <div className="flex gap-2 pt-2 border-t border-[var(--color-line)] mt-auto">
          <Link href="/resources" style={{ fontFamily: 'var(--font-heading)' }} className="flex-1 text-center text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-2 rounded border border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
            PDF
          </Link>
          <Link href="/resources" style={{ fontFamily: 'var(--font-heading)' }} className="flex-1 text-center text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-2 rounded border border-[var(--color-line)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
            CAD
          </Link>
          <Link href={`/products/${product.id}`} style={{ fontFamily: 'var(--font-heading)' }} className="flex-1 text-center text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-2 rounded bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] transition-colors">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProductCatalogClient() {
  const [search, setSearch] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [adaOnly, setAdaOnly] = useState(false);

  const toggleSeries = (s: string) =>
    setSelectedSeries(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const toggleCategory = (c: string) =>
    setSelectedCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return ALL_PRODUCTS.filter(p => {
      if (q && ![p.name, p.series, p.type, p.size, p.id, p.category].join(' ').toLowerCase().includes(q)) return false;
      if (selectedSeries.length && !selectedSeries.includes(p.series)) return false;
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false;
      if (adaOnly && !p.ada) return false;
      return true;
    });
  }, [search, selectedSeries, selectedCategories, adaOnly]);

  const hasFilters = search || selectedSeries.length || selectedCategories.length || adaOnly;

  const clearAll = () => {
    setSearch('');
    setSelectedSeries([]);
    setSelectedCategories([]);
    setAdaOnly(false);
  };

  return (
    <div className="bg-[var(--color-offwhite)] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10">

        {/* ── Search bar (top, full width) ── */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by product name, model number, series, size…"
              style={{ fontFamily: 'var(--font-heading)' }}
              className="w-full pl-11 pr-10 py-3 bg-white border border-[var(--color-line)] rounded-lg text-[13px] text-[var(--color-text)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute inset-y-0 right-3 flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-8">

          {/* ── Filter Sidebar ── */}
          <aside className="hidden lg:block w-[210px] shrink-0">
            <div className="bg-white rounded-lg border border-[var(--color-line)] p-5 sticky top-24">

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-text)]">
                  Filters
                </span>
                {hasFilters && (
                  <button onClick={clearAll} style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] tracking-wide uppercase">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-5">
                <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--color-text-muted)] mb-3">
                  Category
                </p>
                <div className="space-y-2">
                  {ALL_CATEGORIES.map(cat => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-3.5 h-3.5 rounded border-[var(--color-powder-dark)] text-[var(--color-primary)] accent-[var(--color-primary)]"
                      />
                      <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[12px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Series */}
              <div className="mb-5 pt-4 border-t border-[var(--color-line)]">
                <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--color-text-muted)] mb-3">
                  Series
                </p>
                <div className="space-y-2">
                  {ALL_SERIES.map(s => (
                    <label key={s} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedSeries.includes(s)}
                        onChange={() => toggleSeries(s)}
                        className="w-3.5 h-3.5 rounded border-[var(--color-powder-dark)] text-[var(--color-primary)] accent-[var(--color-primary)]"
                      />
                      <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[12px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* ADA toggle */}
              <div className="pt-4 border-t border-[var(--color-line)]">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--color-text-muted)]">
                      ADA / Barrier-Free
                    </p>
                    <p className="text-[10px] text-[var(--color-text-light)] mt-0.5">Only show ADA units</p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={adaOnly}
                    onClick={() => setAdaOnly(v => !v)}
                    className={`relative w-10 h-5 rounded-full transition-colors ${adaOnly ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-powder-dark)]'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${adaOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
                  </button>
                </label>
              </div>
            </div>
          </aside>

          {/* ── Product Grid ── */}
          <div className="flex-1 min-w-0">

            {/* Results count + active filters */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[12px] text-[var(--color-text-muted)]">
                <span className="font-semibold text-[var(--color-text)]">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''}
                {hasFilters ? ' matching filters' : ' in catalog'}
              </p>
              {/* Active filter chips */}
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(c => (
                  <button key={c} onClick={() => toggleCategory(c)} style={{ fontFamily: 'var(--font-heading)' }} className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-2.5 py-1 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    {c} ×
                  </button>
                ))}
                {selectedSeries.map(s => (
                  <button key={s} onClick={() => toggleSeries(s)} style={{ fontFamily: 'var(--font-heading)' }} className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-2.5 py-1 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    {s} ×
                  </button>
                ))}
                {adaOnly && (
                  <button onClick={() => setAdaOnly(false)} style={{ fontFamily: 'var(--font-heading)' }} className="flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-2.5 py-1 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    ADA only ×
                  </button>
                )}
              </div>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p style={{ fontFamily: 'var(--font-heading)' }} className="text-[var(--color-text-muted)] text-[15px] mb-3">No products match your search.</p>
                <button onClick={clearAll} style={{ fontFamily: 'var(--font-heading)' }} className="text-[13px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] underline">
                  Clear all filters
                </button>
              </div>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
