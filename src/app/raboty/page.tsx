import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import { coverSubtitle, services, steps, turnkeyFoot, turnkeyLead } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Работы',
  description:
    'Комплексное благоустройство, дороги и проезды, земляные и общестроительные работы, подготовка и обустройство площадок.',
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        index="01"
        kicker="Работы"
        title="Что мы делаем"
        lede={coverSubtitle}
      />
      <section className="section">
        <div className="wrap">
          <div className="rule-list">
            {services.map((item) => (
              <article className="service-row" id={item.id} key={item.id}>
                <span className="num">{item.num}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section paper" id="cikl">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">02</p>
            <h2>Объект под ключ</h2>
          </div>
          <p className="section-lead block-lead">{turnkeyLead}</p>
          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="foot-note">{turnkeyFoot}</p>
        </div>
      </section>
    </>
  );
}
