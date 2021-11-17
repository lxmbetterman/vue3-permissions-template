<!--  -->
<template>
    <div class="MyBreadcrumb">
    <!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="(item,index) in MyBreadcrumbList"
                :key="index"
                :to="{ path: item.path }">
                <span class="breadcrumb-item">
                    <my-icon :name="item.meta.icon" :custom="item.meta.custom" :class="{'custom':!item.meta.custom}"/>
                    {{item.meta.title}}
                </span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'MyBreadcrumb',
  data() {
    return {
      MyBreadcrumbList: []
    }
  },

  components: {},

  computed: {},

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
.MyBreadcrumb{
    margin-left: 10px;
    .custom{
        position: relative;
        top: 2px;
    }
}
</style>
