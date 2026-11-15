import type { MetadataRoute } from 'next';

import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/raboty/', priority: 0.8 },
  { path: '/obekty/', priority: 0.8 },
  { path: '/kompaniya/', priority: 0.7 },
  { path: '/kontakty/', priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.origin.replace(/\/$/, '');

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
