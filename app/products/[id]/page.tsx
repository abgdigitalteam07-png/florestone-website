import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { SYNCED_PRODUCTS, getProductById, getProductDetail } from '../products-data';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return SYNCED_PRODUCTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product not found — Florestone' };
  return {
    title: `${product.name} — ${product.series} · Florestone`,
    description: `${product.name}. ${product.type}, ${product.size}. ${product.series} from Florestone — USA-made bath fixtures since 1947. Spec sheet, CAD, and dealer locator available.`,
    openGraph: {
      title: `${product.name} — Florestone`,
      description: `${product.type} · ${product.size} · ${product.series}`,
      type: 'website',
      url: `https://www.florestone.com/products/${product.id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const detail = getProductDetail(product);

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: 'https://www.florestone.com/' },
    { name: 'Products', url: 'https://www.florestone.com/products' },
    { name: product.series, url: `https://www.florestone.com/products?series=${encodeURIComponent(product.series)}` },
    { name: product.name, url: `https://www.florestone.com/products/${product.id}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: detail.sku,
    model: detail.modelNumber,
    category: product.category,
    brand: { '@type': 'Brand', name: 'Florestone' },
    image: detail.gallery.map(g => `https://www.florestone.com${g}`),
    description: `${product.name} — ${product.type}, ${product.size}. ${product.series} by Florestone.`,
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={productSchema} />
      <Navbar activePage="/products" />
      <ProductDetailClient product={product} detail={detail} />
      <Footer />
    </>
  );
}
