const path = require('path')
const fs = require('fs')
const { frameworks, tools, tech, languages } = require('./knowledge.js')
const projects = require('./projects.js')

function renderIcons(array) {
  return array
    .map(
      item =>
        `<img src='${item.icon}' alt='${item.name}' width='30px' height='30px' style='margin: 2px;'>`
    )
    .join('')
}

function renderProjectRow(project) {
  return `<tr>
    <td width='320px'>
        <a href='${project.demo_link}' title='Просмотр демо-версии ${project.title}'>
            <img src='${project.image_src}' width='300px'>
        </a>
    </td>
    <td>
        <h3><a href='${project.repository_link}' title='Открыть репозиторий'>${project.title}</a></h3>
        <p>${project.description}</p>
        <p>${project.technologies}</p>
    </td>
</tr>`
}

function generateMarkdownFile() {
  const projectsTable = projects.map(renderProjectRow).join('\n')

  const markdownContent = `
## Hi, I'm Sergey 👋

Frontend/full-stack developer — Vue 3 / Nuxt 3 SPAs, architecturally
complex UI platforms, Node.js / NestJS backends.

I care about maintainable code (SOLID, DRY, KISS, Feature-Sliced Design),
test coverage, and using AI tooling (Claude Code, Cursor, Copilot) to move
faster without cutting corners.

- 🔭 Currently building CRM and internal tools on Vue 3 + NestJS + Supabase
- 🌱 Exploring AI-assisted development workflows
- 📫 Contact: [![Telegram Badge](https://img.shields.io/badge/-i5anin-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/i5anin) [![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat&logo=Gmail&logoColor=white)](mailto:isanin.pro@gmail.com)

<details>
<summary><strong>Русский</strong></summary>

## Привет, я Сергей 👋

Frontend/full-stack разработчик — SPA на Vue 3 / Nuxt 3, архитектурно
сложные UI-платформы, backend на Node.js / NestJS.

Слежу за поддерживаемостью кода (SOLID, DRY, KISS, Feature-Sliced Design),
пишу тесты, использую AI-инструменты (Claude Code, Cursor, Copilot) для
ускорения разработки без потери качества.

- 🔭 Сейчас: CRM и внутренние инструменты на Vue 3 + NestJS + Supabase
- 🌱 Изучаю AI-workflow в разработке
- 📫 Связь: Telegram и Gmail — см. выше

</details>


#### **Стек знаний:**
<p>
  ${renderIcons(frameworks)}
  ${renderIcons(tech)}
  ${renderIcons(tools)}
  ${renderIcons(languages)}
</p>



<details>
  <summary><strong>🧩 Мои проекты</strong></summary>

  <table>
    ${projectsTable}
  </table>

</details>

<img src='https://wakatime.com/share/@PizZzA/45b438ae-a22d-4d27-a746-2bc9c9dc7b53.svg' width='655'>
`

  const outputPath = path.resolve(__dirname, '../../README.md')
  fs.writeFileSync(outputPath, markdownContent, 'utf-8')
}

generateMarkdownFile()
