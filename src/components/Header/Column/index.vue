<!--  -->
<template>
  <div class="column-header">
      <div class="leftheader">
        <Switch />
      </div>
      <div class="rightheader">
      <!-- <el-button @click="loginOut">退出登录</el-button> -->
      <Avatar/>
      </div>
  </div>
</template>

<script>

import Avatar from '@/components/Header/components/Avatar.vue'
// /Users/laixueming/BN/my-npm/vue3-permissions-template/src/components/Layout/components/Switch.vue
import Switch from '@/components/Layout/components/Switch.vue'
export default {
  name: 'ColumnHeader',
  data() {
    return {
    }
  },
  setup() {

  },

  components: { Avatar, Switch },

  computed: {},

  mounted() {},

  methods: {

  }
}

</script>
<style lang='scss' scoped>
.column-header{
  height: 100%;
  display: flex;
  .leftheader{
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  .rightheader{
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
