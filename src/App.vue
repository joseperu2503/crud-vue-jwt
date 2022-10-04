<script setup>
  import {ref} from 'vue'
  import Input from './components/Input.vue'
  import SocialButton from './components/SocialButton.vue'
  import CheckBox from './components/CheckBox.vue'

  const remember = ref(true)
  console.log(remember.value)
</script>

<template>
<div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
  <div class="grid grid-cols-2 h-full">
    <div class="flex items-center justify-center px-8">
      <div class="bg-white w-full max-w-xl shadow-md rounded-lg p-8">
        <h2 class="text-2xl font-bold">Welcome back</h2>
        <p class="text-sm font-light text-slate-500">
          Start your website in seconds. Don’t have an account? <span class="text-indigo-600 font-medium cursor-pointer">Sign up.</span>
        </p>
        <div class="grid grid-cols-2 gap-6 mt-10">
          <Input label="Username" type="text" placeholder="juniorp2503"/>
          <Input label="Password" type="password" placeholder="•••••••••"/>
        </div>
        <div class="mt-10 flex items-center">
          <hr class="w-full border">
          <span class="mx-4">or</span>
          <hr class="w-full border">
        </div>
        <div class="flex flex-col gap-4 mt-10">
          <SocialButton text="Sign in with Facebook" img="src/assets/facebook.png"/>
          <SocialButton text="Sign in with Google" img="src/assets/google.png"/>
        </div>
        <div class="mt-6 flex justify-between">
          <CheckBox v-model="remember" label="Remember me"/>
          <span class="text-sm text-indigo-600 font-medium hover:underline cursor-pointer">Forgot password?</span>
        </div>
        <div class="mt-6">
          <button type="button" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 shadow border font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center">
            Sign in to your account 
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <img src="src/assets/illustration.svg" alt="">
    </div>
  </div>
  <p class="text-red-500">Hola</p>
  <router-view/>
</div>

</template>

<style scoped>

</style>
