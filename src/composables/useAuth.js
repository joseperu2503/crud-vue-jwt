
import http from '@/http/http.service'
import { useToken } from '@/composables/useToken'
import { useRouter } from 'vue-router';

export function useAuth() {
  const tokenService = useToken()
  const router = useRouter();

  const login = (data) => {
    return http.post("/auth/login", data)
    .then(response => {
      tokenService.saveToken(response.data.access_token)
      router.push({name: "dashboard"});
    })
  }

  const register = (data) => {
    return http.post("/auth/register", data)
    .then(response => {
      login({
        email: data.email,
        password: data.password
      })
    })
  }

  const logout = () => {
    tokenService.removeToken()
    router.push('login')
  }

  return {
    login,
    register,
    logout,
  }
}
