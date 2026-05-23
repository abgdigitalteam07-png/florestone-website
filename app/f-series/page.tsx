import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['f-series'].metaTitle,
  description: SERIES['f-series'].metaDescription,
};

export default function FSeriesPage() {
  return <SeriesPage series={SERIES['f-series']} />;
}
