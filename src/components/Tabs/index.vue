<!--  -->
<template>
    <component style="height:40px" :is="'TabSmooth'"></component>
</template>

<script>
import { defineAsyncComponent, markRaw } from 'vue'
import tabLablesRepository from './tabLablesRepository.js'

export default {
  name: 'TabLabels',
  data() {
    return {
    //   currentTabComponent: 'Default'
    }
  },
  setup() {
    const { addNormalTab } = tabLablesRepository()

    return {
      addNormalTab
    }
  },

  components: {
    // 异步加载布局组件 markRaw
    TabSmooth: markRaw(defineAsyncComponent(() =>
      import('./TabSmooth.vue')
    ))
  },
  watch: {
    // whenever question changes, this function will run
    $route(newRoute) {
      this.addNormalTab(newRoute)
    }
  },

  mounted() {
    this.addNormalTab(Object.assign(this.$route, { active: true }))
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
