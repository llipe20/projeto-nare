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
        "backdrop" : "https://i.ibb.co/wsrj2Rp/havarts.jpg",
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
                "logo" : "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
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
            "backdrop" : "https://i.ibb.co/vZWVKyv/akuma.jpg",
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
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
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
            "id" : 3,
            "title" : "Gerenciador de tarefas",
            "sub_title" : "projeto Mahoraga",
            "link_site" : "https://api-galland.000webhostapp.com/",
            "link_github" : "https://github.com/llipe20/projeto-mahoraga", 
            "backdrop" : "https://i.ibb.co/2WntWdt/backdrop-mahoraga.png",
            "overview" : "Aplicação tem como objetivo oferecer um pequeno sistema para gerenciar projetos e trabalhos. Ele foi elaborado e moldado de acordo com minhas necessidades pessoais. Basicamente, o software lista tarefas que podem ficar visiveis para pessoas - grande utilidade para mim na faculdade. E aproveitando que estou estudando TypeScrpt e React, resolvi junto tudo em um único desafio.",
            "tech_skills" : [
                {
                    id : 1,
                    name : 'Type Script',
                    logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
                },
                {
                    id : 2,
                    name : "Java Script",
                    logo : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                },
                {
                    id : 3,
                    name : "React",
                    logo : "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    id : 4,
                    name : "Tailwind CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
                },
                {
                    id : 5,
                    name : "CSS",
                    logo : "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                }
            ]
        },
        {
            "id" : 4,
            "title" : "API Rest + Documentação",
            "sub_title" : "projeto Galland",
            "link_site" : "https://api-galland.000webhostapp.com/",
            "link_github" : "https://github.com/llipe20/projeto-galland", 
            "backdrop" : "https://i.ibb.co/fM9C3bQ/projeto-galland.png",
            "overview" : "O projeto consiste em desenvolver uma mini API para fazer a ponte entre um banco de dados e o front end de uma aplicação pessoal, um sistema online de pedidos/cardápiio. Foi utlizado PHP como linguagem fonte, MySQL para banco de dados e JavaScript para Front-end.",
            "tech_skills" : [
                {
                    id : 1,
                    name : 'PHP',
                    logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'
                },
                {
                    id : 2,
                    name : 'MySQL',
                    logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg'
                },
                {
                    "id" : 3,
                    "name" : "Java Script",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                },
                {
                    "id" : 4,
                    "name" : "Tailwind CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
                },
                {
                    "id" : 5,
                    "name" : "CSS",
                    "logo" : "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                }
            ]
        }
      ],
      tech : [
        {
            name : 'Type Script',
            logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
        },
        {
            name : "Java Script",
            logo : "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
            name : "React",
            logo : "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        },
        {
            name : 'Vue.js',
            logo : 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg'
        },
        {
            name : 'TailwindCSS',
            "logo" : "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
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
      ],
      links : [
        {
          id : 1,
          name : 'Linkedin',
          icon : '<i class="fi fi-brands-linkedin"></i>',
          span : '<span>Linkedin</span>',
          ancora : 'https://www.linkedin.com/in/felipe-silva--/'
        },
        {
          id : 2,
          name : 'Github',
          icon : '<i class="fi fi-brands-github"></i>',
          span : '<span>Github</span>',
          ancora : 'https://github.com/llipe20'
        },
        {
          id : 3,
          name : 'Currículo',
          icon : '<i class="fi fi-rr-cloud-download-alt"></i>',
          span : '<span>Currículo</span>',
          ancora : ''
        },
        {
          id : 4,
          name : 'WhatsApp',
          icon : '<i class="fi fi-brands-whatsapp"></i>',
          span : '<span>WhatsApp</span>',
          ancora : 'https://wa.me/qr/O43EG6NVZ3QCE1' 
        },
        {
          id : 5,
          name : 'Instagram',
          icon : '<i class="fi fi-brands-instagram"></i>',
          span : '<span>Instagram</span>',
          ancora : 'https://instagram.com/___llpe'
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
