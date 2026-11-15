# ООО «Гравитация»

Сайт подрядной организации. Тексты и цифры взяты из портфолио v3, без выдуманных контактов и отзывов.

```bash
npm install
npm run build
```

Статика собирается в `out/` (`output: 'export'`, `trailingSlash`, `images.unoptimized`).

Публичного домена в материалах нет, поэтому обычная сборка не пишет абсолютные адреса в `sitemap.xml`, `robots.txt` и JSON-LD. Перед выкладкой на хост задайте его явно — не `localhost`:

```bash
NEXT_PUBLIC_SITE_ORIGIN=https://example.ru npm run build
```
