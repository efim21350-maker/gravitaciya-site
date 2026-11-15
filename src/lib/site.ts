/**
 * Публичный адрес сайта. В портфолио домена нет, поэтому подставлять
 * localhost в статическую выгрузку нельзя: sitemap и robots уедут на хостинг как есть.
 * Для публикации: NEXT_PUBLIC_SITE_ORIGIN=https://example.ru npm run build
 */
export function publicOrigin(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim();
  if (!raw) return undefined;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error('NEXT_PUBLIC_SITE_ORIGIN должен быть абсолютным адресом, например https://example.ru');
  }

  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new Error('NEXT_PUBLIC_SITE_ORIGIN должен начинаться с http:// или https://');
  }

  const host = url.hostname.replace(/^\[|\]$/g, '').toLowerCase();
  if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1') {
    throw new Error(
      'NEXT_PUBLIC_SITE_ORIGIN не может указывать на localhost: этот адрес попадёт в sitemap, robots.txt и разметку.',
    );
  }

  return url.origin;
}

export const SITE = {
  name: 'Гравитация',
  trailingSlash: true,
  title: 'Гравитация — благоустройство, дороги, земляные и подготовительные работы',
  description:
    'Подрядная организация с 2021 года: благоустройство, дорожное строительство, земляные работы и подготовка территории в Санкт-Петербурге, Ленинградской области и на Северо-Западе.',
} as const;

export const nav = [
  { href: '/raboty', label: 'Работы' },
  { href: '/kompaniya', label: 'Компания' },
  { href: '/vakansii', label: 'Вакансии' },
  { href: '/kontakty', label: 'Контакты' },
] as const;
