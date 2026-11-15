import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import { company, missingContacts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'ИНН, город и производственная база ООО «Гравитация». Телефон, почта и юридический адрес в портфолио не указаны.',
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        index="04"
        kicker="Контакты"
        title="Контакты"
      />
      <section className="section">
        <div className="wrap">
          <h2>Что указано</h2>
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

          <h2 className="later">Нет в портфолио</h2>
          <dl className="spec">
            {missingContacts.map((item) => (
              <div className="spec-row todo" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
