<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script>
import $http from './utils/aixosInstance'
import $utils from '@/utils/utils'

import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// import menusRepositories from '@/repository/menus.js'
export default {
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  watch: {
    // whenever question changes, this function will run
    // $route(newQuestion) {
    //   console.log(newQuestion, 'newQuestion')
    //   this.setMainActivePath(newQuestion.matched[0])
    // }
  },
  setup() {
    // 切换为中文
    const locale = zhCn

    //
    // const { setMainActivePath } = menusRepositories()
    return {
      locale
      // setMainActivePath
    }
  },
  provide() {
    return {
      $http, $utils
    }
  }
}

</script>

<style lang="scss">
body{
  overflow: hidden;
}
</style>
