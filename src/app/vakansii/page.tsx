import type { Metadata } from 'next';
import Link from 'next/link';

import PageHeader from '@/components/PageHeader';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Наши вакансии',
  description: 'Требуется производитель работ.',
};

export default function VacanciesPage() {
  return (
    <>
      <PageHeader index="03" kicker="Вакансии" title="Наши вакансии" />
      <section className="section">
        <div className="wrap">
          <div className="vacancy-list">
            <article className="vacancy">
              <h2>Производитель работ</h2>
              <div className="vacancy-actions">
                <Link className="apply" href="/kontakty/#obratnaya-svyaz">
                  Откликнуться
                </Link>
                <p>
                  или напишите нам на почту <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
