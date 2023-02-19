import http from "@/axios/index";
import { TokenService } from '@/services/token.service.js'
import { router } from "@/router";

export const AuthService = {
  login(email, password){
    return http.post("/login", {
      email,
      password,
    })
    .then(response => {
      TokenService.saveToken(response.data.access_token)
      router.push({name: "dashboard"});
    })
  },
  register(data){
    return http.post("/register", data)
    .then(response => {
      this.login(data.email, data.password)
    })
  },
  logout(){
    TokenService.removeToken()
    router.push('login')
  }
}
