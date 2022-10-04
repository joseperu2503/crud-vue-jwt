import { createRouter, createWebHistory } from "vue-router";

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
            component: () =>  import('../pages/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () =>  import('../pages/Register.vue'),
            props:true
        },
        {
            path: '/home',
            name: 'home',
            component: () =>  import('../pages/Home.vue'),
        },
    ]
})

router.beforeEach((to, from) => {
    if(to.name == 'home' && from.name === 'login'){
        return true
    }
    return true
})


export { router }