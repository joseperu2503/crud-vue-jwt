<template>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{label}}</label>
        <input :type="type" class="h-10 bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-indigo-600  focus:border-indigo-600 block w-full p-2.5" :placeholder="placeholder">
    </div>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
})

const { label, type, placeholder } = toRefs(props)

</script>