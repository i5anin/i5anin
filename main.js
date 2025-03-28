const { frameworks, tools, tech, languages } = require('./src/javascript/knowledge.js')
const { coursesList } = require('./src/javascript/courses.js')
const projects = require('./src/javascript/projects.js')

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

Я — опытный full-stack разработчик <img src='https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif' width='28px'>, начавший формировать свои знания и опыт ещё со школьных лет и в академии. Свой путь в IT укрепил 7-месячными курсами по Vue.js, где изучил современные подходы к фронтенд-разработке. 

За более чем три года работы в IT я уверенно комбинирую навыки фронтенда и бэкенда, создавая качественные проекты и решая сложные задачи.

<img src='https://wakatime.com/share/@PizZzA/45b438ae-a22d-4d27-a746-2bc9c9dc7b53.svg' width='655'>


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

#### Пройденные курсы

<table>
${coursesTable}
</table>

#### Статистика
<img src='https://wakatime.com/share/@PizZzA/c2f9a9da-83d1-40e2-9ee1-2a0a255b9a00.svg' width='600'>\
<img src='https://wakatime.com/share/@PizZzA/54c18525-8ad1-4ff3-80c5-62f71b0c7916.svg' width='600'>\


###### код для \`markdown\` сгенерирован на JavaScript \`node main.js\`
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
