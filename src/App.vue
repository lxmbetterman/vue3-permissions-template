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
import initThemeColor from '@/utils/themeColor'
initThemeColor()
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

// .el-button--primary {
//     --el-button-font-color: #ffffff;
//     --el-button-background-color: #41b584;
//     --el-button-border-color: #41b584;
//     --el-button-hover-color: #67c49d;
//     --el-button-active-font-color: #e6e6e6;
//     --el-button-active-background-color: #348f69;
//     --el-button-active-border-color: #348f69;
// }
</style>
