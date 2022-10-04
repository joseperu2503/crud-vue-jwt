import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'login',
            component: () =>  import('../pages/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>  import('../pages/Register.vue'),
            props:true
        },
    ]
})

export { router }