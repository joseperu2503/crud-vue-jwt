<template>
  <div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
    <div
      className="bg-primary-600 w-full py-4 flex justify-center items-center gap-4"
    >
      <router-link
        to="/dashboard"
        className="text-white"
      >
        Dashboard
      </router-link>
      <span className="text-white cursor-pointer" @click="logout">Logout</span>
    </div>
    <div class="mt-10 mx-auto max-w-4xl">
      <Card> Dashboard </Card>
    </div>
  </div>
</template>
<script setup>
import { AuthService } from "@/services/auth.service.js";
import Card from "@/components/Card.vue";

const logout = () => {
  AuthService.logout();
};
</script>
