<template>
  <div class="home">
    <p>Login page{{$utils.testUtils()}}</p>
    <el-button type="primary" @click="handleLogin" :loading='userLoading'>点击登录</el-button>
    <el-button type="primary" @click="getAllRoutes">checkAllroutes</el-button>

    <el-button type="primary" @click="test">test Aixoscancel</el-button>
    <el-button type="primary" @click="cancel">取消cancel</el-button>
  </div>
</template>

<script>

import { getAllRoutes, resetRouter } from '@/router/index.js'
import userOperator from '@/repository/user.js'

export default {
  name: 'Home',
  components: {},
  inject: ['$http', '$utils'], // 依赖注入的方式使用axios对象

  setup() {
    const { userLoading, user_login, user_getInfo } = userOperator()
    return {
      // 用户登录相关
      userLoading, user_login, user_getInfo
    }
  },
  mounted() {

  },
  methods: {
    async handleLogin() {
      try {
        await this.user_login()
        await this.user_getInfo()
        this.$router.push({ path: '/' })
      } catch (e) {
        console.log(e)
      }
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
          doNotCancle: false // 不能取消
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
    },
    showLoading() {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
