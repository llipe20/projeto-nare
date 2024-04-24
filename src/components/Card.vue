<template>
    <div class="flex flex-col justify-center items-center w-full lg:h-100 h-auto">
        <div class="flex justify-center items-center w-full h-auto">
            <!-- imagem do projeto -->
            <img 
                :src="project.backdrop" 
                :alt="project.sub_title"
            >
        </div>
        <!-- Caixa de informações do projeto --> 
        <div class="flex flex-col justify-center items-center gap-3 w-full h-auto lg:h-3/4  p-5 pb-7">
            <h2 class="text-xl lg:text-2xl text-center">
                <!-- nome -->
                {{ project.title }}
            </h2>
            <h3 class="text-lg lg:text-xl text-tiktok-100">
                <!-- sub titulo -->
                {{ project.sub_title }}
            </h3>
            <p class="w-11/12 text-center">
                <!-- descrição -->
                {{ project.overview }}
            </p>
            <!-- tech ultilizadas -->
            <div class="flex justify-center items-center gap-3 m-3">
                <div 
                    v-for="tech in project.tech_skills"
                    :key="tech.id"
                    class="flex flex-col gap-1 justify-center items-center scale-95 hover:scale-100"
                >
                    <img :src="tech.logo" :alt="tech.name" class="w-8 lg:w-9 h-6 lg:h-7">
                    <span class="text-xs lg:text-sm text-center">
                        {{ tech.name }}
                    </span>
                </div>
            </div>
            <!-- buttons (link de acesso e repositório) -->
            <div class="flex justify-center items-center gap-3 text-base lg:text-lg mb-2">
                <ButtonVue
                    @click="Ancora(project.link_site)"
                    :tag="link"
                    :style="{ borderColor: animatedColor }"
                    class="w-36 md:w-44 h-14 rounded-lg border-2 lg:border-3 border-anima-v shadow scale-95 hover:scale-100"
                />

                <ButtonVue
                    @click="Ancora(project.link_github)"
                    :tag="github"
                    class="w-36 md:w-44 h-14 rounded-lg border-2 lg:border-3 border-anima-c shadow scale-95 hover:scale-100"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonVue from './Button.vue'
export default {
    name : 'CardView',

    components : {
        ButtonVue
    },

    props : {
        project : Object
    },

    data() {
        return {
            link : '<i class="fi fi-br-link-alt"></i><span>Acesso</span>',
            github : '<i class="fi fi-brands-github"></i><span>Repositório</span>'
        }
    },

    methods : {
        Ancora(acesso) {
            window.open(`${acesso}`, '_blank')
        }
    }
}
</script>
<style scoped>
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css');
</style>