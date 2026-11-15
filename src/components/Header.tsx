'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { company } from '@/lib/content';
import { nav } from '@/lib/site';

function current(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const target = href.replace(/\/$/, '') || '/';
  return path === target;
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/">
          <img src="/brand/mark.png" width={960} height={467} alt="" />
          <span>
            <span className="brand-name">{company.wordmark}</span>
            <span className="brand-meta">{company.city}</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Разделы">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
