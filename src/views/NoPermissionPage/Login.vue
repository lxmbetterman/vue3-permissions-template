<template>
  <div class="home">
    <p>Login page{{$utils.testUtils()}}</p>
    <!-- <el-button type="primary" @click="addRoute">动态添加路由</el-button> -->
    <el-button type="primary" @click="handleLogin">点击登录</el-button>
    <el-button type="primary" @click="getAllRoutes">checkAllroutes</el-button>

    <el-button type="primary" @click="test">test Aixoscancel</el-button>
    <el-button type="primary" @click="cancel">取消cancel</el-button>
    <el-button type="primary" @click="showLoading" :loading="$store.getters.apiLoadingPool['/test/axios#get']">showLoading</el-button>

  </div>
</template>

<script>
// import axios from 'axios'
import store from '@/store'

// @ is an alias to /src
import router from '@/router/index.js'
import { asyncRoutes, getAllRoutes, resetRouter, addAyscRoutes } from '@/router/index.js'

export default {
  name: 'Home',
  components: {},
  inject: ['$http', '$utils'], // 依赖注入的方式使用axios对象
  // computed: {
  //   count() {
  //     // return this.$store.state.count
  //   }
  // },
  mounted() {

  },
  methods: {
    addRoute() {
      router.addRoute(asyncRoutes[0])
    },
    handleLogin() {
      // console.log(getAllRoutes(), 'all routes')
      this.$store.dispatch('user/login')
        .then(() => {
          // 添加异步路由
          // this.addRoute() // 测试简单数据
          addAyscRoutes()
          this.$router.push({ path: '/' })
          // console.log(getAllRoutes(), 'logined all routes ')
        })
        .catch(() => {
        })
    },
    getAllRoutes() {
      console.log(getAllRoutes())
    },
    resetRoutes() {
      resetRouter()
    },
    test() {
      // /dev-api/login   /test/axios
      this.$http.get('/test/axios', {
        params: {
          doNotCancle: false, // 不能取消
          markLoading: true
        },
        data: {
        }
      }
      ).then(res => {
        console.log(res)
      }).catch()
    },
    cancel() {
      console.log('开始取消')
      store.getters.apiCtrlPool['/test/axios#get']('/test/axios#get') // 手动取消传入key
    },
    showLoading() {
      console.log(store.getters.apiLoadingPool)
      console.log(store.getters.apiCtrlPool, 'apiCtrlPool')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
