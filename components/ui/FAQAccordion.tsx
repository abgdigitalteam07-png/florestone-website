'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-[var(--color-line)] rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--color-primary-light)] transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[var(--color-secondary)] text-[15px] pr-4" style={{ fontFamily: 'var(--font-heading)' }}>{item.q}</span>
            <span
              className={`text-[var(--color-primary)] text-2xl shrink-0 transition-transform leading-none ${
                open === i ? 'rotate-45' : ''
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 -mt-1 border-t border-[var(--color-line)]">
              <p className="text-[var(--color-text-muted)] leading-relaxed pt-4 text-[14px] font-light">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
