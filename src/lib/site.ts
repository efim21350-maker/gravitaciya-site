const originFromEnv = () => {
  if (process.env.NEXT_PUBLIC_SITE_ORIGIN) return process.env.NEXT_PUBLIC_SITE_ORIGIN;
  return 'http://localhost:3000';
};

export const SITE = {
  name: 'ООО «Гравитация»',
  origin: originFromEnv(),
  trailingSlash: true,
  title: 'ООО «Гравитация» — благоустройство, дороги, земляные и подготовительные работы',
  description:
    'Подрядная организация с 2021 года: благоустройство, дорожное строительство, земляные работы и подготовка территории в Санкт-Петербурге, Ленинградской области и на Северо-Западе.',
} as const;

export const nav = [
  { href: '/raboty', label: 'Работы' },
  { href: '/obekty', label: 'Объекты' },
  { href: '/kompaniya', label: 'Компания' },
  { href: '/kontakty', label: 'Контакты' },
] as const;
