import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import { coverSubtitle, cycleStages, services, turnkeyParagraphs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Работы',
  description:
    'Комплексное благоустройство, дороги и проезды, земляные и общестроительные работы, подготовка и обустройство площадок.',
};

export default function WorksPage() {
  return (
    <>
      <PageHeader index="01" kicker="Работы" title="Что мы делаем" lede={coverSubtitle} />
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
          <div className="cycle-lead">
            {turnkeyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="cycle">
            {cycleStages.map((stage) => (
              <article key={stage.num}>
                <h3>
                  <span className="num">{stage.num}</span> {stage.title}
                </h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
