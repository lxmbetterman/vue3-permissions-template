<!--  -->
<template>
    <component :is="CurrentLayout"></component>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import layoutRepository from '@/components/Layout/layoutRepository.js'
export default {
  name: '',
  data() {
    return {
    //   currentTabComponent: 'Default'
    }
  },
  setup() {
    const { CurrentLayout, setCurrentLayout } = layoutRepository()
    return {
      CurrentLayout,
      setCurrentLayout
    }
  },

  components: {
    // 异步加载布局组件
    Default: defineAsyncComponent(() =>
      import('./Default/index.vue')
    ),
    Column: defineAsyncComponent(() =>
      import('./Column/index.vue')
    )
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
