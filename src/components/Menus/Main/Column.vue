<!--  -->
<template>
  <div class="main-column-menu-list">
    <div
      v-for="item in mainMenu"
      :key="item.name"
      class="main-column-menu-list-item"
      @click="ChangeMainMenu(item)"
      >
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
    const { mainMenu, setMainMenu, setMainActiveName, setMinorMenu, minorMenu } = menusRepositories()
    return {
      mainMenu, setMainMenu, setMainActiveName, setMinorMenu, minorMenu
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.setMainMenu()
    // 获取当前页面的main menu的name
    this.setMainActiveName(this.$route.matched[0].name)
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
.main-column-menu-list-item{
  width: 50px;
  height: 50px;
  margin: 2px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: #409eff;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
}

</style>
