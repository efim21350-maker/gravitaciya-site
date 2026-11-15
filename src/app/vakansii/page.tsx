import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Вакансии',
  description: 'Раздел скоро появится.',
};

export default function VacanciesPage() {
  return <PageHeader index="03" kicker="Вакансии" title="Вакансии" lede="Раздел скоро появится." />;
}
