<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Florestone

Florestone is American Bath Group's contractor-spec shower base and bath fixture brand (est. 1969, manufactured in the USA). This site is a marketing site for contractors, architects, and facility managers.

Sister site reference: `/Users/mali/projects/california-cooperage`. Same Next 16 + Tailwind v4 + React 19 stack and component conventions.

The original single-file prototype is preserved at `prototype/florestone-mobile.html`.

## Stack
- Next.js 16.2.6 (App Router)
- React 19.2.4
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- TypeScript strict
- Deployment target: emergent.sh / Vercel

## Conventions
- Use the same Navbar / Footer / CTABand / FAQAccordion / DealerForm patterns as california-cooperage.
- Per-series product pages render via the shared `components/product/SeriesPage.tsx` driven by `lib/products.ts`.
- All real product imagery lives in `public/images/`. The single live HubSpot hero image is allow-listed in `next.config.ts`.
