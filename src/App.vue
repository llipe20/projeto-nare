<template>
    <div class="flex justify-center items-center w-screen min-h-screen bg-background-100 text-white">
        <!-- Header -->
        <section id="home" class="flex justify-center items-center w-full h-screen relative">
            <header class="flex flex-col md:flex-row justify-around items-center w-full h-full">
                <nav class="flex justify-around xl:justify-around items-center gap-5 w-full h-20 bg-background-900 fixed inset-0">
                    <!-- logo -->
                    <div class="flex justify-start items-center h-full w-1/4 text-tiktok-100 font-logo xl:text-2xl text-xl">
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
                    class="w-full h-20"></div>
                <!-- bloco para apresentação -->
                <div class="flex flex-col justify-center items-center gap-3 text-xl md:text-3xl">
                      <p class="">
                         OIE, EU SOU O
                      </p>
                      <h1 class="text-4xl md:text-5xl p-2 pl-0">
                          FELIPE C SILVA
                      </h1>
                      <h2>
                          DESENVLVEDOR FRONT-END
                      </h2>
                      <!-- tech skills -->
                      <ul class="flex flex-wrap gap-3 mt-2 mb-2 w-2/3 md:w-auto">
                            <img align="center" alt="llpe-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg">
                            <img align="center" alt="llpe-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg">
                            <img align="center" alt="llpe-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg">
                            <img align="center" alt="llpe-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
                            <img align="center" alt="llpe-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
                            <img align="center" alt="llpe-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
                            <img align="center" alt="llpe-Php" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg">
                            <img align="center" alt="llpe-MySQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
                      </ul>
                      <!-- buttons -->
                      <div class="flex justify-center items-center gap-5">
                            <ButtonVue
                                @click="Ancora(btn.linkedin)"
                                :tag="btn.linkedin"
                                :style="{ borderColor: animatedColor }"
                                class="w-36 md:w-48 h-12 text-lg rounded-lg  border border-2 animated-border scale-95 hover:scale-100"
                            />

                            <ButtonVue
                                 @click="Ancora(btn.github)"
                                :tag="btn.github"
                                class="w-36 md:w-48 h-12 text-lg rounded-lg border border-2 scale-95 hover:scale-100"
                            />
                      </div>
                </div>
                <!-- bloco para imagem -->
                <div class="w-80 lg:w-1/4 h-80 bg-red-500">
                     
                </div>
            </header>
        </section>
        <!-- Sobre min -->
        <section id="about">

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
            }
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
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');

  .font-logo {
      font-family: 'Acme', sans-serif;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #00d2df;
      border-radius: 5px;
  }

  ::-webkit-scrollbar {
      width: 10px;
      background-color: #1b1b1b;
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
