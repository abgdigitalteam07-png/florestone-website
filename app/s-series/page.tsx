import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['s-series'].metaTitle,
  description: SERIES['s-series'].metaDescription,
};

export default function SSeriesPage() {
  return <SeriesPage series={SERIES['s-series']} />;
}
