import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['barrier-free'].metaTitle,
  description: SERIES['barrier-free'].metaDescription,
  keywords: ['ADA shower base', 'barrier free shower', 'curbless shower', 'roll-in shower', 'ADA compliant shower pan', 'Florestone ADA', 'accessible shower'],
  openGraph: {
    title: SERIES['barrier-free'].metaTitle,
    description: SERIES['barrier-free'].metaDescription,
    url: 'https://www.florestone.com/barrier-free',
    siteName: 'Florestone',
    images: [{ url: 'https://www.florestone.com/images/ada/3562h/3562h-ada-deco.jpg', width: 1200, height: 900 }],
    type: 'website',
  },
};

export default function BarrierFreePage() {
  return <SeriesPage series={SERIES['barrier-free']} />;
}
