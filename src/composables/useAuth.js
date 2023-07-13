
import http from '@/http/http.service'
import { useToken } from '@/composables/useToken'
import { useRouter } from 'vue-router';
import { ref } from "vue";

export function useAuth() {
  const tokenService = useToken()
  const router = useRouter();

  const errors = ref({});
  const loading = ref(false);

  const formLogin = ref({
    email: "",
    password: "",
  });
  const remember = ref(true);
  const login = () => {
    loading.value = true
    http.post("/login", formLogin.value)
    .then(response => {
      loading.value = false
      tokenService.saveToken(response.data.access_token)
      router.push({name: "dashboard"});
    })
    .catch((error) => {
      loading.value = false
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
  }

  const formRegister = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const register = () => {
    loading.value = true
    http.post("/register", formRegister.value)
    .then(response => {
      formLogin.value = {
        email: formRegister.value.email,
        password: formRegister.value.password
      }
      login()
    })
    .catch((error) => {
      loading.value = false
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
  }

  const logout = () => {
    tokenService.removeToken()
    router.push('login')
  }

  return {
    login,
    register,
    logout,
    errors,
    loading,
    formLogin,
    formRegister,
    remember
  }
}
