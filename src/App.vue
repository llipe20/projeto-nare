<template>
    <div class="flex flex-col justify-center items-center w-screen min-h-screen bg-background-100 text-white font-text overflow-x-hidden text-white lg:text-tiktok-500 relative">
        <!-- Header -->
        <section id="home" class="flex justify-center items-center w-full h-screen ">
            <header class="flex flex-col md:flex-row justify-center lg:justify-around items-center gap-10 lg:gap-0 w-full h-full">
                <nav class="flex justify-around xl:justify-around items-center gap-5 w-full h-20 bg-background-900 fixed inset-0 z-10">
                    <!-- logo -->
                    <div class="flex justify-start items-center h-full w-1/4 text-tiktok-100 xl:text-2xl text-xl">
                          <span class="font-logo">
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
                                <a href="#about">
                                    Sobre mim
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#projects">
                                  Projetos
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto relative">
                                <a href="#footer">
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
                <!-- ocupa o espaço da nav -->
                <div 
                    v-if="width < 580"
                    class="w-full h-20">
                </div>
                <!-- bloco para apresentação -->
                <div class="flex flex-col justify-center items-center lg:items-start gap-6 text-xl md:text-3xl invisible">
                    <div class="flex flex-col justify-center gap-2 text-tiktok-500">
                        <p>
                            OIE, EU SOU O
                        </p>
                        <h1 id="nome" class="text-4xl md:text-5xl p-2 pl-0 pr-0 text-tiktok-100 relative w-70 lg:w-88">
                            FELIPE C SILVA
                        </h1>
                        <h2>
                            DESENVOLVEDOR FRONT-END
                        </h2>
                    </div>
                    <!-- tech skills -->
                    <ul 
                        class="flex flex-row gap-3 w-2/3 md:w-auto justify-center items-center text-white lg:text-tiktok-500"  
                    >
                        <img 
                            v-for="skill in skills" 
                            :key="skill.name"
                            class="w-8 h-6 lg:w-10 lg:h-8 scale-95 hover:scale-100"
                            :alt="skill.name" 
                            :src="skill.logo"
                        >
                    </ul>
                    <!-- buttons (linkedin e github) -->
                    <div class="flex justify-center items-center gap-5 text-white lg:text-tiktok-500">
                        <ButtonVue
                            @click="Ancora('https://www.linkedin.com/in/felipe-silva--/')"
                            :tag="btn.linkedin"
                            :class="borderClass"
                            class="w-32 md:w-48 h-12 text-lg rounded-lg border-2 lg:border-3 border-anima-v shadow scale-95 hover:scale-100"
                        />
                        <!-- github -->
                        <ButtonVue
                            @click="Ancora('https://github.com/llipe20')"
                            :tag="btn.github"
                            class="w-32 md:w-48 h-12 text-lg rounded-lg border-2 lg:border-3 border-anima-c scale-95 hover:scale-100"
                        />
                    </div>
                </div>
                <!-- bloco para imagem cartton -->
                <div class="flex justify-center items-center w-80 lg:w-1/4 h-80 border-2 rounded-lg invisible">
                     <img src="/llpe-cartoon.png" alt="felipe-cartoon">
                </div>
            </header>
        </section>
        <!-- Sobre min -->
        <section id="about" class="flex flex-col lg:flex-row justify-center items-center gap-6 w-full min-h-screen pt-10 pb-10 mt-5 mb-5 lg:m-0 lg:p-0">
            <!-- bloco para imagem -->
            <div class="flex justify-center items-center w-80 lg:w-1/4 h-80 border-2 rounded-lg invisible">
                    Imagem aqui
            </div>
            <div class="flex flex-col justify-center items-center lg:items-start gap-3 w-72 lg:w-2/4 text-white lg:text-tiktok-500 lg:pl-5 invisible">
                <h3 class="text-xl lg:text-2xl">
                    SOBRE MIM
                </h3>
                <h4 class="text-lg lg:text-xl">
                    Caxias - MA
                </h4>
                <p class="text-center lg:text-start leading-6 text-base lg:text-lg">
                    Meu nome é Felipe, tenho 20 anos e estou na metade do curso de Análise e Desenvolvimento de Sistema. Atualmente, estou aprimorando minhas habilidades para atuar como Desenvolvedor Front-End, com as tecnologias Vue.js e TailwindCSS. Apesar do meu foco ser a construção de interfaces, possuo conhecimento em API's e em linguagem do lado do servidor com PHP, podendo construir pequenos sistemas.
                </p>
                <!-- buttons (curriculo e whats) -->
                <div class="flex justify-center items-center gap-5 mt-5 text-white lg:text-tiktok-500">
                    <ButtonVue
                        @click="Ancora(btn.linkedin)"
                        :tag="btn.curriculo"
                        :style="{ borderColor: animatedColor }"
                        class="w-36 md:w-48 h-12 text-base lg:text-lg rounded-lg border-2 lg:border-3 border-anima-v shadow scale-95 hover:scale-100"
                    />
                    <!-- whats -->
                    <ButtonVue
                        @click="Ancora('https://wa.me/qr/O43EG6NVZ3QCE1')"
                        :tag="btn.whats"
                        class="w-36 md:w-48 h-12 text-base lg:text-lg rounded-lg border-2 lg:border-3 border-anima-c shadow scale-95 hover:scale-100"
                    />
                </div>
            </div>
        </section>
        <!-- Projetos -->
        <section id="projects" class="flex flex-col justify-center items-center gap-8 w-full min-h-screen p-10 mt-10 mb-10 text-white lg:text-tiktok-500">
            <div class="mb-2 invisible">
                <h3 class="text-xl lg:text-2xl">PROJETOS</h3>
            </div>
            <div id="box-project" class="flex lg:flex-wrap flex-col lg:flex-row justify-center items-center gap-11 w-full h-auto lg:w-4/5 invisible">
                <CardView 
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                    class="flex flex-col justify-center items-center gap-2 rounded-xl w-88 lg:w-45 shadow overflow-hidden border-2"
                />
            </div>
        </section>
        <!-- Footer -->
        <section id="footer" class="flex flex-col lg:flex-row justify-center items-center gap-6 w-full h-40 bg-background-900 mt-5">
            
        </section>
    </div>
</template>

<script>
import ButtonVue from './components/Button.vue'
import CardView from './components/Card.vue'
export default {
    name : 'App',

    components : {
        ButtonVue, CardView
    },

    data() {
        return {
            isMobile : false,
            logo : '<llPE/>',
            width: window.innerWidth,
            btn : {
              linkedin : '<i class="fi fi-brands-linkedin"></i><span>Linkedin</span>',
              github : '<i class="fi fi-brands-github"></i><span>Github</span>',
              whats : '<i class="fi fi-brands-whatsapp"></i><span>WhatsApp</span>',
              curriculo : '<i class="fi fi-rr-cloud-download-alt"></i><span>Currículo</span>'
            },
            skills : this.$store.state.tech,
            projects : this.$store.state.projects
        }
    },

    methods : {
        // Resposividade da nav
        ToggleHamburguer() {
            this.isMobile = !this.isMobile
        },

        // Atualiza a largura da tela para facilitar a resposividade
        UpdateWidth() {
            this.width = window.innerWidth
        },

        // direcionar os links para as páginas de destinos
        Ancora(acesso) {
            window.open(`${acesso}`, '_blank')
        }
    },

    mounted() {
        // Evento que pega a largura atual de uma tela
        window.addEventListener('resize', this.UpdateWidth)

        // Evento para observar se os elementos (blocos sections) estão visiveis em tela no momento
        const myObserve = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                console.log(entry);
                if(entry.isIntersecting) {
                    entry.target.classList.remove('invisible')
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                    entry.target.classList.add('invisible')
                }
            })
        }, { threshold: 0.5 })
        const elements = document.querySelectorAll('.invisible')
        elements.forEach(element => myObserve.observe(element))
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.UpdateWidth)
    }
  }
</script>

<style>
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500&display=swap');

    /* Remover barra de rolagem nativa do navegador */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Rolagem suave da página */
    html {
        scroll-behavior: smooth;
    }

    /* Efeitos de entrada dos elementos */
    .invisible {
        opacity: 1;
        filter: blur(10px);
        transform: translateX(-50%);
        transition: all 1000ms;
    }

    .show {
        opacity: 1;
        filter: blur(0);
        transition: all 1000ms;
    }

    .font-text {
        font-family: 'Inter', sans-serif;
    }

    .font-logo {
        font-family: 'Anton', sans-serif;
    }

    /* Efeito de hover nos links nav */
    li > a::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: #0077cc; 
        transition: all 0.3s ease-in-out; 
    }

    li > a:hover::after {
        width: 100%; 
        left: 0;
    }

    /* animação das bordas dos bottons */
    @keyframes colors {
        0% {
            border-color: #4400cc;
        }
        50% {
            border-color: #047d96;
        }
        100% {
            border-color: #4b0474;
        }
    }

    .border-anima-v {
        animation: colors 5s ease-in-out infinite alternate-reverse;
    }

    .border-anima-c {
        animation: colors 5s ease-in-out infinite alternate;
    }

    /* Efeito de digitação */
    @keyframes cursor {
        0% {
            border-left: 2px solid #0D1117;
        }
    }

    @keyframes digitar {
        10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
            width: 0;
        }
        5%, 20%, 25%,  40%, 45%, 60%, 65%, 80%, 85% {
            width : calc(100% + 18px);
        }
    }

    #nome::after {
        content: '';
        border-left: 2px solid #0077cc;
        position: absolute;
        animation: cursor .4s infinite alternate, digitar 40s steps(20) infinite;
        width: 100%;
        height: 80%;
        background-color: #0D1117;
        right: -16px;
    }
</style>
