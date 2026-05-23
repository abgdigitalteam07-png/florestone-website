import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white/70 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2 lg:col-span-1">
            <span className="font-display text-2xl text-white tracking-tight">
              Flore<span className="text-[var(--color-stone)]">stone</span>
            </span>
            <p className="font-display italic text-white text-base leading-snug mt-4 mb-3 max-w-xs">
              &ldquo;You stand behind your product. And you take care of the customers.&rdquo;
            </p>
            <p className="text-xs text-white/40 mb-4">— Ray Flores, founder · 1947</p>
            <p className="text-xs text-white/40">A family-built American Bath Group brand.</p>
          </div>

          <div>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-[0.14em] mb-4">Catalog</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Full Catalog</Link></li>
              <li><Link href="/s-series" className="hover:text-white transition-colors">S Series · Saflor® Recess</Link></li>
              <li><Link href="/f-series" className="hover:text-white transition-colors">F Series · AcrylX™ RTM</Link></li>
              <li><Link href="/t-series" className="hover:text-white transition-colors">T Series · Terrazzo</Link></li>
              <li><Link href="/barrier-free" className="hover:text-white transition-colors">ADA &amp; Barrier-Free</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Mop Sinks &amp; Utility</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Bathtubs &amp; Tub-Showers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-[0.14em] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources" className="hover:text-white transition-colors">Spec Sheets &amp; CAD</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Installation Guides</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">ADA Documentation</Link></li>
              <li><Link href="/why-florestone" className="hover:text-white transition-colors">Codes &amp; Credentials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-[0.14em] mb-4">Company</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/why-florestone" className="hover:text-white transition-colors">Our Story · Since 1947</Link></li>
              <li><Link href="/find-a-dealer" className="hover:text-white transition-colors">Find a Wholesaler</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-[0.14em] mb-3">Sales Line</h4>
            <p className="font-mono text-sm text-white">(800) 446-2647</p>
            <p className="text-xs text-white/40 mt-1">Mon–Fri · 7am–5pm PT</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Florestone Products, Inc. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider">Madera, CA · Denison, TX · Made in USA</p>
        </div>
      </div>
    </footer>
  );
}
