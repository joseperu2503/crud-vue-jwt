<script setup>
import {ref, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

const token = computed(() => store.state.token)
const authorization = computed(() => store.getters.authorization)
console.log(token.value)
console.log(authorization.value)

// store.commit('getToken')

</script>

<template>
    <router-view/>
</template>

<style scoped>

</style>
