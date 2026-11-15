import type { NextConfig } from 'next';

import { publicOrigin } from './src/lib/site';

/**
 * Статический экспорт: output export, trailingSlash, картинки без оптимизатора.
 * Абсолютные адреса в sitemap попадают в выгрузку только при NEXT_PUBLIC_SITE_ORIGIN.
 */
if (!publicOrigin()) {
  console.warn(
    'NEXT_PUBLIC_SITE_ORIGIN не задан: sitemap, robots.txt и JSON-LD соберутся без абсолютного адреса. Для публикации задайте публичный origin, не localhost.',
  );
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
