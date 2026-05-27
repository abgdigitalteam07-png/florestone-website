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
    <section style={{ backgroundColor: 'var(--color-primary)' }} className="relative overflow-hidden py-16 px-6">
      <div className="max-w-[1280px] mx-auto text-center relative">
        <h2
          style={{ fontFamily: 'var(--font-heading)' }}
          className="font-semibold text-white text-2xl md:text-3xl mb-3 leading-tight tracking-tight"
        >
          {heading}
        </h2>
        <p className="text-white/80 text-base mb-8 max-w-xl mx-auto leading-relaxed font-light">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ctaHref}
            style={{ fontFamily: 'var(--font-heading)' }}
            className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded transition-colors"
          >
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              style={{ fontFamily: 'var(--font-heading)' }}
              className="inline-flex items-center justify-center px-8 py-3 border border-white/40 hover:border-white text-white font-semibold text-[13px] tracking-[0.06em] uppercase rounded hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
