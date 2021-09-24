<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Home page</p>
    <el-button type="primary" @click="addRoute">动态添加路由</el-button>
    <el-button type="primary" @click="handleLogin">点击登录</el-button>
    <el-button type="primary" @click="getAllRoutes">checkAllroutes</el-button>
    <el-button type="primary" @click="resetRoutes">resetRoutes</el-button>

  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router/index.js'
import { asyncRoutes, getAllRoutes, resetRouter } from '@/router/index.js'
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
      this.$store.dispatch('user/login')
        .then(() => {
          this.$router.push({ path: '/aboutAsync' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
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
