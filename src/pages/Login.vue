<template>
    <Layout>
        <Card>
            <h2 class="text-2xl font-bold">Welcome back</h2>
            <p class="text-sm font-light text-slate-500">
                Start your website in seconds. Don’t have an account?
                <span
                    class="text-indigo-600 font-medium cursor-pointer"
                    @click="signUp"
                >
                    Sign up.
                </span>
            </p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                <Input v-model="email" label="Username" type="text" placeholder="juniorp2503"/>
                <Input v-model="password" label="Password" type="password" placeholder="•••••••••"/>
            </div>
            <div class="mt-10 flex items-center">
                <hr class="w-full border">
                <span class="mx-4">or</span>
                <hr class="w-full border">
            </div>
            <div class="grid grid-cols-2 gap-4 mt-10">
                <SocialButton text="Sign in with Facebook" img="src/assets/facebook.png"/>
                <SocialButton text="Sign in with Google" img="src/assets/google.png"/>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row justify-between gap-2">
                <CheckBox v-model="remember" label="Remember me"/>
                <span class="text-sm text-indigo-600 font-medium hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <div class="mt-6">
                <button
                    type="button"
                    class="w-full text-white bg-indigo-600 hover:bg-indigo-700 shadow border font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center"
                    @click="login"
                >

                    Sign in to your account
                </button>
            </div>
        </Card>
    </Layout>
</template>
<script setup>
    import Layout from '@/layouts/LoginRegister.vue'
    import {ref} from 'vue'
    import Input from '@/components/Input.vue'
    import SocialButton from '@/components/SocialButton.vue'
    import CheckBox from '@/components/CheckBox.vue'
    import Card from '@/components/Card.vue'
    import { useRouter } from "vue-router";
    import { useStore } from 'vuex'

    const store = useStore();
    const email = ref('')
    const password = ref('')

    const remember = ref(true)
    const router = useRouter()
    const signUp = () => {
        router.push({
            name: 'register'
        })
    }

    const login = () => {
        // router.push({
        //     name: 'home'
        // })
        store.dispatch('login', {email: email.value , password: password.value})

    }
</script>
