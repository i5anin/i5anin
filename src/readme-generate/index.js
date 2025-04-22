const { frameworks, tools, tech, languages } = require('./knowledge.js')
const { coursesList } = require('./courses.js')
const projects = require('./projects.js')

const fs = require('fs')

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

  let techIcons = ''
  for (const technology of tech) {
    const technologyIcon = `
       <img src='${technology.icon}' alt='${technology.name}' width='30px' height='30px'>
`
    techIcons += technologyIcon.trim()
  }

  let toolsIcons = ''
  for (const tool of tools) {
    const toolIcon = `
       <img src='${tool.icon}' alt='${tool.name}' width='30px' height='30px'>
`
    toolsIcons += toolIcon.trim()
  }

  let frameworksIcons = ''
  for (const framework of frameworks) {
    const frameworkIcon = `
       <img src='${framework.icon}' alt='${framework.name}' width='30px' height='30px'>
`
    frameworksIcons += frameworkIcon.trim()
  }

  let languagesIcons = ''
  for (const language of languages) {
    const languageIcons = `
       <img src='${language.icon}' alt='${language.name}' width='30px' height='30px'>
`
    languagesIcons += languageIcons.trim()
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

#### Фреймворки, Технологии, Инструменты, Языки
<table>
  <tr>
    <th width='280px'>Фреймворки</th>
    <th  width='280px'>Технологии</th>
  </tr>
  <tr>
    <td>
      <div style="display: flex; flex-wrap: wrap;">
        ${frameworksIcons}
      </div>
    </td>
    <td>
      <div style="display: flex; flex-wrap: wrap;">
        ${techIcons}
      </div>
    </td>
  </tr>
  <tr>
    <th  width='280px'>Инструменты</th>
    <th  width='280px'>Языки</th>
  </tr>
  <tr>
    <td>
      <div style="display: flex; flex-wrap: wrap;">
        ${toolsIcons}
      </div>
    </td>
    <td>
      <div style="display: flex; flex-wrap: wrap;">
         ${languagesIcons}
      </div>
    </td>
  </tr>
</table>


#### Мои проекты
<table>
${projectsTable}
</table>

<img src='https://wakatime.com/share/@PizZzA/45b438ae-a22d-4d27-a746-2bc9c9dc7b53.svg' width='655'>

#### Пройденные курсы

<table>
${coursesTable}
</table>



`

  const generatedMarkdownContent = markdownContent
    .replace('${projectsTable}', projectsTable)
    .replace('${coursesTable}', coursesTable)

    .replace('${techIcons}', techIcons)
    .replace('${toolsIcons}', toolsIcons)
    .replace('${languagesIcons}', languagesIcons)
    .replace('${frameworksIcons}', frameworksIcons)

  fs.writeFileSync('README.md', generatedMarkdownContent, 'utf-8')
}

generateMarkdownFile()
