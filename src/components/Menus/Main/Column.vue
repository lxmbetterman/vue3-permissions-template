<!--  -->
<template>
  <div class="main-column-menu-list">
    <img class="logo" src="@/assets/logo.png" alt="lgon">
    <div
      v-for="item in mainMenu"
      :key="item.name"
      class="main-column-menu-list-item"
      :class="{active:item.name===mainActiveName}"
      @click="ChangeMainMenu(item)"
      >
      <el-icon class="main-column-menu-icon">
        <iconAddLocation />
      </el-icon>
      {{item.meta.title}}
    </div>
  </div>
</template>

<script>
import menusRepositories from '@/repository/menus.js'

export default {
  name: 'MainColumnMenu', // baba is a big pig and he is ugly and fat but i still love him
  data() {
    return {
      mainMenuLists: []
    }
  },
  setup() {
    const { mainMenu, mainActiveName, setMainMenu, setMainActiveName, setMinorMenu, minorMenu } = menusRepositories()
    return {
      mainMenu, mainActiveName, setMainMenu, setMainActiveName, setMinorMenu, minorMenu
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.setMainMenu()
    this.setMainActiveName(this.$route.matched[0].name) // 获取当前页面的main menu的name
    this.setMinorMenu()
  },

  methods: {
    ChangeMainMenu(route) {
      this.setMainActiveName(route.name)
      this.setMinorMenu() // 选中main menu 后 set minor menu
      this.$router.push(route.path)
    }
  }
}

</script>
<style lang='scss' scoped>
.logo{
    width: 50px;
    height: 50px;
    display: block;
    margin: 5px auto;
  }
.main-column-menu-list-item{

  width: 50px;
  height: 50px;
  margin: 2px auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.active{
    font-weight: bold;
    // color: #fff;
    cursor: pointer;
    .main-column-menu-icon{
      font-weight: bold;
      font-size: 16px;
      color: $color-primary;
    }
  }
  &:hover{
    // background-color: #409eff;
    font-weight: bold;
    // color: #fff;
    cursor: pointer;
    .main-column-menu-icon{
      font-weight: bold;
      font-size: 16px;
    }
  }
}
.main-column-menu-icon{
  margin-bottom: 5px;
}

</style>
