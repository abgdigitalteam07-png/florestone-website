import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['s-series'].metaTitle,
  description: SERIES['s-series'].metaDescription,
  keywords: ['S Series shower base', 'recess shower receptor', 'Wedge-Lok drain', 'compression molded shower pan', 'Florestone S Series', 'shower base contractor'],
  openGraph: {
    title: SERIES['s-series'].metaTitle,
    description: SERIES['s-series'].metaDescription,
    url: 'https://www.florestone.com/s-series',
    siteName: 'Florestone',
    images: [{ url: 'https://www.florestone.com/images/bases/saflor/lifestyle/florestone-saflor-3660-1-base-wht-shot01-deco-w.jpg', width: 1200, height: 900, alt: 'Florestone Saflor S Series recess shower base' }],
    type: 'website',
  },
};

export default function SSeriesPage() {
  return <SeriesPage series={SERIES['s-series']} />;
}
