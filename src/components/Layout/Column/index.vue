<!--  -->
<template>
  <div class="layout-column">
      <div class="layout-column-menuContainer"></div>
      <div class="layout-column-mainContainer">
          <router-view />
      </div>
  </div>
</template>

<script>
export default {
  name: '',
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
.layout-column{
    width: 100vw;
    min-width: 50vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
    display: flex;

    .layout-column-menuContainer{
        flex: 0 0 266px;
        height: 100vh;
        background-color: aquamarine;
    }
    .layout-column-mainContainer{
        flex: 1 1 auto;
        height: 100vh;
    }
}
</style>
