import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)' }} className="text-white/70 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-5">
              <span
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[20px] font-bold tracking-[0.02em] text-white"
              >
                FLORESTONE
              </span>
              <span
                style={{ fontFamily: 'var(--font-heading)' }}
                className="text-[9px] font-medium tracking-[0.18em] text-white/40 mt-1 uppercase"
              >
                Made for the Trade · Est. 1947
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-4">
              Quality shower and bath fixtures manufactured in the USA since 1947. Family-built for the plumbing trade.
            </p>
            <p className="text-xs text-white/30">An American Bath Group brand.</p>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-4"
            >
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link href="/s-series" className="hover:text-white transition-colors">S Series · Saflor® Recess</Link></li>
              <li><Link href="/f-series" className="hover:text-white transition-colors">F Series · AcrylX™ RTM</Link></li>
              <li><Link href="/t-series" className="hover:text-white transition-colors">T Series · Terrazzo</Link></li>
              <li><Link href="/barrier-free" className="hover:text-white transition-colors">ADA &amp; Barrier-Free</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Mop Sinks &amp; Utility</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Shower Walls</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-4"
            >
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link href="/resources" className="hover:text-white transition-colors">Spec Sheets &amp; CAD</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Installation Guides</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">ADA Documentation</Link></li>
              <li><Link href="/why-florestone" className="hover:text-white transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-4"
            >
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55 mb-6">
              <li><Link href="/why-florestone" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/find-a-dealer" className="hover:text-white transition-colors">Find a Dealer</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
            <h4
              style={{ fontFamily: 'var(--font-heading)' }}
              className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--color-primary)] mb-2"
            >
              Sales Line
            </h4>
            <p className="text-sm font-semibold text-white">(800) 446-2647</p>
            <p className="text-xs text-white/35 mt-1">Mon–Fri · 7am–5pm PT</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Florestone Products, Inc. All rights reserved.</p>
          <p
            style={{ fontFamily: 'var(--font-heading)' }}
            className="font-medium tracking-wider uppercase text-[10px]"
          >
            Madera, CA · Denison, TX · Made in USA
          </p>
        </div>
      </div>
    </footer>
  );
}
