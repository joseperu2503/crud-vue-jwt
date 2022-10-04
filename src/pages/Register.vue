<template>
    <Layout>
        <Card>
            <h2 class="text-2xl font-bold">Sign Up</h2>
            <div class="grid grid-cols-2 gap-6 mt-6">
                <Input label="Name" type="text" placeholder="Jose"/>
                <Input label="Lastname" type="text" placeholder="Perez"/>
                <Input label="Username" type="text" placeholder="juniorp2503"/>
                <Input label="Password" type="password" placeholder="•••••••••"/>
                <Input label="Confirm Password" type="password" placeholder="•••••••••"/>
            </div>
            <div class="mt-10 flex items-center">
                <hr class="w-full border">
                <span class="mx-4">or</span>
                <hr class="w-full border">
            </div>
            <div class="flex flex-col gap-4 mt-10">
                <SocialButton text="Sign up with Facebook" img="src/assets/facebook.png"/>
                <SocialButton text="Sign up with Google" img="src/assets/google.png"/>
            </div>
            <div class="mt-6">
                <button type="button" class="w-full text-white bg-indigo-600 hover:bg-indigo-700 shadow border font-medium rounded-lg text-sm px-5 py-2 flex justify-center items-center">
                    Sign Up
                </button>
            </div>
            <p class="text-sm font-light text-slate-500 mt-4">
                Already have any account? 
                <span 
                    class="text-indigo-600 font-medium cursor-pointer"
                    @click="signIn"
                >
                    Sign In.
                </span>
            </p>
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
    
    const router = useRouter()
    const signIn = () => {
        router.push({
            name: 'login'
        })
    }
</script>