import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/Layout/Default'

// import Home from '../views/Home.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  asyncRoutes.map(route => { // 把异步路由全部删了，相当于重置路由
    router.removeRoute(route.name) // 删除父级路由，子路由同时删除
  })
}

export function getAllRoutes() {
  return router.getRoutes()
}

export function addAyscRoutes() {
  // resetRouter()
  // 所有的路有应该
  asyncRoutes.map(eachRoute => {
    router.addRoute(eachRoute)
  })
}

export default router
