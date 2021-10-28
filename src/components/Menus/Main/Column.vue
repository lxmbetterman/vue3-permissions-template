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
      <div class="main-title">{{item.meta.title}}</div>
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
.main-column-menu-list{
  height: 100%;
  background-color: var(--my-color-background);
  padding-top: 10px;
}
.logo{
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
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
  color: var(--my-text-color-bg);
  transition: background-color .4s;
  font-size: 13px;
  &.active{
    font-weight: bold;
    color: var(--my-color-text-active);
    cursor: pointer;
    background-color: var(--el-color-primary);
    .main-column-menu-icon{
      font-weight: bold;
      font-size: 14px;
    }
    .main-title{
    }
  }
  &:hover{
    cursor: pointer;
    .main-column-menu-icon{
      font-weight: bold;
    }
    .main-title{
    }
  }
}
.main-column-menu-icon{
  margin-bottom: 5px;
}

</style>
