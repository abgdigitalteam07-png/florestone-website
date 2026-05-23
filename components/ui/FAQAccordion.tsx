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
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--color-sand)]/60 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-body font-medium text-[var(--color-charcoal)] pr-4">{item.q}</span>
            <span
              className={`text-[var(--color-accent)] text-2xl font-display shrink-0 transition-transform leading-none ${
                open === i ? 'rotate-45' : ''
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 -mt-1 border-t border-[var(--color-line)]/40">
              <p className="font-body text-[var(--color-slate)] leading-relaxed pt-4">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
