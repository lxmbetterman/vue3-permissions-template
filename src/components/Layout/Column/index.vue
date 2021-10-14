<!--  -->
<template>
  <div class="layout-column">
      <div class="layout-column-menuContainer" :class="{collapse:columnCollapse}">
        <!-- 菜单左侧 -->
        <div class="parent-menu-container">
           <span @click="toggleColumnCollapse">a</span>
        </div>
        <!-- 菜单右侧 -->
        <div class="child-menu-container">菜单右侧</div>
      </div>
      <div class="layout-column-mainContainer">
          <router-view />
      </div>
  </div>
</template>

<script>
import columnRepositrory from './columnRepositrory'
export default {
  name: '',
  data() {
    return {
    }
  },
  setup() {
    const { columnCollapse, toggleColumnCollapse } = columnRepositrory()

    return {
      columnCollapse,
      toggleColumnCollapse
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.layout-column{
    width: 100vw;
    min-width: 50vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
    display: flex;

    .layout-column-menuContainer{
        flex: 0 0 266px;
        height: 100vh;
        background-color: aquamarine;
        transition: flex .2s;
        // 折叠样式
        &.collapse{
          flex: 0 0 64px;
        }

        display: flex;
        overflow: hidden;
        >.parent-menu-container{
          flex: 0 0 64px;
          height: 100vh;
          background-color: azure;
        }
        >.child-menu-container{
          flex: 1 1 auto;
          min-width: 120px;
          height: 100vh;
          background-color: #ddd;
        }

    }
    .layout-column-mainContainer{
        flex: 1 1 auto;
        height: 100vh;
    }
}
</style>
