import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

export function useToken() {

  const saveToken = (token) => {
    Cookies.set('token', token, {expires: 365, path: '/'})
  }

  const getToken = () => {
    const token = Cookies.get('token')
    return token
  }

  const removeToken = () => {
    Cookies.remove('token')
  }

  const isValidToken = () => {
    console.log('isValidToken')
    const token = getToken()
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

  return {
    saveToken,
    getToken,
    removeToken,
    isValidToken
  }
}
