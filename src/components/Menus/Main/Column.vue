<!--  -->
<template>
    <div>
      <!-- <el-button @click="test" size='mini'>all menu</el-button> -->
      <div class="main-column-menu-list">
        <div
          v-for="item in mainMenuPath"
          :key="item.name"
          class="main-column-menu-list-item"
          @click="ChangeMainMenu(item)"
          >
          {{item.meta.title}}
        </div>
      </div>
    </div>
</template>

<script>
import { userAllowedPath } from '@/router/index.js'
console.log((userAllowedPath.value), 'userAllowedPath')
import menusRepositories from '@/repository/menus.js'

export default {
  name: 'MainColumnMenu', // baba is a big pig and he is ugly and fat but i still love him
  data() {
    return {
    }
  },
  setup() {
    const { mainMenuPath, setMainMenuPath } = menusRepositories()
    return {
      mainMenuPath, setMainMenuPath
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.setMainMenuPath()
  },

  methods: {
    ChangeMainMenu(route) {
      console.log(route)
      this.$router.push(route.path)
    },
    test() {
      console.log(this.mainMenuPath, 'mainMenuPath')
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
