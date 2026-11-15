import type { MetadataRoute } from 'next';

import { publicOrigin } from '@/lib/site';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1 },
  { path: '/raboty/', priority: 0.8 },
  { path: '/kompaniya/', priority: 0.7 },
  { path: '/vakansii/', priority: 0.4 },
  { path: '/kontakty/', priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = publicOrigin();
  if (!origin) return [];

  return routes.map((route) => ({
    url: `${origin}${route.path}`,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
