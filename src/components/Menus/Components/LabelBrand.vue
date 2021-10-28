<!--  -->
<template>
  <div class="label-brand">
      <div class="label-brand-logo">Vue-Better-Admin</div>
      <div class="label-container">
        <div class="bar"></div>
        <span class="main-name">{{mainMenuName}}</span>
        <div class="bar"></div>
      </div>
  </div>
</template>

<script>
import menusRepositories from '@/repository/menus.js'
export default {
  name: '',
  data() {
    return {
    }
  },
  setup() {
    const { mainMenu, mainActiveName, mainMenuName } = menusRepositories()
    // const name = computed(() => {
    //   return mainMenu.value.filter((item) => {
    //     item.name = mainActiveName.value
    //   })[0].meta.title
    // })
    return {
      mainMenuName
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.label-brand{
    height: 70px;
    .label-brand-logo{
      text-align: center;
      color: #515a6e;
      line-height: 50px;
      font-size: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .label-container{
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #999;
      .bar{
        flex: 0 0 50px;
        height: 0;
        border-top: .5px solid #f4f4f4;

      }
      .main-name{
        font-size: 12px;
      }
    }
}
</style>
