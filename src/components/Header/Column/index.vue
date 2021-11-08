<!--  -->
<template>
  <div>
      ColumnHeader
      <el-button @click="loginOut">退出登录</el-button>
  </div>
</template>

<script>
import userOperator from '@/repository/user.js'
export default {
  name: 'ColumnHeader',
  data() {
    return {
    }
  },
  setup() {
    const { user_logout } = userOperator()

    return {
      user_logout
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    loginOut() {
      this.user_logout().then((res) => {
        console.log(res, 'reee')
        this.$router.replace({ path: '/login', replace: true })
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
