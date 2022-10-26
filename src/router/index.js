import { createRouter, createWebHistory } from "vue-router";
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import Home from '@/pages/Home.vue'
import store from '../store'

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

router.beforeEach(async (to, from) => {
    console.log(from , to)

    if(to.meta?.requiresAuth && to.redirectedFrom?.path != '/login'){
        console.log(store.state.token)
        store.commit('getToken')
        const checkToken = await  store.dispatch('checkToken')
        return checkToken ? true : '/login'
    }

    if(to.path == '/login' && !to.redirectedFrom?.meta?.requiresAuth){
        store.commit('getToken')
        const checkToken = await  store.dispatch('checkToken')
        return checkToken ? '/home' : true
    }
    return true
})


export { router }
