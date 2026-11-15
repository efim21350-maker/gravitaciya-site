import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import { company } from '@/lib/content';

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
                <div className="vacancy-actions">
                  <Link className="apply" href="/kontakty/#obratnaya-svyaz">
                    Откликнуться
                  </Link>
                  <p>
                    или напишите на <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
