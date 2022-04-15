
import { getToken, setToken, TokenKey, removeToken } from '@/utils/cookieTools'
import { resetRouter, addAyscRoutes } from '@/router/index.js'
// import $http from '@/utils/aixosInstance'
import { reactive, ref } from 'vue'

const currentUser = reactive({
  token: getToken(),
  name: ''
})
const userLoading = ref(false)

export default function userOperator() {
  const user_login = async(userInfo) => { // const { username, password } = userInfo
    userLoading.value = true
    return new Promise((resolve, reject) => {
      /** 登陆获取token */

      // $http.get('/login').then(() => {
      //   currentUser.token = TokenKey
      //   setToken(TokenKey)
      //   resolve()
      // }).catch((err) => {
      //   userLoading.value = false
      //   reject(err)
      // })

      currentUser.token = TokenKey
      setToken(TokenKey)
      resolve()
    })
  }
  const user_getInfo = async() => { // 根据token请求信息
    return new Promise((resolve, reject) => {
      // $http.get('/userinfo').then((res) => {
      //   currentUser.name = 'lxmBetterMan'
      //   addAyscRoutes(res.userAllowedPathName, false) // false 不开启过滤
      //   resolve()
      //   userLoading.value = false
      // }).catch((err) => {
      //   reject(err)
      //   userLoading.value = false
      // })
      currentUser.name = 'lxmBetterMan'
      addAyscRoutes([], false) // false 不开启过滤
      resolve()
    })
  }
  const user_logout = () => {
    return new Promise((resolve, reject) => {
      currentUser.token = null
      currentUser.name = ''
      removeToken()
      resetRouter()
      resolve('退出登录')
    })
  }
  return { currentUser, userLoading, user_login, user_getInfo, user_logout }
}
