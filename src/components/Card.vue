<template>
    <div class="flex flex-col justify-center items-center w-full lg:h-100 h-auto">
        <div class="flex justify-center items-center w-full h-40">
            <!-- imagem de fundo -->
            Imagem do projeto
        </div>
        <div class="flex flex-col justify-center items-center gap-3 w-full h-auto lg:h-3/4  p-5 pb-7">
            <h2 class="text-xl lg:text-2xl text-center">
                {{ project.title }}
            </h2>
            <h3 class="text-lg lg:text-xl text-tiktok-100">
                {{ project.sub_title }}
            </h3>
            <p class="w-11/12 text-center">
                {{ project.overview }}
            </p>
            <!-- tech ultilizadas -->
            <div class="flex justify-center items-center gap-3 m-3">
                <div 
                    v-for="tech in project.tech_skills"
                    :key="tech.id"
                    class="flex flex-col gap-1 justify-center items-center"
                >
                    <img :src="tech.logo" :alt="tech.name" class="w-8 lg:w-9 h-6 lg:h-7">
                    <span class="text-xs lg:text-sm text-center">
                        {{ tech.name }}
                    </span>
                </div>
            </div>
            <!-- buttons -->
            <div class="flex justify-center items-center gap-3 text-base lg:text-lg mb-2">
                <ButtonVue
                    :tag="link"
                    :style="{ borderColor: animatedColor }"
                    class="w-36 md:w-44 h-12 rounded-lg border border-2 animated-border scale-95 hover:scale-100"
                />

                <ButtonVue
                    :tag="github"
                    class="w-36 md:w-44 h-12 rounded-lg border border-2 scale-95 hover:scale-100"
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
    }
}
</script>
<style scoped>
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-brands/css/uicons-brands.css');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
    @import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css')
</style>