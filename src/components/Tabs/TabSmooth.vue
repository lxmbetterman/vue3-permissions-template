<!--  -->
<template>
  <div class="tabSmooth">
      <!-- v-for="index in 20" :key="index" -->

      <!-- <div class="tabSmoothItem" >
        页面标1
      </div>
      <div class="tabSmoothItem active" >
        页面标
      </div> -->
      <template v-for="(route) in tabLables.normalTabs" :key="route.name">
        <div
          class="tabSmoothItem"
          :class="{active:route.active}"
          @click="doClickTab(route)">
            <div class="padding"></div>
            <my-icon class="icon" :custom="route.meta.custom" :name="route.meta.icon" :size="10" ></my-icon>
            <div class="title">{{route.meta.title}}</div>
            <my-icon v-if="route.name!=='Index'" @click.stop="closeTab(route)" class="close" name="iconCircleCloseFilled" :size="12"></my-icon>
            <div class="padding"></div>
        </div>
        <!-- <div class="labelDivider">|</div> -->
      </template>

      <!-- <button @click="test">test</button> -->
  </div>
</template>

<script>
import tabLablesRepository from './tabLablesRepository.js'

export default {
  name: 'TabSmooth',
  data() {
    return {
    }
  },
  setup() {
    const { tabLables, tabActive, removeTab } = tabLablesRepository()

    return {
      tabLables,
      tabActive, removeTab
    }
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {
    test() {
      console.log(this.tabLables, 'tabLables')
    },
    closeTab(route) {
      this.removeTab(route)
    },
    doClickTab(route) {
      this.tabActive(route)
      this.$router.push({ name: route.name })
    }
    // activeTab(currentRoute) {
    //   const allTabs = [...this.tabLables.normalTabs, ...this.tabLables.constTabs]
    //   allTabs.map(route => {
    //     route.active = false
    //     if (currentRoute.name === route.name) {
    //       route.active = true
    //     }
    //   })
    // }
  }
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
        justify-content: flex-start;
        max-width: 150px;
        height: 38px;
        overflow: hidden;
        font-size: 12px;
        color: #666;
        cursor: pointer;
        margin: 0 -6px;
        transition: all .3s;
        padding-left: 5px;

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
        .padding{
          flex: 0 0 8px;
          // width: 20px;
          height: 12px;
          display: block;
        }
        .icon{
          flex: 0 0 12px;
          height: 12px;
          margin-right: 5px;
        }
        .title{
          flex: 1 1 70px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .close{
          display: none;

        }
        &:hover .close{
          display: block;
          font-size: 14px;
        }

    }
    .labelDivider{
      height: 100%;
      width: 1;
      line-height: 40px;
      color: #ddd;
    }
}
</style>
