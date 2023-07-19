<template>
  <div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0 overflow-scroll">
    <div class="flex items-center min-h-full">
      <div class="flex gap-8 p-4 sm:p-10 w-full justify-center " :class="{'flex-row-reverse': slotPosition == 'left'}">
        <div class="hidden lg:flex items-end justify-center">
          <img :src="img" alt="" class="max-w-lg max-h-[500px]"/>
        </div>
        <div class="flex items-center justify-center max-w-md w-full">
          <slot />
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
const router = defineProps({
  slotPosition: {
    type: String,
    default: 'right'
  },
  img: {
    type: String,
    default: '/assets/illustration.svg'
  }
});


</script>
