'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Why Florestone', href: '/why-florestone' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ activePage }: { activePage?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex flex-col leading-none group">
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[22px] tracking-[0.04em] leading-none"
          >
            <span className="font-light text-[var(--color-primary)]">FLORE</span>
            <span className="font-semibold text-[var(--color-secondary)]">STONE</span>
          </span>
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[8px] font-semibold tracking-[0.22em] text-[var(--color-text-light)] mt-0.5"
          >
            MADE FOR THE TRADE
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--font-heading)' }}
              className={`px-4 py-2 text-[12px] font-medium tracking-[0.06em] uppercase transition-colors rounded-sm ${
                activePage === l.href
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary-light)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-secondary)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/find-a-dealer"
          style={{ fontFamily: 'var(--font-heading)' }}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded transition-colors"
        >
          Find a Dealer
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--color-secondary)] p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-[var(--color-secondary)] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-secondary)] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-[var(--color-secondary)] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-line)] px-6 pb-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--font-heading)' }}
              className="block py-3.5 text-[13px] font-medium tracking-[0.06em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-primary)] border-b border-[var(--color-line)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/find-a-dealer"
            onClick={() => setOpen(false)}
            style={{ fontFamily: 'var(--font-heading)' }}
            className="mt-4 block w-full text-center py-3 bg-[var(--color-primary)] text-white text-[12px] font-semibold tracking-[0.08em] uppercase rounded"
          >
            Find a Dealer
          </Link>
        </div>
      )}
    </nav>
  );
}
