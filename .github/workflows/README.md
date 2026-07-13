# Как это работает

Профильный README больше не собирается кастомным Node-скриптом —
он статичный markdown-файл, который редактируется руками.
Единственная динамическая часть — блок «Activity» — рендерится
[`lowlighter/metrics`](https://github.com/lowlighter/metrics) в GitHub
Actions и коммитится обратно в репозиторий.

## Что нужно один раз настроить

1. Actions включены по умолчанию для публичного репозитория —
   ничего делать не нужно.
2. `secrets.GITHUB_TOKEN` хватает для базовых плагинов (`header`,
   `activity`, `community`, `repositories`, `isocalendar`, `languages`
   по публичным репозиториям).
3. Если нужна статистика по приватным репозиториям или расширенные
   плагины — создать Personal Access Token (`repo`, `read:user`) и
   добавить его в `Settings → Secrets and variables → Actions` под
   именем `METRICS_TOKEN`. Workflow сам подхватит его через
   `secrets.METRICS_TOKEN || secrets.GITHUB_TOKEN`.

## Ручной запуск

`Actions → metrics → Run workflow` — или дождаться ежедневного cron
(`03:00 UTC`) / ближайшего push в `main`.

## Шаблон для другого репозитория

1. Скопировать `.github/workflows/metrics.yml`.
2. Поменять пути `filename` под свой `public/`-каталог (или убрать
   dark-вариант, если тема профиля не нужна).
3. В README подключить картинку через `<picture>` с
   `prefers-color-scheme`, как в этом репозитории — см. `README.md`.
