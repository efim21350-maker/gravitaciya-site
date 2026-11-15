import Link from 'next/link';

import { company } from '@/lib/content';
import { nav } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="logo-plate">
          <img src="/brand/logo.png" width={880} height={616} alt="ООО «Гравитация»" />
        </div>
        <div>
          <p className="footer-kicker">Документы</p>
          <p>ИНН {company.inn}</p>
          <p>
            Член {company.sroName} ({company.sroId}), рег. № {company.sroReg}, {company.sroLevel}
          </p>
        </div>
        <div>
          <p className="footer-kicker">База</p>
          <p>Производственная база: {company.base}</p>
          <p>{company.city}</p>
        </div>
        <nav className="footer-nav" aria-label="Разделы в подвале">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-bottom">{company.coverLine}</div>
    </footer>
  );
}
