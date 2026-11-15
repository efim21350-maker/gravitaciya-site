import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';

const vacancies = ['Требуется ИТР', 'Требуется производитель работ'] as const;

export const metadata: Metadata = {
  title: 'Наши вакансии',
  description: 'Требуется ИТР. Требуется производитель работ.',
};

export default function VacanciesPage() {
  return (
    <>
      <PageHeader index="03" kicker="Вакансии" title="Наши вакансии" />
      <section className="section">
        <div className="wrap">
          <div className="vacancy-list">
            {vacancies.map((title) => (
              <article className="vacancy" key={title}>
                <h2>{title}</h2>
                <Link className="apply" href="/kontakty/#obratnaya-svyaz">
                  Откликнуться
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
