import Link from 'next/link';

interface CTABandProps {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({ heading, body, ctaLabel, ctaHref, secondaryLabel, secondaryHref }: CTABandProps) {
  return (
    <section className="bg-[var(--color-accent)] relative overflow-hidden py-14 px-6">
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
      <div className="max-w-[1280px] mx-auto text-center relative">
        <h2 className="font-display text-white text-2xl md:text-4xl mb-3 leading-tight">{heading}</h2>
        <p className="text-white/80 font-body text-base mb-7 max-w-xl mx-auto leading-relaxed">{body}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-7 py-3 bg-white text-[var(--color-accent)] font-body font-medium text-sm rounded-md hover:bg-[var(--color-sand)] transition-colors"
          >
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-7 py-3 border border-white/40 hover:border-white text-white font-body font-medium text-sm rounded-md hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
