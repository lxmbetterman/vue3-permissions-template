<!--  -->
<template>
  <div class="layout-column">
      <div class="layout-column-menuContainer" :class="{collapse:columnCollapse}">
        <!-- 菜单左侧 -->
        <div class="parent-menu-container">
           <!-- <span @click="toggleColumnCollapse">
             <el-button type="primary">切换</el-button>
           </span> -->
           <MainColumnMenu />
        </div>
        <!-- 菜单右侧 -->
        <div class="child-menu-container">
          <MinorColumnMenu />
        </div>
      </div>
      <div class="layout-column-mainContainer">
          <router-link to="/">Index</router-link> |
            <router-link to="/about">About</router-link>|
            <router-link to="/asyc/asycAbout">AsycAbout</router-link>|
            <router-link to="/asyc2/asycAbout2">AsycAbout2</router-link>|
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

  components: { MainColumnMenu, MinorColumnMenu },

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
          width: 64px;
          height: 100vh;
          background-color: azure;
          // overflow: hidden;
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
