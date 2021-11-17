<!--  -->
<template>
  <el-menu
    class="custom-minor-comun-menus"
    :default-active="$route.name"
    @select="handleSelect"
    ref="elMenu"
  >
    <MenuItem v-for="(item) in minorMenu" :key="item.name" :menuItem="item"/>
  </el-menu>

</template>

<script>
import menusRepositories from '@/repository/menus.js'
import MenuItem from '../Components/MenuItem.vue'

export default {
  name: '',
  data() {
    return {
      loading: false,
      CurrentRouteName: ''
    }
  },
  setup() {
    const { minorMenu } = menusRepositories()
    return {
      minorMenu
    }
  },
  components: { MenuItem },
  computed: {
    // CurrentName
  },

  mounted() {
  },

  methods: {
    handleSelect(index, indexPath) {
      this.$router.push({ name: index })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>
<style lang='scss'>
.el-menu.custom-minor-comun-menus{
  width: 200px;
  margin: 0 auto;
  border-right: none;
  font-weight: bold;
  // 设置菜单的全局样式
  .el-menu-item{
    // margin: 20px;
    border-radius: 8px;
    font-size: 12px;
    height: 50px;
    line-height: 50px;
    margin: 2px 0;
  }
  .el-sub-menu__title{
    // margin: 20px;
    border-radius: 8px;
    font-size: 13px;
    height: 50px;
    line-height: 50px;
    margin: 2px 0;
    display: flex;
    align-items: center;
  }
  .el-menu-item:hover{
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
  .el-menu-item.is-active{
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
    font-weight: bold;
  }
  .el-sub-menu__title:hover{
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);

  }
}
</style>
