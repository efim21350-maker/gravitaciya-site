import Link from 'next/link';

import {
  aboutLead,
  company,
  coverLead,
  coverSubtitle,
  customers,
  homeHighlights,
  resourceFoot,
  services,
  stats,
  steps,
  trustFoot,
  trustLead,
  turnkeyLead,
} from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Подрядчик и субподрядчик · с {company.sinceYear} года</p>
            <h1>Благоустройство, дороги и земляные работы</h1>
            <p className="lede">{coverLead}</p>
            <p className="scope-line">{coverSubtitle}</p>
          </div>
          <div className="hero-plate">
            <img
              src="/brand/mark.png"
              width={960}
              height={467}
              alt="Знак ООО «Гравитация»: кольцо и труба в траншее"
            />
            <div className="plate-meta">
              <span>Знак</span>
              <span>{company.coverLine}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Цифры портфеля">
        <div className="wrap stats-grid">
          {stats.map((item) => (
            <div className="stat" key={item.unit + item.num}>
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
            <h2>Что мы делаем</h2>
          </div>
          <div className="rule-list">
            {services.map((item) => (
              <Link className="service-row" href={`/raboty/#${item.id}`} key={item.id}>
                <span className="num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">02</p>
            <h2>Нам доверяют</h2>
          </div>
          <p className="section-lead block-lead">{trustLead}</p>
          <div className="cust-grid">
            {customers.map((item) => (
              <article className="cust" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="foot-note">{trustFoot}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">03</p>
            <h2>Ключевые объекты</h2>
          </div>
          <div className="rule-list">
            {homeHighlights.map((item) => (
              <Link className="highlight" href={item.href} key={item.href}>
                <h3>{item.title}</h3>
                <p className="amount">{item.amount}</p>
                <p className="meta">{item.meta}</p>
              </Link>
            ))}
          </div>
          <Link className="more" href="/obekty/#reestr">
            Реестр объектов
          </Link>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">04</p>
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
          <p className="foot-note">
            <Link href="/raboty/#cikl">Состав цикла</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">05</p>
            <h2>О компании</h2>
          </div>
          <p className="section-lead block-lead">{aboutLead}</p>
          <p className="foot-note">{resourceFoot}</p>
          <p className="foot-note">
            <Link href="/kompaniya">Кадры, техника и допуск СРО</Link>
          </p>
        </div>
      </section>
    </>
  );
}
