import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import { company } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Город, производственная база и ИНН ООО «Гравитация».',
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader index="04" kicker="Контакты" title="Контакты" />
      <section className="section">
        <div className="wrap">
          <dl className="spec">
            <div className="spec-row">
              <dt>Организация</dt>
              <dd>{company.shortName}</dd>
            </div>
            <div className="spec-row">
              <dt>ИНН</dt>
              <dd>{company.inn}</dd>
            </div>
            <div className="spec-row">
              <dt>Город</dt>
              <dd>{company.city}</dd>
            </div>
            <div className="spec-row">
              <dt>Производственная база</dt>
              <dd>{company.base}</dd>
            </div>
            <div className="spec-row">
              <dt>СРО</dt>
              <dd>
                {company.sroName} ({company.sroId}), рег. № {company.sroReg}, {company.sroLevel}
              </dd>
            </div>
          </dl>

          <h2 className="later" id="obratnaya-svyaz">
            Обратная связь
          </h2>
          <p className="feedback-line">Напишите нам — ответим.</p>
          <dl className="spec">
            <div className="spec-row">
              <dt>Почта</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
