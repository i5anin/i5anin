const { frameworks, tools, tech } = require('./src/javascript/knowledge.js')
const { coursesList } = require('./src/javascript/courses.js')
const projects = require('./src/javascript/projects.js')

const fs = require('fs')

function generateMarkdownFile() {
  let projectsTable = ''
  for (const project of projects) {
    const projectRow = `
        <tr>
            <td width='320px'>
                <a href='${project.demo_link}' title='Просмотр демо-версии'>
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
       <a href='${technology.link}' title='${technology.name}'>
       <img src='${technology.icon}' alt='${technology.name}' width='30px' height='30px'>
       </a>
`
    techIcons += technologyIcon.trim()
  }

  let toolsIcons = ''
  for (const tool of tools) {
    const toolIcon = `
       <a href='${tool.link}' title='${tool.name}'>
       <img src='${tool.icon}' alt='${tool.name}' width='30px' height='30px'>
       </a>
`
    toolsIcons += toolIcon.trim()
  }

  let frameworksIcons = ''
  for (const framework of frameworks) {
    const frameworkIcon = `
       <a href='${framework.link}' title='${framework.name}'>
       <img src='${framework.icon}' alt='${framework.name}' width='30px' height='30px'>
       </a>
`
    frameworksIcons += frameworkIcon.trim()
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

Я веб разработчик<img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="28px">. Мой путь в IT начался ещё со школы и академии. Работал в IT сфере и укрепил свои знания курсами по Vue.js от Skillbox, где проходил 7-месячные курсы.

##### Цели и задачи:

- ⚡️ Ищу интересную работу.
- 🔎 Изучаю веб-разработку и ищу современные решения!
- ✉️ Связаться со мной: [![Telegram Badge](https://img.shields.io/badge/-i5anin-blue?style=flat&logo=Telegram&logoColor=white)](https://t.me/i5anin) [![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat&logo=Gmail&logoColor=white)](mailto:isanin.pro@gmail.com)

#### Фреймворки
<div style="display: flex; flex-wrap: wrap;">
${frameworksIcons}
</div>

#### Технологии
<div style="display: flex; flex-wrap: wrap;">
${techIcons}
</div>

#### Инструменты
<div style="display: flex; flex-wrap: wrap;">
${toolsIcons}
</div>

#### Мои проекты
<table>
${projectsTable}
</table>

#### Пройденные курсы

<table>
${coursesTable}
</table>

#### Статистика
<div style="display: flex; flex-direction: row;">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=i5anin&layout=compact&theme=dark" alt="Top Langs" width="300">
    <a href="https://leetcode.com/i5anin/" target="_blank">
        <img src="https://leetcode-stats-six.vercel.app/?username=i5anin&theme=dark" alt="KnlnKS's LeetCode stats" width="350">
    </a>
</div>

<img src="https://wakatime.com/share/@PizZzA/c118a921-143e-421a-bd92-dcf6608f3b12.svg" width="655">\
<img src="https://wakatime.com/share/@PizZzA/54c18525-8ad1-4ff3-80c5-62f71b0c7916.svg" width="655">\


###### код для \`markdown\` сгенерирован на JavaScript \`node main.js\`
`

  const generatedMarkdownContent = markdownContent
    .replace('${projectsTable}', projectsTable)
    .replace('${coursesTable}', coursesTable)

    .replace('${techIcons}', techIcons)
    .replace('${toolsIcons}', toolsIcons)
    .replace('${frameworksIcons}', frameworksIcons)

  fs.writeFileSync('README.md', generatedMarkdownContent, 'utf-8')
}

generateMarkdownFile()
