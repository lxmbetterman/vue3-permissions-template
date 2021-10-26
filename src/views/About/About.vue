<!--  -->
<template>
  <div>
    about
    <hr>
    <div>
      <el-radio v-model="radio1" label="1">Option 1</el-radio>
      <el-radio v-model="radio1" label="2">Option 2</el-radio>
    </div>
    <hr>
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1"></el-slider>
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      radio1: '',
      radio2: '',
      value1: ''
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
