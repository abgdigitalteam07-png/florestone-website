import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['t-series'].metaTitle,
  description: SERIES['t-series'].metaDescription,
};

export default function TSeriesPage() {
  return <SeriesPage series={SERIES['t-series']} />;
}
