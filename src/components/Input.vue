<template>
    <div>
        <label class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{label}}</label>
        <input v-model="modelValue" @input="input" :type="type" class="h-10 bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary-600  focus:border-primary-600 block w-full p-2.5" :placeholder="placeholder">
        <span v-if="error" className='text-red-500 text-xs'>{{error[0]}}</span>
    </div>
</template>
<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
    modelValue: String,
    error: Array
})

const { label, type, placeholder, error } = toRefs(props)

const emit = defineEmits(['update:modelValue'])

const input = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>
