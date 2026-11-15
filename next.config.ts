import type { NextConfig } from 'next';

/**
 * Статический экспорт: те же технические флаги, что нужны для выкладки
 * папки out/ (output export, trailingSlash, картинки без оптимизатора).
 */
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
