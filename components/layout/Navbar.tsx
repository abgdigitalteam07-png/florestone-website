'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Catalog', href: '/products' },
  { label: 'Our Story', href: '/why-florestone' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ activePage }: { activePage?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-offwhite)]/95 backdrop-blur-md border-b border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link href="/" className="shrink-0 flex items-baseline gap-1">
          <span className="font-display text-2xl text-[var(--color-charcoal)] tracking-tight leading-none">
            Flore<span className="text-[var(--color-accent)]">stone</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.18em] text-[var(--color-stone-dark)] ml-2">
            Est. 1947
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-body text-[var(--color-slate)] hover:text-[var(--color-charcoal)] rounded-md transition-colors ${
                activePage === l.href ? 'text-[var(--color-charcoal)] font-medium' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/find-a-dealer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm font-body font-medium rounded-md transition-colors"
        >
          Find a Dealer
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--color-charcoal)] p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-[var(--color-charcoal)] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-charcoal)] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-charcoal)] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-offwhite)] border-t border-[var(--color-line)] px-6 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-body text-[var(--color-slate)] hover:text-[var(--color-charcoal)] border-b border-[var(--color-line)]/40"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/find-a-dealer"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full text-center py-3 bg-[var(--color-accent)] text-white text-sm font-body font-medium rounded-md"
          >
            Find a Wholesaler
          </Link>
        </div>
      )}
    </nav>
  );
}
