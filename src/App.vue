<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script>
import $http from './utils/aixosInstance'
import $utils from '@/utils/utils'
console.log($utils, 'testUtils')

import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    // 切换为中文
    const locale = zhCn
    return {
      locale
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
