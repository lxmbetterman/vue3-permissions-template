<!-- 菜单收起/折叠 按钮 -->
<template>
  <div class="SwitchIcon" @click="toggleMenuCollapse">
    <my-icon v-if="!menusCollapse" name="iconFold"/>
    <my-icon v-else name="iconExpand"/>
  </div>
</template>

<script>
import layoutRepository from '@/components/Layout/layoutRepository.js'
export default {
  name: 'SwitchIcon',
  data() {
    return {
    }
  },
  setup() {
    const { menusCollapse, toggleMenuCollapse } = layoutRepository()
    return {
      menusCollapse, toggleMenuCollapse
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.SwitchIcon{
  margin-left: 10px;
  cursor: pointer;
}
</style>
