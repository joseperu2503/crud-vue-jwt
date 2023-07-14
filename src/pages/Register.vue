<template>
  <Card>
    <h2 class="text-2xl font-bold">Sign Up</h2>
    <div class="grid grid-cols-2 gap-6 mt-6">
      <Input
        label="Name"
        type="text"
        placeholder="Jose"
        v-model="formRegister.name"
        :error="errors.name"
        name="name"
      />
      <Input
        label="Email"
        type="email"
        placeholder="juniorp2503"
        v-model="formRegister.email"
        :error="errors.email"
        name="email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="•••••••••"
        v-model="formRegister.password"
        :error="errors.password"
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="•••••••••"
        v-model="formRegister.password_confirmation"
        :error="errors.password_confirmation"
      />
    </div>
    <div class="mt-10 flex items-center">
      <hr class="w-full border" />
      <span class="mx-4">or</span>
      <hr class="w-full border" />
    </div>
    <div class="grid grid-cols-2 gap-4 mt-10">
      <SocialButton
        text="Sign up with Facebook"
        img="/assets/facebook.png"
      />
      <SocialButton text="Sign up with Google" img="/assets/google.png" />
    </div>
    <div class="mt-6">
      <n-button type="primary" @click="register" block :loading="loading">
        Sign Up
      </n-button>
    </div>
    <p class="text-sm font-light text-slate-500 mt-4">
      <span>Already have any account?</span>
      <span
        class="text-primary-600 font-medium cursor-pointer ml-2"
        @click="signIn"
      >
        Sign In.
      </span>
    </p>
  </Card>
</template>
<script setup>
import Input from "@/components/Input.vue";
import SocialButton from "@/components/SocialButton.vue";
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";
import { useAuth } from '@/composables/useAuth'

const router = useRouter();

const {register, formRegister, errors, loading} = useAuth()

const signIn = () => {
  router.push({
    name: "login",
  });
};
</script>
