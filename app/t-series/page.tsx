import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['t-series'].metaTitle,
  description: SERIES['t-series'].metaDescription,
  keywords: ['terrazzo shower base', 'cast terrazzo shower pan', 'T Series Florestone', 'Model 400 terrazzo', 'Model 500 terrazzo', 'commercial shower base'],
  openGraph: {
    title: SERIES['t-series'].metaTitle,
    description: SERIES['t-series'].metaDescription,
    url: 'https://www.florestone.com/t-series',
    siteName: 'Florestone',
    images: [{ url: 'https://www.florestone.com/images/bases/terrazzo/jpg/florestone-model-300-6032-water-deco.jpg', width: 1200, height: 900 }],
    type: 'website',
  },
};

export default function TSeriesPage() {
  return <SeriesPage series={SERIES['t-series']} />;
}
