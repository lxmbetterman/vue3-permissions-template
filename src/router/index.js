import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '@/components/Layout/index.vue'
export const Layout = () => import('@/components/Layout/index.vue')
export const Blank = () => import('@/components/Layout/Blank.vue')
import { ref } from 'vue'

export const userAllowedPath = ref([]) // 全局
export const userAllowedAsyncPath = ref([]) // 全局

export const constantRoutes = [
  // constantRoutes 固定路由

  {
    path: '/login',
    name: 'Login',
    hidden: true,
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
    meta: { title: '首页', icon: 'iconHomeFilled' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Index'),
        name: 'Index',
        meta: { title: '首页', icon: 'iconHouse' }
      },
      {
        path: 'about',
        component: () => import('@/views/About/About'),
        name: 'About',
        redirect: '/about/aboutChild',
        meta: { title: '关于', icon: 'iconService' },
        children: [
          {
            path: 'aboutChild',
            component: () => import('@/views/About/AboutChild'),
            name: 'AboutChild',
            meta: { title: '子页面', icon: 'iconService' }
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/components',
    component: Layout,
    redirect: '/components/iconIndex',
    name: 'Components',
    meta: { title: '组件', icon: 'eye', custom: true },
    children: [
      {
        path: 'iconIndex',
        // /Users/laixueming/BN/my-npm/vue3-permissions-template/src/views/ComponentsDisplay/myIcons
        component: () => import('@/views/ComponentsDisplay/myIcons/index'),
        name: 'IconIndex',
        meta: { title: '图标', icon: 'icons', custom: true },
        redirect: '/components/iconIndex/elePlusIcons',
        children: [
          {
            path: 'elePlusIcons',
            // /Users/laixueming/BN/my-npm/vue3-permissions-template/src/views/ComponentsDisplay/myIcons
            component: () => import('@/views/ComponentsDisplay/myIcons/elePlusIcons'),
            name: 'ElePlusIcons',
            meta: { title: 'Ele内置图标', icon: 'eye', custom: true }
          },

          {
            path: 'svgIcon',
            // /Users/laixueming/BN/my-npm/vue3-permissions-template/src/views/ComponentsDisplay/myIcons
            component: () => import('@/views/ComponentsDisplay/myIcons/svgIcon'),
            name: 'SvgIcon',
            meta: { title: 'svg自定义图标', icon: 'eye', custom: true }
          }
        ]
      }
    ]

  },
  {
    path: '/asyc',
    component: Layout,
    redirect: '/asyc/asycAbout',
    name: 'AsycDic',
    meta: { title: '异步', icon: 'eye', custom: true },
    children: [
      {
        path: 'asycAbout',
        component: () => import('@/views/Asyc/AsycAbout'),
        name: 'AsycAbout',
        meta: { title: 'AsycAbout', icon: 'eye', custom: true }
      }
    ]
  },
  {
    path: '/asyc2',
    component: Layout,
    redirect: '/asyc2/asycAbout2',
    name: 'AsycDic2',
    meta: { title: '异步', icon: 'iconService' },
    children: [
      {
        path: 'asycAbout2',
        component: () => import('@/views/Asyc/AsycAbout2'),
        name: 'AsycAbout2',
        meta: { title: '异步页面', icon: 'iconService' }
      }
    ]
  },
  {
    path: '/visualization',
    component: Layout,
    redirect: '/visualization/x6',
    name: 'Visualization',
    meta: { title: '可视化', icon: 'iconTrendCharts' },
    children: [
      {
        path: 'x6',
        component: Blank,
        redirect: '/visualization/x6/vueNode',
        name: 'Visualization',
        meta: { title: 'X6示例集合', icon: 'iconTrendCharts' },
        children: [
          {
            path: 'vueNode',
            component: () => import('@/views/Visualization/X6/page/regisVueComponent.vue'),
            name: 'vueNode',
            meta: { title: '自定义Vue组件节点', icon: 'iconTrendCharts' }
          },
          {
            path: 'basicClassCell',
            component: () => import('@/views/Visualization/X6/page/basicClassCell.vue'),
            name: 'BasicClassCell',
            meta: { title: 'Cell基类', icon: 'iconTrendCharts' }
          }
        ]
      }
    ]
  },
  {
    path: '/study',
    component: Layout,
    redirect: '/study/lodash',
    name: 'Study',
    meta: { title: '学习', icon: 'iconTrendCharts' },
    children: [
      {
        path: 'lodash',
        component: () => import('@/views/Study/lodash.vue'),
        name: 'Lodash',
        meta: { title: 'lodash学习', icon: 'iconTrendCharts' }
      }
    ]
  },
  {
    path: '/webgis',
    component: Layout,
    redirect: '/webgis/openLayers',
    name: 'webgis',
    meta: { title: 'WebGis', icon: 'iconTrendCharts' },
    children: [
      {
        path: 'openLayers',
        component: Blank,
        redirect: '/webgis/openLayers/index',
        name: 'openLayers',
        meta: { title: 'openLayers例子', icon: 'iconTrendCharts' },
        children: [
          {
            path: 'index',
            component: () => import('@/views/Webgis/OpenLayers/index.vue'),
            name: 'openLayersIndex',
            meta: { title: 'openLayers首页', icon: 'iconTrendCharts' }
          },
          {
            path: 'accessibleMap',
            component: () => import('@/views/Webgis/OpenLayers/AccessibleMap.vue'),
            name: 'AccessibleMap',
            meta: { title: 'AccessibleMap例一', icon: 'iconTrendCharts' }
          },
          {
            path: 'AdvancedViewPositioning',
            component: () => import('@/views/Webgis/OpenLayers/AdvancedViewPositioning.vue'),
            name: 'AdvancedViewPositioning',
            meta: { title: '高级视图定位例二', icon: 'iconTrendCharts' }
          },
          {
            path: 'AnimatedGIF',
            component: () => import('@/views/Webgis/OpenLayers/AnimatedGIF.vue'),
            name: 'AnimatedGIF',
            meta: { title: 'GIF图表基本操作', icon: 'iconTrendCharts' }
          },
          {
            path: 'ArcGISMapServer',
            component: () => import('@/views/Webgis/OpenLayers/ArcGISMapServer.vue'),
            name: 'ArcGISMapServer',
            meta: { title: 'ArcGISMapServer图层', icon: 'iconTrendCharts' }
          },
          {
            path: 'GaoDeMap',
            component: () => import('@/views/Webgis/OpenLayers/GaoDeMap.vue'),
            name: 'GaoDeMap',
            meta: { title: '高德图层', icon: 'iconTrendCharts' }
          }
        ]
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
  finalRoutes.map(route => {
    router.removeRoute(route.name)
  })
}

export function getAllRoutes() {
  return router.getRoutes()
}

export function addAyscRoutes(userAllowedPathName = [], enableFilter = true) {
  // resetRouter()
  // 所有的路有应该

  if (enableFilter) {
    /**
     * 过滤函数关键点应该是传入一个[]，返回 []
     * @param {*} routes[]
     * @returns 过滤后的路由[]
     */
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

    // allPath 和 AsyncPath
    userAllowedPath.value = constantRoutes.concat(filteredAsyncPath)
    userAllowedAsyncPath.value = filteredAsyncPath
  } else { // 本地模式
    // allPath 和 AsyncPath
    userAllowedPath.value = constantRoutes.concat(asyncRoutes)
    userAllowedAsyncPath.value = asyncRoutes
  }

  // 公共部分
  userAllowedAsyncPath.value.map(eachRoute => {
    router.addRoute(eachRoute)
  })
  finalRoutes.map(eachRoute => {
    router.addRoute(eachRoute)
  })
}

export default router
