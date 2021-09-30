<template>
  <div class="home">
    <p>Login page</p>
    <!-- <el-button type="primary" @click="addRoute">动态添加路由</el-button> -->
    <el-button type="primary" @click="handleLogin">点击登录</el-button>
    <el-button type="primary" @click="getAllRoutes">checkAllroutes</el-button>

    <el-button type="primary" @click="test">test Aixoscancel</el-button>
    <el-button type="primary" @click="cancel">取消cancel</el-button>

  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'

// @ is an alias to /src
import router from '@/router/index.js'
import { asyncRoutes, getAllRoutes, resetRouter, addAyscRoutes } from '@/router/index.js'
import { ref } from 'vue'
// import _axiosPromiseArr from '@/utils/test'

export default {
  name: 'Home',
  components: {},
  inject: ['$http'],
  mounted() {
    // console.log(router)
    // console.log(this.$http === https, 'this')

  },
  setup(props) {
    const CancelToken = ref(null)
    const source = ref(null) // { cancel, token }
    return {
      CancelToken,
      source
    }
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
    },
    test() {
      // const CancelToken = axios.CancelToken
      // const source = CancelToken.source() // { cancel, token }

      // // console.log(this.source, 'source')
      // this.CancelToken = axios.CancelToken
      // this.source = this.CancelToken.source()

      this.$http.get('/login').then(res => {
        console.log(res)
      }).catch(
        function(thrown) {
          if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message)
          } else {
            // handle error
          }
        }
      )
    },
    // cancel() {
    //   console.log('开始取消')
    //   console.log(this.source)
    //   this.source.cancel('执行this.source.cancel')
    // }
    cancel() {
      console.log('开始取消')
      console.log(store.getters.apiCtlPool, 'apiCtlPool')
      store.getters.apiCtlPool['/login#get']('sssss')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
