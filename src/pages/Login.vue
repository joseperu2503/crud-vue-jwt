<template>
  <Layout1
    img="/assets/login.svg"
  >
    <Card>
      <img :src="vue" alt="" className="w-28 mx-auto mb-4" />
      <h2 class="text-2xl font-bold">Welcome back</h2>
      <p class="text-sm font-light text-slate-500">
        <span>Start your website in seconds. Don’t have an account?</span>
        <span
          class="text-primary-600 font-medium cursor-pointer ml-2"
          @click="signUp"
        >
          Sign up.
        </span>
      </p>
      <div class="grid grid-cols-1  gap-6 mt-10">
        <Input
          v-model="formLogin.email"
          label="Email"
          type="email"
          placeholder="joseperu2503@gmail.com"
          :error="errors.email"
          name="email"
        />
        <Input
          v-model="formLogin.password"
          label="Password"
          type="password"
          placeholder="•••••••••"
          :error="errors.password"
          name="password"
        />
      </div>
      <div class="mt-4 flex items-center">
        <hr class="w-full border" />
        <span class="mx-4">or</span>
        <hr class="w-full border" />
      </div>
      <div class="grid grid-cols-1 gap-4 mt-4">
        <SocialButton
          text="Sign in with Facebook"
          img="/assets/facebook.png"
        />
        <SocialButton text="Sign in with Google" img="/assets/google.png" />
      </div>
      <div class="mt-6 flex flex-col sm:flex-row justify-between gap-2">
        <CheckBox v-model="remember" label="Remember me" />
        <span
          class="text-sm text-primary-600 font-medium hover:underline cursor-pointer"
          >Forgot password?</span
        >
      </div>
      <div class="mt-6">
        <n-button type="primary" @click="login" block :loading="loading">
          Sign in to your account
        </n-button>
      </div>
    </Card>
  </Layout1>
</template>
<script setup>
import Input from "@/components/Input.vue";
import SocialButton from "@/components/SocialButton.vue";
import CheckBox from "@/components/CheckBox.vue";
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";
import vue from "/assets/vue.png";
import { useAuth } from '@/composables/useAuth'
import Layout1 from '@/layouts/Layout1.vue';

const router = useRouter();
const {login, formLogin, errors, loading, remember} = useAuth()

const signUp = () => {
  router.push({name: "register"});
};

</script>
