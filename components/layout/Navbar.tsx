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
    <nav className="sticky top-0 z-50 bg-white border-b border-[var(--color-line)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex flex-col leading-none">
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[20px] font-bold tracking-[0.02em] text-[var(--color-secondary)] leading-none"
          >
            FLORESTONE
          </span>
          <span
            style={{ fontFamily: 'var(--font-heading)' }}
            className="text-[9px] font-medium tracking-[0.18em] text-[var(--color-text-muted)] mt-0.5 uppercase"
          >
            Made for the Trade · Est. 1947
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--font-heading)' }}
              className={`px-4 py-2.5 text-[13px] font-medium transition-colors rounded-sm ${
                activePage === l.href
                  ? 'text-[var(--color-primary)] bg-[var(--color-primary-light)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/find-a-dealer"
            style={{ fontFamily: 'var(--font-heading)' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-mid)] text-white text-[13px] font-semibold rounded transition-colors"
          >
            Find a Dealer
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[var(--color-text)] p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
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
              className="block py-3.5 text-[14px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] border-b border-[var(--color-line)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/find-a-dealer"
            onClick={() => setOpen(false)}
            style={{ fontFamily: 'var(--font-heading)' }}
            className="mt-4 block w-full text-center py-3 bg-[var(--color-secondary)] text-white text-[13px] font-semibold rounded"
          >
            Find a Dealer
          </Link>
        </div>
      )}
    </nav>
  );
}
