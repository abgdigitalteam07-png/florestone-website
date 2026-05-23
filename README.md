# Florestone

Marketing site for Florestone — American Bath Group's contractor-spec shower base and bath fixture brand. Built in California, manufactured in the USA since 1969.

Built with Next.js 16, React 19, Tailwind v4. Mirrors the structure of `/Users/mali/projects/california-cooperage`.

## Development

```bash
npm install
npm run dev
```

## Project Structure

```
app/
  layout.tsx              # Root layout + fonts + metadata
  page.tsx                # Home
  products/page.tsx       # Catalog (all series)
  s-series/page.tsx       # S Series detail
  f-series/page.tsx       # F Series detail
  t-series/page.tsx       # T Series detail
  barrier-free/page.tsx   # Barrier-Free (ADA) detail
  find-a-dealer/page.tsx
  resources/page.tsx
  contact/page.tsx
  why-florestone/page.tsx
  api/contact/route.ts    # Dealer-inquiry POST handler
components/
  layout/Navbar.tsx
  layout/Footer.tsx
  product/SeriesPage.tsx  # Shared series detail template
  product/CompareBar.tsx
  shared/CTABand.tsx
  shared/DealerForm.tsx
  shared/TrustBar.tsx
  ui/FAQAccordion.tsx
lib/
  products.ts             # Series + spec + FAQ registry
prototype/
  florestone-mobile.html  # Original single-file design
```
