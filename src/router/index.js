import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const constantRoutes = [
  // constantRoutes 固定路由
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

export const asyncRoutes = [
  {
    path: '/aboutAsync',
    name: 'AboutAsync',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutAsync.vue'),
    children: [
      {
        path: 'test1',
        component: () => import('../views/Test1.vue'),
        name: 'test1'
      },
      {
        path: 'test2',
        component: () => import('../views/Test2.vue'),
        name: 'test2'
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

export default router
