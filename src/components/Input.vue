<template>
  <div class="relative">
    <label class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">{{label}}</label>
    <div class="flex relative items-center">
      <input
        :value="modelValue"
        @input="input"
        :type="type == 'password' ? showPassword ? 'text' : 'password'  : type"
        class="h-10 bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-primary-600  focus:border-primary-600 block w-full p-2.5 pr-10"
        :placeholder="placeholder"
        :name="name"
      />
      <i
        v-if="showPassword && type=='password'"
        class="fas fa-eye absolute right-2.5 text-gray-600 cursor-pointer"
        @click="togglePassword"
      ></i>
      <i
        v-if="!showPassword && type=='password'"
        class="fas fa-eye-slash absolute right-2.5 text-gray-600 cursor-pointer"
        @click="togglePassword"
      ></i>
    </div>
    <span v-if="error" className='text-red-500 text-xs absolute'>{{error[0]}}</span>
  </div>
</template>
<script setup>
import { ref } from 'vue'

// const props = defineProps({
//   label: String,
//   type: String,
//   placeholder: String,
//   modelValue: String,
//   error: Array
// })
// const { label, type, placeholder, error } = toRefs(props)

const props = defineProps(['label', 'type', 'placeholder', 'modelValue', 'error', 'name'])
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const emit = defineEmits(['update:modelValue'])

const input = (event) => {
  emit('update:modelValue', event.target.value)
}

</script>
