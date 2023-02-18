<template>
    <div class="flex">
        <div
            :class="['w-5 h-5 border rounded flex items-center justify-center cursor-pointer',{'bg-primary-500 text-white': modelValue}]"
            @click="click"
        >
            <i class="fas fa-check text-xxs" v-if="modelValue"></i>
        </div>
        <label class="ml-2 text-sm text-slate-500 font-normal">{{label}}</label>
    </div>
</template>
<script setup>
    import { toRefs } from 'vue'
    const props = defineProps({
        modelValue: Boolean,
        label: String
    })

    const emit = defineEmits(['update:modelValue'])

    const { modelValue, label } = toRefs(props)
    const click = () => {
        emit('update:modelValue',!modelValue.value)
    }

</script>
