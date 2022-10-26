import axios from "axios"
import store from "../store/index.js"


// const tokenString = sessionStorage.getItem('token')
// const userToken = JSON.parse(tokenString)

const http = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
    headers:{
        'Content-type' : 'application/json'
    }
})

http.interceptors.request.use(
    request => {
        request.headers['Authorization'] = 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
        return request
    }
)

export default http
