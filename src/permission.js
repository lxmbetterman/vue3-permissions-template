import router, { addAyscRoutes } from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/cookieToken' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

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
      // alert(1)
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // alert(2)
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

