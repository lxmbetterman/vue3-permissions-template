<!--  -->
<template>
  <el-menu
    v-if="!loading"
    :default-active="$route.name"
    @select="handleSelect"
    ref="elMenu"
  >
    <!-- <div>{{mainActivePath}}</div>
    <div>{{minorActivePath}}</div>
    <el-button @click="test">show path|</el-button>
    <p>{{$route.name}}</p> -->
    <MenuItem v-for="(item,index) in minorMenuPath[0].children" :key="index" :menuItem="item"/>
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
    const { minorMenuPath, minorActivePath, mainActivePath } = menusRepositories()

    return {
      minorMenuPath,
      minorActivePath,
      mainActivePath
    }
  },

  components: { MenuItem },
  watch: {
    $route(newQuestion) {
      console.log(newQuestion, 'newQuestion')
      // this.CurrentRouteName = newQuestion.name
      // this.$refs.elMenu.open(newQuestion.name)
      this.loading = true
      setTimeout(() => { // v-if="!loading" 不能自定识别default-active 重新渲染，解决elementPlus的bug
        this.loading = false
      }, 0)
    }
  },
  computed: {
    // CurrentName
  },

  mounted() {
    // :default-active="$route.name"
    console.log(this.$route)
  },

  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath)
      this.$router.push({ name: index })
    },
    test() {
      console.log(this.minorMenuPath[0].children)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
