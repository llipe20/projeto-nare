import { createStore } from 'vuex'

export default createStore({
  state: {
      projects : [
          {
            "id" : 1,
            "title" : "E-commerce de mangás",
            "sub_title" : "projeto Havartz",
            "link_site" : "https://projeto-havertz.vercel.app/",
            "link_github" : "https://github.com/llipe20/projeto-havertz", 
            "backdrop" : "",
            "overview" : "Pequena aplicação de uma lojinha de venda online de mangás japoneses. O objetivo principal é práticar os conhecimentos aquiridos em Tailwindcss, utilizando sua enorme biblioteca para criar uma interface simples e de fácil navegação. Usei json-serve para facilitar a manipulação dos dados dos produtos e Vue.js, juntamente com suas bibliotecas - vuex e vue routers - para orquestrar o sistema.",
            "tech_skills" : [
                {
                    "id" : 1,
                    "name" : "Vue.js",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                },
                {
                    "id" : 2,
                    "name" : "Tailwind CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
                },
                {
                    "id" : 3,
                    "name" : "Java Script",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                },
                {
                    "id" : 4,
                    "name" : "CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                }
            ]
          },
          {
            "id" : 2,
            "title" : "Plataforma de filmes + Sistema de login",
            "sub_title" : "projeto Akuma no mi",
            "link_site" : "https://projeto-akuma-no-mi.vercel.app/",
            "link_github" : "https://github.com/llipe20/projeto-akuma-no-mi", 
            "backdrop" : "",
            "overview" : "Projeto criado para um trabalho da faculdade que me rendeu nota máxima, aplicando conhecimentos adquiridos em Vue.js, Tailwind e API´s, consumindo a enorme biblioteca de filmes disponibilizada pela The Movie Database. O sistema de login da aplicação foi implementado usando json-serve como banco de dados improvisado.",
            "tech_skills" : [
                {
                    "id" : 1,
                    "name" : "Vue.js",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                },
                {
                    "id" : 2,
                    "name" : "Tailwind CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
                },
                {
                    "id" : 3,
                    "name" : "Java Script",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                },
                {
                    "id" : 4,
                    "name" : "CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                },
                {
                    "id" : 5,
                    "name" : "API TMDB",
                    "icon" : "https://i.ibb.co/NTxkdxQ/api.png"
                }
            ]
          }
      ],
      tech : [
          {
              name : 'Vue.js',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg'
          },
          {
              name : 'TailwindCSS',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg'
          },
          {
              name : 'SASS',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
          },
          {
              name : 'Java Script',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
          },
          {
              name : 'HTML5',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'
          },
          {
              name : 'CSS3',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
          },
          {
              name : 'PHP',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'
          },
          {
              name : 'MySQL',
              logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
          }
      ]
  },
  getters: {
  },
  actions: {
  
  },
  modules: {
  }
})
