<template>
    <div v-html="tag" class="flex justify-center items-center cursor-pointer">
        
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