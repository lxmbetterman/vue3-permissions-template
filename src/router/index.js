import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

export const constantRoutes = [
  // constantRoutes 固定路由
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export const asyncRoutes = [
  {
    path: "/aboutAsync",
    name: "AboutAsync",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutAsync.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
