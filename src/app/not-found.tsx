import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>Такой страницы нет</h1>
        <p>Адрес не совпадает ни с одним разделом сайта.</p>
        <p>
          <Link href="/">На главную</Link>
        </p>
      </div>
    </section>
  );
}
