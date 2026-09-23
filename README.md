# Nekora — TANEM

Независимая версия сайта Людмилы Некоры. Исходный репозиторий `ichAEY/lyudmila-nekora` не изменяется. Здесь оставлены исходники, необходимые изображения, тесты и один GitHub Pages workflow — без старого `CNAME` и двух отдельных сборок.

## Публикация

1. В [Settings → Pages](https://github.com/ichAEY/Nekora/settings/pages) выберите **Source: GitHub Actions**. Без этого pipeline **явно завершается ошибкой** вместо ложного статуса Success без публикации.
2. Перейдите в [Actions](https://github.com/ichAEY/Nekora/actions/workflows/pages.yml) и запустите **Run workflow** для `main`.
3. Пока пользовательский домен не задан, сайт публикуется по адресу `https://ichaey.github.io/Nekora/` и использует префикс `/Nekora`.

## Как подключить собственный домен

1. Сначала добавьте выбранный домен в **Settings → Pages → Custom domain**. Не используйте адрес, который ещё назначен другому Pages-репозиторию: сначала подготовьте перенос на отдельном домене или спланируйте переключение.
2. Для выбранного субдомена в DNS создайте единственную соответствующую запись **CNAME → ichaey.github.io** (без `/Nekora`). Уберите противоречащие `A`, `AAAA`, `ALIAS` или дополнительные `CNAME` для **этого же имени**. Не удаляйте общие записи `tanem.ru` или чужих сайтов.
3. Pipeline автоматически прочитает домен из GitHub Pages API, соберёт сайт **без** префикса `/Nekora` и укажет верный HTTPS canonical URL. Отдельно редактировать код и добавлять файл `CNAME` не требуется.
4. Проверьте DNS в Settings → Pages. Когда GitHub выдаст сертификат, включите **Enforce HTTPS**. Если после исправления DNS сертификат не создаётся, GitHub рекомендует удалить и повторно добавить Custom domain, чтобы перезапустить проверку.

**Важно:** корректная сборка сама не выдаёт TLS-сертификат. DNS-записи, права на домен и HTTPS на стороне GitHub проверяются отдельно; не переключайте основной адрес, пока новая публикация не проверена.

[GitHub: custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) · [GitHub: HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
