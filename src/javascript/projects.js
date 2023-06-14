const { gitlabURL, githubURL } = require(`./url.js`)

const projects = [
  {
    image_src: `./public/projects/moire.png`,
    demo_link: `https://exam-vue.vercel.app`,
    repository_link: `${gitlabURL}/exam_vue`,
    title: `Магазин нижнего белья Moire`,
    description: `\nПолноценная версия\nФинальный проект Skillbox`,
    technologies: `Vue 3`,
  },
  {
    image_src: `./public/projects/coin.gif`,
    demo_link: `#`,
    repository_link: `${gitlabURL}/final_javascript_pro`,
    title: `Coin банк BTC`,
    description: `JavaScript\nПеревод средств между счетами`,
    technologies: `JavaScript`,
  },
  {
    image_src: `./public/projects/skb-crm.gif`,
    demo_link: `https://final-vue-crm.vercel.app/`,
    repository_link: `${gitlabURL}/final_vue`,
    title: `CRM`,
    description: `backend проснётся в течение 1 мин`,
    technologies: `Vue 3`,
  },
  {
    image_src: `./public/projects/orderbook.png`,
    demo_link: `https://order-btc-vue3.vercel.app/`,
    repository_link: `${githubURL}/Order-Book-Vue3`,
    title: `Биржевой стакан`,
    description: ``,
    technologies: `Vue 3`,
  },
  {
    image_src: `./public/projects/tehozavrrr.png`,
    demo_link: `https://vue-gamma-eight.vercel.app`,
    repository_link: `${gitlabURL}/vue/-/tree/main/08_api_2`,
    title: `Магазин электроники Technozavrrr`,
    description: `Простая версия магазина`,
    technologies: `Vue 2`,
  },
  {
    image_src: `./public/projects/stdpls.gif`,
    demo_link: `#`,
    repository_link: `${gitlabURL}/final_weblayout_pro`,
    title: `SitDownPls`,
    description: `Многостраничный лендинг`,
    technologies: `HTML, CSS, JavaScript,`,
  },
  {
    image_src: `./public/projects/evklid.gif`,
    demo_link: `#`,
    repository_link: `${gitlabURL}/weblayout_pro/-/tree/main/04_optimization`,
    title: `Evklid`,
    description: `Одностраничный лендинг`,
    technologies: `HTML, CSS, JavaScript,`,
  },
  {
    image_src: `./public/projects/lagoona.gif`,
    demo_link: `#`,
    repository_link: `${gitlabURL}/weblayout/-/tree/main/10_advanced-css`,
    title: `Lagoona`,
    description: `Одностраничный лендинг`,
    technologies: `HTML, CSS, JavaScript,`,
  },
  {
    image_src: `./public/projects/todo-list.png`,
    demo_link: `#`,
    repository_link: `${githubURL}/first_todo-list`,
    title: `ToDoList`,
    description: `Первый проект`,
    technologies: `Vue 3, Firebase`,
  },
]

module.exports = projects