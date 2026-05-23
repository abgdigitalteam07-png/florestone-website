import type { Metadata } from 'next';
import { SERIES } from '@/lib/products';
import SeriesPage from '@/components/product/SeriesPage';

export const metadata: Metadata = {
  title: SERIES['barrier-free'].metaTitle,
  description: SERIES['barrier-free'].metaDescription,
};

export default function BarrierFreePage() {
  return <SeriesPage series={SERIES['barrier-free']} />;
}
