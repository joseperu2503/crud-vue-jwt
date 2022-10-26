import { createRouter, createWebHistory } from "vue-router";
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Home from '@/pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect:'login',
        },
        {
            path: '/login',
            name:'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            props:true
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
    ]
})

router.beforeEach((to, from) => {
    if(to.meta?.requiresAuth){
        return 'login'
    }
    return true
})


export { router }