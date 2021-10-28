<!--  -->
<template>
  <el-menu
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
