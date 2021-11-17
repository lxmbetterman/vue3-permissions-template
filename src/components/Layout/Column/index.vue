<!--  -->
<template>
  <div class="layout-column">
      <div class="column-menu-container" :class="{collapse: menusCollapse}">
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
          <el-scrollbar :style="{height:contentHeight-31+'px'}" class="content-scroller" ref="scroller">
            <router-view class="column-content-page" />
          </el-scrollbar>
          <CopyRight />
      </div>
  </div>
</template>

<script>
import layoutRepository from '@/components/Layout/layoutRepository.js'

import MainColumnMenu from '@/components/Menus/Main/Column.vue'
import MinorColumnMenu from '@/components/Menus/Minor/Column.vue'
import LabelBrand from '../../Menus/Components/LabelBrand.vue'
import AdminHeader from '@/components/Header'
import CopyRight from '@/components/Layout/components/CopyRight.vue'
export default {
  name: '',
  data() {
    return {
      contentHeight: 0
    }
  },
  setup() {
    const { menusCollapse } = layoutRepository()

    return {
      menusCollapse

    }
  },

  components: { MainColumnMenu, MinorColumnMenu, LabelBrand, AdminHeader, CopyRight },

  computed: {},

  mounted() {

  },
  methods: {
    calculateSize() {
      this.contentHeight = this.$el.offsetHeight - this.$refs.header.$el.offsetHeight - 3
      // console.log(this.contentHeight)
      setTimeout(() => {
        this.$refs.scroller.update()
      }, 0)
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
    .column-menu-container{
        flex: 0 0 288px;
        height: 100vh;
        transition: flex .2s;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
        user-select: none;

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
        overflow: hidden;
        .content-scroller{
          padding: 5px 15px;
          padding-left: 10px;
          background-color: #f9f9f9;
          // overflow: auto;
          .column-content-page{
            background-color: #fff;
          }
        }
    }
}
</style>
