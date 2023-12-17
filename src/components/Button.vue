<template>
    <div v-html="tag" class="flex justify-center items-center gap-2 cursor-pointer">
        
    </div>
</template>

<script>
export default {
    name : 'ButtonView',

    props : {
        tag : String
    }
}
</script>