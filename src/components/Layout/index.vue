<!--  -->
<template>
    <div class="admin-layout">
      <component :is="CurrentLayout"></component>
    </div>
</template>

<script>
import { defineAsyncComponent, markRaw } from 'vue'
import layoutRepository from '@/components/Layout/layoutRepository.js'
export default {
  name: 'AdminLayout',
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
    // 异步加载布局组件 markRaw
    Default: markRaw(defineAsyncComponent(() =>
      import('./Default/index.vue')
    )),
    Column: markRaw(defineAsyncComponent(() =>
      import('./Column/index.vue')
    ))
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
