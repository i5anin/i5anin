# pre-commit: держим README в синхроне

## Что делает

Перед каждым коммитом хук перегенерирует `README.md` из
`src/readme-generate/*.js` и добавляет результат в коммит.
Ручные правки `README.md` больше не нужны и не переживут коммит —
редактировать нужно шаблон в `src/readme-generate/index.js`.

## Установка (один раз на репозиторий)

```bash
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

Хук не в `.git/hooks/` (не версионируется), а в `.githooks/`
(версионируется) — так он приезжает с `git clone` любому, кто
выполнит команду выше.

## Шаблон для другого репозитория

1. Скопировать `.githooks/pre-commit` в новый репозиторий.
2. Заменить генерацию README на свою команду:

```sh
#!/bin/sh
set -e

# your generate/lint/format command here, e.g.:
npm run build:readme --silent
git add README.md
```

3. Выполнить установку из раздела выше.

## Проверка

```bash
git commit --allow-empty -m "test: pre-commit hook"
git show --stat HEAD   # README.md должен быть в списке файлов
```
