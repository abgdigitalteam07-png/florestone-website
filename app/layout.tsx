import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Florestone | Made for the Trade — Shower Bases, ADA Units & Bath Solutions',
  description:
    'Florestone manufactures shower bases, ADA barrier-free units, terrazzo mop sinks and complete bath solutions in the USA. Spec sheets, CAD files, and a nationwide dealer network for contractors, architects, and builders.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.florestone.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
