import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Layout1 from '@/layouts/layout1.vue';
import { TokenService } from '@/services/token.service.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: 'login',
    },
    {
      path: '',
      component: Layout1,
      meta: {
        redirect: true,
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
          props: true,
        },
      ]
    },
    {
      path: '',
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  // console.log(from, to);

  if (to.meta?.requiresAuth) {
    const isValidToken = TokenService.isValidToken()
    if(!isValidToken){
      router.push('/login');
    }
    return true;
  }

  if (to.meta?.redirect) {
    const isValidToken = TokenService.isValidToken()
    if(isValidToken){
      router.push('/dashboard');
    }
    return true;
  }

  return true;
});

export { router };
