import Cookies from 'js-cookie'

export const TokenKey = 'token-ofvue3-permission-template'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  /**
    let seconds = 10;

    let expires = new Date(new Date() * 1 + seconds * 1000);

    Cookies.set('username', 'tanggaowei', { expires: expires }); // 10 秒后失效
    ------
    Cookies.set('name', 'value', { expires: 7 }); // 7 天后失效
   */

  return Cookies.set(TokenKey, token, { expires: 1 })
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
