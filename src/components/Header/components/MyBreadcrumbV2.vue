<!--  -->
<template>
    <div class="MyBreadcrumbV2">
      <!-- 面包屑 -->
      <div v-for="(item,index) in MyBreadcrumbList" :key="index" class="breadcrumbItem" >
        <my-icon class="bIcon" :name="item.meta.icon" :custom="item.meta.custom" />
        <span>{{item.meta.title}}</span>
        <span class="separator">/</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MyBreadcrumbV2',
  data() {
    return {
      MyBreadcrumbList: []
    }
  },

  components: {},

  computed: {
    bLen() { // 面包屑长度
      return this.MyBreadcrumbList.length
    }
  },

  mounted() {
    this.handleMyBreadcrumbData(this.$route.matched)
  },
  watch: {
    $route(newRoute) {
      this.handleMyBreadcrumbData(newRoute.matched)
    }
  },

  methods: {
    handleMyBreadcrumbData(matched) {
      this.MyBreadcrumbList = matched.slice(1).map(item => {
        return { meta: item.meta, path: item.path }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.MyBreadcrumbV2{

  margin-left: 20px;
  flex-wrap: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 13px;
  .breadcrumbItem{
    height: 22px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      font-weight: bold;
      cursor: pointer;
      background-color: #dff;
    }
    .bIcon{
      margin-right: 5px;
    }
    .separator{
      margin: 0 5px;
    }
  }
}
</style>
