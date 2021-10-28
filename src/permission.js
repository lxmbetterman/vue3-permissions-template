import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/cookieTools' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'
import { toRaw } from '@vue/reactivity'
import userOperator from '@/repository/user.js'
const { currentUser, user_getInfo, user_logout } = userOperator()

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (currentUser.name) { // 这里是否有用户名初步判断是否已经登录
        // 取消上一个页面的axios请求
        for (var key in toRaw(store.getters.apiCtrlPool)) {
          store.getters.apiCtrlPool[key] && store.getters.apiCtrlPool[key](key) //
          // 取消请求后需要删除key吗，可以暂时不用删除key  ...
          store.dispatch('apiPool/handle_apiCtrlPool', { key, cancel: null }) //  cancel === null就 delete key
          // 重置loading
        }
        // 页面跳转需要重置loading吗？不需要，正常完成和取消请求的api都会在response拦截重置loading
        // store.dispatch('apiPool/handle_apiLoadingPool', { key, value: false }) // 完成正常请求 设置为非loading状态
        next()
      } else {
        try {
          await user_getInfo()
          // router.addRoute(asyncRoutes[0])
          // 刷新之后动态路由是没有加载的
          next({ ...to, replace: true }) // 刷新页面后，确保异步页面不留白
        } catch (error) {
          user_logout()
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

