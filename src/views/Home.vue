<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Home page</p>
    <el-button type="primary" @click="addRoute">动态添加路由</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "@/router/index.js";
import { asyncRoutes } from "@/router/index.js";
export default {
  name: "Home",
  components: {},
  mounted() {
    console.log(router);
  },
  methods: {
    addRoute() {
      router.addRoute(asyncRoutes[0]);
    },
  },
};
</script>
