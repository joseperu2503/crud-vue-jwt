import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

export const TokenService = {
  saveToken(token){
    Cookies.set('token', token, {expires: 365, path: '/'})
  },
  getToken(){
    const token = Cookies.get('token')
    return token
  },
  removeToken(){
    Cookies.remove('token')
  },
  isValidToken(){
    console.log('isValidToken')
    const token = this.getToken()
    if(!token){
      return false
    }

    const decodeToken = jwt_decode(token)
    if(decodeToken && decodeToken?.exp){
      const tokenDate = new Date(0)
      tokenDate.setUTCSeconds(decodeToken.exp)
      const today = new Date()
      return tokenDate.getTime() > today.getTime()
    }
    return false
  }
}
