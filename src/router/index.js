import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '@/components/Layout/index.vue'
export const Layout = () => import('@/components/Layout/index.vue')
import { ref } from 'vue'

export const userAllowedPath = ref([]) // 全局
export const userAllowedAsyncPath = ref([]) // 全局

export const constantRoutes = [
  // constantRoutes 固定路由

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NoPermissionPage/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'IndexDic',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Index'),
        name: 'Index',
        meta: { title: '首页', icon: '' }
      },
      {
        path: 'about',
        component: () => import('@/views/About'),
        name: 'About',
        meta: { title: '', icon: '' }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/asyc',
    component: Layout,
    redirect: '/asyc/asycAbout',
    name: 'AsycDic',
    children: [
      {
        path: 'asycAbout',
        component: () => import('@/views/AsycAbout'),
        name: 'AsycAbout',
        meta: { title: '', icon: '' }
      }
    ]
  },
  {
    path: '/asyc2',
    component: Layout,
    redirect: '/asyc2/asycAbout2',
    name: 'AsycDic2',
    children: [
      {
        path: 'asycAbout2',
        component: () => import('@/views/AsycAbout2'),
        name: 'AsycAbout2',
        meta: { title: '', icon: '' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/menu',
    name: 'SystemManage',
    children: [
      {
        path: 'menu',
        component: () => import('@/views/System/menuList.vue'),
        name: 'MenuList',
        meta: { title: '', icon: '' }
      }
    ]
  }
]
export const finalRoutes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/index' }
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  // { path: '/user-:afterUser(.*)', redirect: '/index' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  userAllowedAsyncPath.value.map(route => { // 把异步路由全部删了，相当于重置路由
    router.removeRoute(route.name) // 删除父级路由，子路由同时删除
  })
}

export function getAllRoutes() {
  return router.getRoutes()
}

export function addAyscRoutes(userAllowedPathName = [], enableFilter = true) {
  // resetRouter()
  // 所有的路有应该

  if (enableFilter) {
    const filterMethod = (routes) => {
      const filteredRoutes = []
      routes.map(route => {
        const currentRoute = { ...route }
        if (userAllowedPathName.includes(currentRoute.name)) {
          if (currentRoute.children) {
            currentRoute.children = filterMethod(currentRoute.children)
          }
          filteredRoutes.push(currentRoute)
        }
      })
      return filteredRoutes
    }
    const filteredAsyncPath = filterMethod(asyncRoutes)

    // 全部的routes
    userAllowedPath.value = constantRoutes.concat(filteredAsyncPath)
    // 除开constant route
    userAllowedAsyncPath.value = filteredAsyncPath

    userAllowedPath.value.map(eachRoute => {
      router.addRoute(eachRoute)
    })
    finalRoutes.map(eachRoute => {
      router.addRoute(eachRoute)
    })
  } else {
    asyncRoutes.map(eachRoute => {
      router.addRoute(eachRoute)
    })
    finalRoutes.map(eachRoute => {
      router.addRoute(eachRoute)
    })
  }
}

export default router
