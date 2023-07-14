<template>
  <div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full p-4 sm:p-10">
      <div class="flex items-center justify-center sm:max-w-2xl mx-auto w-full">
        <router-view />
      </div>
      <div class="hidden lg:flex items-center justify-center">
        <img src="/assets/illustration.svg" alt="" />
      </div>
    </div>
  </div>
</template>
