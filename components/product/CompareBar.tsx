import Link from 'next/link';
import { SERIES, SeriesKey } from '@/lib/products';

export default function CompareBar({ models }: { models: SeriesKey[] }) {
  return (
    <section className="bg-[var(--color-sand)] py-14 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <p className="font-body text-[var(--color-accent)] font-medium mb-4 text-xs uppercase tracking-[0.16em]">
          Compare Series
        </p>
        <h3 className="font-display text-[var(--color-charcoal)] text-2xl md:text-3xl mb-8">
          Comparing options? See the full lineup.
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          {models.map((key) => {
            const p = SERIES[key];
            return (
              <Link
                key={key}
                href={`/${p.slug}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] font-body font-medium text-sm rounded-md hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                {p.name} — {p.subtitle}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
