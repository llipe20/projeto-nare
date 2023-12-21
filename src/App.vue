<template>
    <div class="flex flex-col justify-center items-center w-screen min-h-screen bg-background-100 text-white font-logo overflow-x-hidden">
        <!-- Header -->
        <section id="home" class="flex justify-center items-center w-full h-screen relative">
            <header class="flex flex-col md:flex-row justify-around items-center w-full h-full">
                <nav class="flex justify-around xl:justify-around items-center gap-5 w-full h-20 bg-background-900 fixed inset-0 z-10">
                    <!-- logo -->
                    <div class="flex justify-start items-center h-full w-1/4 text-tiktok-100 xl:text-2xl text-xl">
                          <span>
                             {{ logo }}
                          </span>
                    </div>
                    <div class="flex justify-end items-center h-full w-1/4 relative">
                        <ul
                            class="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 xl:gap-0 h-auto xl:h-full w-44 xl:w-full p-4 xl:p-0 text-lg text-start absolute xl:static top-full right-[-30px] bg-background-900 transition-all duration-100"
                            v-if="isMobile || width > 1280" 
                        >
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#home">
                                    Início
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#sobre">
                                    Sobre mim
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#projeto">
                                  Projetos
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#contato">
                                  Contato
                                </a>
                            </li>
                        </ul>
                        <button 
                            v-if="width < 1280"
                            @click="ToggleHamburguer"
                            class="flex justify-end items-center h-full w-1/2"
                        >
                            <svg
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke-width="1.5" 
                              stroke="currentColor" 
                              class="w-7 h-7 text-tiktok-100"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>   
                    </div>
                </nav>
                <div 
                    v-if="width < 580"
                    class="w-full h-20">
                </div>
                <!-- bloco para apresentação -->
                <div class="flex flex-col justify-center items-center lg:items-start gap-6 text-xl md:text-3xl">
                    <div class="flex flex-col justify-center gap-2">
                        <p>
                            OIE, EU SOU O
                        </p>
                        <h1 class="text-4xl md:text-5xl p-2 pl-0">
                            FELIPE C SILVA
                        </h1>
                        <h2>
                            DESENVOLVEDOR FRONT-END
                        </h2>
                    </div>
                    <!-- tech skills -->
                    <ul 
                        class="flex flex-row gap-3 w-2/3 md:w-auto justify-center items-center"  
                    >
                        <img 
                            v-for="skill in skills" 
                            :key="skill.name"
                            class="w-8 h-6 lg:w-10 lg:h-8"
                            :alt="skill.name" 
                            :src="skill.logo"
                        >
                    </ul>
                    <!-- buttons -->
                    <div class="flex justify-center items-center gap-5">
                        <ButtonVue
                            @click="Ancora(btn.linkedin)"
                            :tag="btn.linkedin"
                            :style="{ borderColor: animatedColor }"
                            class="w-32 md:w-48 h-12 text-lg rounded-lg  border border-2 animated-border scale-95 hover:scale-100"
                        />

                        <ButtonVue
                            @click="Ancora(btn.github)"
                            :tag="btn.github"
                            class="w-32 md:w-48 h-12 text-lg rounded-lg border border-2 scale-95 hover:scale-100"
                        />
                    </div>
                </div>
                <!-- bloco para imagem -->
                <div class="w-80 lg:w-1/4 h-80 bg-red-500">
                     
                </div>
            </header>
        </section>
        <!-- Sobre min -->
        <section id="about" class="flex flex-col lg:flex-row justify-center items-center gap-6 w-full h-screen">
            <!-- bloco para imagem -->
            <div class="w-80 lg:w-1/4 h-80 bg-red-500">
                    
            </div>
            <div class="flex justify-center items-center w-72 lg:w-1/4">
                <p class="text-start leading-6 text-base lg:text-lg">
                    Meu nome é Felipe, tenho 20 anos e estou na metade do curso de Análise e Desenvolvimento de Sistema. Atualmente, estou aprimorando minhas habilidades para atuar como Desenvolvedor Front-End, com as tecnologias Vue.js e TailwindCSS. Apesar do meu foco ser a construção de interfaces, possuo conhecimento em API's e em linguagem do lado do servidor com PHP, podendo construir pequenos sistemas.
                </p>
            </div>
        </section>
        <!-- Projetos -->
        <section id="projetc">

        </section>
        <!-- Footer -->
        <section id="footer">
          
        </section>
    </div>
</template>

<script>
import ButtonVue from './components/Button.vue'
export default {
    name : 'App',

    components : {
        ButtonVue
    },

    data() {
        return {
            logo : '<llPE/>',
            isMobile : false,
            width: window.innerWidth,
            btn : {
              linkedin : '<i class="fi fi-brands-linkedin"></i><span>Linkedin</span>',
              github : '<i class="fi fi-brands-github"></i><span>Github</span>'
            },
            skills : [
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
        }
    },

    methods : {
        ToggleHamburguer() {
            this.isMobile = !this.isMobile
        },

        UpdateWidth() {
            this.width = window.innerWidth
        }
    },

    Ancora(acesso) {
        if(acesso == this.btn.linkedin) {
            
        } else {

        }
    },

    mounted() {
        window.addEventListener('resize', this.UpdateWidth)
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.UpdateWidth)
    }
  }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');

    .font-logo {
        font-family: 'Inter', sans-serif;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    li > a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: #0077cc; /* Cor da borda */
        transition: all 0.3s ease-in-out; /* Adiciona uma transição suave */
    }

    li > a:hover::after {
        width: 100%; /* Amplia a largura ao passar o mouse */
        left: 0; /* Move a partir da borda esquerda */
    }
</style>
