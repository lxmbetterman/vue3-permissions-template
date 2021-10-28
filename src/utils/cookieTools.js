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

/**
 * 主题相关
 */
export const ThemeStyleName = 'token-ofvue3-permission-template'

export function getThemeStyleName() {
  return Cookies.get(ThemeStyleName) || 'default' // 默认default
}

export function setThemeStyleName(name) {
  return Cookies.set(ThemeStyleName, name)
}

export function removeThemeStyleName() {
  return Cookies.remove(ThemeStyleName)
}
