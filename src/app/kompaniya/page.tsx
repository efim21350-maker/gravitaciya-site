import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import {
  aboutFoot,
  aboutLead,
  company,
  equipment,
  resourceFoot,
  staff,
  stats,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Компания',
  description: aboutLead,
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader index="03" kicker="Компания" title="О компании" lede={aboutLead} />
      <section className="stats" aria-label="Цифры портфеля">
        <div className="wrap stats-grid">
          {stats.map((item) => (
            <div className="stat" key={item.num}>
              <div className="stat-num">{item.num}</div>
              <div className="stat-unit">{item.unit}</div>
              <p className="stat-cap">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">01</p>
            <h2>Допуск и реквизиты</h2>
          </div>
          <dl className="spec">
            <div className="spec-row">
              <dt>Наименование</dt>
              <dd>{company.shortName}</dd>
            </div>
            <div className="spec-row">
              <dt>ИНН</dt>
              <dd>{company.inn}</dd>
            </div>
            <div className="spec-row">
              <dt>СРО</dt>
              <dd>
                {company.sroName} ({company.sroId}), рег. № {company.sroReg}, {company.sroLevel}
              </dd>
            </div>
            <div className="spec-row">
              <dt>Производственная база</dt>
              <dd>{company.base}</dd>
            </div>
            <div className="spec-row">
              <dt>Город</dt>
              <dd>{company.city}</dd>
            </div>
          </dl>
          <p className="foot-note">{aboutFoot}</p>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">02</p>
            <h2>Производственный ресурс</h2>
          </div>
          <div className="res-grid">
            <article className="res-box">
              <h3>Кадры</h3>
              <ul>
                {staff.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="res-box">
              <h3>Техника и допуски</h3>
              <ul>
                {equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="foot-note">{resourceFoot}</p>
        </div>
      </section>
    </>
  );
}
