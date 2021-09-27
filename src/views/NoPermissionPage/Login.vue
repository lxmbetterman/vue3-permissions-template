<template>
  <div class="home">
    <p>Login page</p>
    <!-- <el-button type="primary" @click="addRoute">动态添加路由</el-button> -->
    <el-button type="primary" @click="handleLogin">点击登录</el-button>
    <el-button type="primary" @click="getAllRoutes">checkAllroutes</el-button>
    <!--
    <el-button type="primary" @click="resetRoutes">resetRoutes</el-button> -->

  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router/index.js'
import { asyncRoutes, getAllRoutes, resetRouter, addAyscRoutes } from '@/router/index.js'
export default {
  name: 'Home',
  components: {},
  mounted() {
    console.log(router)
  },
  methods: {
    addRoute() {
      router.addRoute(asyncRoutes[0])
    },
    handleLogin() {
      console.log(getAllRoutes(), 'all routes')
      this.$store.dispatch('user/login')
        .then(() => {
          // 添加异步路由
          // this.addRoute() // 测试简单数据
          addAyscRoutes()
          this.$router.push({ path: '/asyc/asycAbout' })
          console.log(getAllRoutes(), 'logined all routes ')
        })
        .catch(() => {
        })
    },
    getAllRoutes() {
      console.log(getAllRoutes())
    },
    resetRoutes() {
      resetRouter()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
