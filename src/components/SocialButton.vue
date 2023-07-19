<template>
    <button
        type="button"
        class="
            w-full
            text-black
            hover:bg-gray-100
            shadow
            border
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2
            flex
            justify-center
            items-center
        "
    >

        <img :src="img" class="h-8 mr-1.5">
        <span class="">{{text}}</span>

    </button>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    text: String,
    img: String,
})

const { text, img } = toRefs(props)
</script>
