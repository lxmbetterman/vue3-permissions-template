<!--  -->
<template>
  <div class="tabSmooth">
      <!-- v-for="index in 20" :key="index" -->
      <div class="tabSmoothItem active" >
        页面标1
      </div>
      <div class="tabSmoothItem " >
        页面标
      </div>
      <div class="tabSmoothItem" >
        页面标2
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabSmooth',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.tabSmooth{
    height: 40px;
    background-color: #fff;
    display: flex;
    align-items: flex-end;
    align-content: flex-start;
    background-color: var(--el-color-primary-light-9);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px;
    .tabSmoothItem{

        flex: 1 1 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 120px;
        height: 38px;
        // background-color: '#fff';
        font-size: 12px;
        color: #666;
        cursor: pointer;
        margin: 0 -6px;
        transition: all .3s;
        &:hover{
          background-color: #eee;
          font-weight: bold;
          color: var(--el-color-primary-light-3);
          mask:url("./tabMask.png");
          mask-size:100% 100%;
          mask-repeat: no-repeat;
          padding: 0 3px;
        }
        &.active{
          background-color: #f9f9f9;
          font-weight: bold;
          color: var(--el-color-primary);
          mask:url("./tabMask.png");
          mask-size:100% 100%;
          mask-repeat: no-repeat;
          z-index: 100;
          height: 38px;
          padding: 0 5px;
        }

    }
}
</style>
