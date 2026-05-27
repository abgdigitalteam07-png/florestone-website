import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['f-series'].metaTitle,
  description: SERIES['f-series'].metaDescription,
  keywords: ['AcrylX shower base', 'RTM fiberglass shower', 'tub shower unit', 'F Series Florestone', '3-piece shower walls', '6032TS tub shower'],
  openGraph: {
    title: SERIES['f-series'].metaTitle,
    description: SERIES['f-series'].metaDescription,
    url: 'https://www.florestone.com/f-series',
    siteName: 'Florestone',
    images: [{ url: 'https://www.florestone.com/images/bases/f-series/lifestyles/jpg/florestone-f-series-4242f-wht-deco.jpg', width: 1200, height: 900 }],
    type: 'website',
  },
};

export default function FSeriesPage() {
  return <SeriesPage series={SERIES['f-series']} />;
}
