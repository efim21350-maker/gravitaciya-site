import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import {
  keyObjects,
  portfolioExactTotal,
  registry,
  registryFoot,
  setlCard,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Объекты',
  description:
    'Ключевые объекты и реестр договоров ООО «Гравитация»: заказчики, виды работ, номера договоров, периоды и суммы.',
};

export default function ObjectsPage() {
  return (
    <>
      <PageHeader
        index="02"
        kicker="Объекты"
        title="Объекты и реестр"
        lede="29 объектов в Санкт-Петербурге, Ленобласти и на Северо-Западе."
      />
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">01</p>
            <h2>Ключевые объекты</h2>
          </div>
          <div className="key-list">
            {keyObjects.map((item) => (
              <article className="key" id={item.id} key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p className="customer">{item.customer}</p>
                  <p className="desc">{item.description}</p>
                  <p className="tags">{item.tags}</p>
                </div>
                <div className="key-side">
                  <p className="amount">{item.amount}</p>
                  <p className="period">{item.period}</p>
                  <p className="contract">{item.contract}</p>
                </div>
              </article>
            ))}
          </div>

          <article className="setl-row" id={setlCard.id}>
            <div>
              <h3>{setlCard.title}</h3>
              {/* В карточке PDF заполнены только название и сумма. */}
              <p className="setl-note">
                В карточке портфолио указаны название и сумма. Площадки, виды работ, договор и период — в строке реестра.
              </p>
            </div>
            <p className="amount">{setlCard.amount}</p>
          </article>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <p className="index-no">02</p>
            <h2>Реестр объектов</h2>
          </div>
          <div className="table-wrap" id="reestr">
            <table className="reg">
              <caption className="sr-only">Реестр объектов ООО «Гравитация»</caption>
              <thead>
                <tr>
                  <th scope="col">Объект</th>
                  <th scope="col">Заказчик</th>
                  <th scope="col">Виды работ</th>
                  <th scope="col">Договор</th>
                  <th scope="col">Период</th>
                  <th scope="col" className="numcol">
                    Сумма
                  </th>
                </tr>
              </thead>
              <tbody>
                {registry.map((row) => (
                  <tr key={row.id} id={row.id.startsWith('reg-') ? row.id : undefined}>
                    <td>{row.object}</td>
                    <td>{row.customer}</td>
                    <td>{row.works}</td>
                    <td>{row.contract}</td>
                    <td>{row.period}</td>
                    <td className="numcol">
                      <span className="sum-label">{row.sumLabel}</span>
                      <span className="sum-exact">{row.sumExact}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="foot-note">{registryFoot}</p>
          <p className="foot-note">
            В портфолио портфель указан как 207,0 млн ₽. Сумма чисел реестра в исходнике — {portfolioExactTotal}.
          </p>
        </div>
      </section>
    </>
  );
}
