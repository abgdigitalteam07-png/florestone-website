import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jb-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Florestone | Family-Built Shower Bases, ADA Units & Terrazzo Mop Sinks Since 1947',
  description:
    'Florestone is a three-generation family business founded in 1947 by Ray and Ann Flores. Saflor® recess shower bases, F Series RTM fiberglass with AcrylX™, T Series cast terrazzo, ADA barrier-free, terrazzo mop sinks and bathtubs — manufactured in Madera, CA and Denison, TX.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.florestone.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${jbMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
