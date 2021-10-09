import router, { addAyscRoutes } from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/cookieToken' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'
import { toRaw } from '@vue/reactivity'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // 判断是否根据token 获取了用户的登录信息 这里初步判断是否有用户名
      const hasUserInfo = store.getters.name !== ''
      if (hasUserInfo) {
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
          await store.dispatch('user/getInfo')
          // router.addRoute(asyncRoutes[0])
          addAyscRoutes()
          // 刷新之后动态路由是没有加载的
          next({ ...to, replace: true }) // 刷新页面后，确保异步页面不留白
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // Message.error(error || 'Has Error')
          alert('error')
          next(`/login`)
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

