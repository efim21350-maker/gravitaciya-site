import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, Sofia_Sans_Condensed } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { company } from '@/lib/content';
import { publicOrigin, SITE } from '@/lib/site';

import './globals.css';

const display = Sofia_Sans_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700'],
  variable: '--font-sofia',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000E69',
};

const origin = publicOrigin();

export const metadata: Metadata = {
  ...(origin ? { metadataBase: new URL(origin) } : {}),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    locale: 'ru_RU',
    siteName: SITE.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.shortName,
    taxID: company.inn,
    ...(origin ? { url: origin } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city,
      addressCountry: 'RU',
    },
  };

  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="watermark" aria-hidden="true">
          <span>Гравитация</span>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="skip" href="#main">
          К содержанию
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
