<template>
    <div class="flex justify-center items-center w-screen min-h-screen bg-background-100 text-white">
        <!-- Header -->
        <section id="home" class="flex justify-center items-center w-full h-screen relative">
            <header class="flex flex-col md:flex-row justify-center md:justify-around items-center w-full h-full">
                <nav class="flex justify-center items-center gap-5 w-full h-20 bg-background-900 fixed inset-0">
                    <!-- logo -->
                    <div class="flex justify-start items-center h-full w-2/4 text-tiktok-100 font-logo xl:text-2xl text-xl">
                          <span>
                             {{ logo }}
                          </span>
                    </div>
                    <div class="flex justify-end items-center h-full w-1/4 relative">
                        <ul
                            class="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-3 xl:gap-0 h-auto xl:h-full w-44 xl:w-full p-4 xl:p-0 text-lg text-start absolute xl:static top-full right-[-30px] bg-background-900 transition-all duration-100"
                            v-if="isMobile || width > 1280" 
                        >
                            <li class="w-5/6 xl:w-auto hover:border-b xl:hover:border-0">
                                <a href="#home" class="xl:hover:border-b">
                                    Início
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto hover:border-b xl:hover:border-0">
                                <a href="#sobre" class="xl:hover:border-b">
                                    Sobre mim
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto hover:border-b xl:hover:border-0">
                                <a href="#projeto" class="xl:hover:border-b">
                                  Projetos
                                </a>
                            </li>
                            <li class="w-5/6 xl:w-auto hover:border-b xl:hover:border-0">
                                <a href="#contato" class="xl:hover:border-b">
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
                <!-- bloco para apresentação -->
                <div class="flex flex-col justify-center items-start gap-2 text-3xl bg-red-500">
                      <p class="">
                         IAE, EU SOU O
                      </p>
                      <h1 class="text-5xl">
                          FELIPE C SILVA
                      </h1>
                      <h2>
                          DESENVLVEDOR FRONT-END
                      </h2>
                      <!-- tech skills -->
                      <ul>

                      </ul>
                      <!-- buttons -->
                      <div>

                      </div>
                </div>
                <!-- bloco para imagem -->
                <div class="w-80 h-80">
                     
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
export default {
    name : 'App',

    data() {
        return {
            logo : '<llPE/>',
            isMobile : false,
            width: window.innerWidth
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

     mounted() {
        window.addEventListener('resize', this.UpdateWidth);
      },

      beforeDestroy() {
        window.removeEventListener('resize', this.UpdateWidth);
      }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');

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

</style>
