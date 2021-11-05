<!--  -->
<template>
  <div class="layout-column">
      <div class="layout-column-menuContainer" :class="{collapse:columnCollapse}">
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
      <div class="layout-column-mainContainer">
          <el-button @click="loginOut">退出登录</el-button>
          <router-view />
      </div>
  </div>
</template>

<script>
import columnRepositrory from './columnRepositrory'
import userOperator from '@/repository/user.js'
import MainColumnMenu from '@/components/Menus/Main/Column.vue'
import MinorColumnMenu from '@/components/Menus/Minor/Column.vue'
import LabelBrand from '../../Menus/Components/LabelBrand.vue'
export default {
  name: '',
  data() {
    return {
    }
  },
  setup() {
    const { columnCollapse, toggleColumnCollapse } = columnRepositrory()
    const { user_logout } = userOperator()

    return {
      columnCollapse, toggleColumnCollapse,
      user_logout
    }
  },

  components: { MainColumnMenu, MinorColumnMenu, LabelBrand },

  computed: {},

  mounted() {

  },
  methods: {
    loginOut() {
      this.user_logout().then((res) => {
        console.log(res, 'reee')
        this.$router.replace({ path: '/login', replace: true })
      })
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
    .layout-column-menuContainer{
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
    .layout-column-mainContainer{
        flex: 1 1 auto;
        height: 100vh;
        padding: 0 15px;
        overflow: auto;
    }
}
</style>
