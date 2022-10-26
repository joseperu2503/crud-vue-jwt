import http from '../axios/index'
import { createStore } from "vuex";
import { router } from '../router'


const store =  createStore({
    state(){
        return {
            token: ''
        }
    },
    getters:{
        authorization(state){
            return 'Bearer ' + state.token
        }
    },
    mutations: {
        getToken(state){
            console.log('getToken')
            const tokenString = sessionStorage.getItem('token')
            const userToken = JSON.parse(tokenString)
            state.token = userToken
            console.log(state.token)
        },
        setToken(state,token){
            sessionStorage.setItem('token', JSON.stringify(token))
            state.token = token
        }
    },
    actions: {
        async login({commit}, payload){
            await http.post('/login',{
                email: payload.email,
                password: payload.password
            })
            .then(response => {
                commit('setToken',response.data.access_token)
                router.push({
                    name: 'home'
                })
            })
        },
        async checkToken(){
            let check = false
            await http.get('/check-token')
            .then(response => {
                check = true
            }).catch(error => check = false)
            return check
        },
    }
})

export default store
