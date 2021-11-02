<!--  -->
<template>
    <!-- 递归

        * if no Children
            * 只展示一级目录
        * if Children
            * 调用当前组件
     -->
    <el-sub-menu :index="menuItem.name" v-if="menuItem.children&&menuItem.children.length>0">
        <template #title>
          <!-- <el-icon :size="16" class="menuIcon">
            <component :is="menuItem.meta.icon"></component>
          </el-icon> -->
          <my-icon :name="menuItem.meta.icon" />
          <span>{{menuItem.meta.title||'-'}}</span>
        </template>
        <MenuItem v-for="(item, index) in menuItem.children" :key="index" :menuItem="item"/>
    </el-sub-menu>

    <el-menu-item :index="menuItem.name" v-else>
        <template #title>
          <!-- <el-icon :size="16" class="menuIcon">
            <component :is="menuItem.meta.icon"></component>
          </el-icon> -->
          <my-icon :name="menuItem.meta.icon" />
          <span>{{menuItem.meta.title||'-'}}</span>
        </template>
    </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menuItem: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {

  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.menuIcon{
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
