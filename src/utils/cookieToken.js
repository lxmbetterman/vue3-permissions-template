import Cookies from 'js-cookie'

export const TokenKey = 'token-ofvue3-permission-template'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
