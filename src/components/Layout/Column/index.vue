<!--  -->
<template>
  <div class="layout-column">
      <div class="column-menu-container" :class="{collapse:columnCollapse}">
        <!-- 菜单左侧 -->
        <div class="parent-menu-container">
          <MainColumnMenu />
        </div>
        <!-- 菜单右侧 -->
        <div class="child-menu-container">
          <LabelBrand />
          <MinorColumnMenu/>
        </div>
      </div>
      <div class="column-container"  v-resize="calculateSize">
          <AdminHeader ref="header" />
          <div class="column-content">
            <router-view />
          </div>
      </div>
  </div>
</template>

<script>
import columnRepositrory from './columnRepositrory'

import MainColumnMenu from '@/components/Menus/Main/Column.vue'
import MinorColumnMenu from '@/components/Menus/Minor/Column.vue'
import LabelBrand from '../../Menus/Components/LabelBrand.vue'
import AdminHeader from '@/components/Header'
export default {
  name: '',
  data() {
    return {
    }
  },
  setup() {
    const { columnCollapse, toggleColumnCollapse } = columnRepositrory()

    return {
      columnCollapse, toggleColumnCollapse

    }
  },

  components: { MainColumnMenu, MinorColumnMenu, LabelBrand, AdminHeader },

  computed: {},

  mounted() {

  },
  methods: {
    calculateSize() {
      //
      console.log(this.$refs.header.$el.offsetHeight, 'this.$refs.header')
      console.log(this.$el.offsetHeight, 'this.$refs.layout')
      console.log(this.$el.offsetHeight - this.$refs.header.$el.offsetHeight)
    }

  }
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
    user-select: none;
    .column-menu-container{
        flex: 0 0 288px;
        height: 100vh;
        transition: flex .2s;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

        // 折叠样式
        &.collapse{
          flex: 0 0 64px;
        }

        display: flex;
        overflow: hidden;
        >.parent-menu-container{
          flex: 0 0 64px;
          width: 64px;
          height: 100vh;
          background-color: var(--myThemeBackgroundColor);
          // overflow: hidden;
        }
        >.child-menu-container{
          flex: 1 1 auto;
          min-width: 120px;
          height: 100vh;
        }

    }
    .column-container{
        flex: 1 1 auto;
        height: 100vh;
        padding: 0 15px;
        overflow: auto;
        .column-content{

        }
    }
}
</style>
