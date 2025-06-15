const { frameworks, tools, tech, languages } = require('./knowledge.js')
const { coursesList } = require('./courses.js')
const projects = require('./projects.js')
const fs = require('fs')

function renderIcons(array) {
  return array
    .map(item => `<img src='${item.icon}' alt='${item.name}' width='30px' height='30px' style='margin: 2px;'>`)
    .join('')
}

function generateMarkdownFile() {
  let projectsTable = ''
  for (const project of projects) {
    const projectRow = `
        <tr>
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
        </tr>
`
    projectsTable += projectRow.trim()
  }

  let coursesTable = `
<tr>
<th>Сайт</th>
<th>Курс</th>
<th>Дата</th>
</tr>
`

  for (const course of coursesList) {
    const courseRow = `
<tr>
<td>${course['Сайт']}</td>
<td>${course['Курс']}</td>
<td>${course['Дата']}</td>
</tr>
`
    coursesTable += courseRow.trim()
  }

  const markdownContent = `
## Привет, меня зовут Сергей!

##### О себе:

Привет, я Сергей — опытный full-stack DevOps-разработчик.

В IT начал со школы, продолжил в академии. Прошёл углублённое обучение по Vue.js и React, изучаю и применяю современные архитектурные подходы.

⚙️ Комбинирую frontend и backend, проектирую масштабируемые приложения, опираясь на:

\`Feature-Sliced Design (FSD)\` \`Принципы SOLID и ООП\` \`Чистый код и модульность\`

⚡ Анализирую архитектуры, подбираю оптимальные решения под задачи бизнеса.

##### Цели и задачи:

- ⚡️ Легко обучаем, любая технология до 2-х недель.
- 🔎 Использую лучшие практики и придерживаюсь принципов Чистого кода.
- ✉️ Связаться со мной: [![Telegram Badge](https://img.shields.io/badge/-i5anin-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/i5anin) [![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat&logo=Gmail&logoColor=white)](mailto:isanin.pro@gmail.com)


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

  fs.writeFileSync('README.md', markdownContent, 'utf-8')
}

generateMarkdownFile()
