<!--  -->
<template>
  <div>
    <p>this is Index page</p>
    <p>vue3 语法学习</p>
    <p>{{count}}</p>
    <p>{{object.foo}}</p>
    <p>{{deepObj}}</p>
  </div>
</template>

<script>
// import { getAllRoutes } from '@/router/index.js'
import { ref, reactive } from 'vue'

export default {
  name: 'ProjectIndex',
  data() {
    return {
      aaa: '123'
    }
  },
  setup() {
    const count = ref(0)
    console.log(count.value, 'count')
    const object = reactive({ foo: 'bar' })
    const deepObj = {
      count
    }

    // 暴露到template中
    return {
      count,
      object,
      deepObj
    }
  },

  components: {},

  computed: {},

  mounted() {
    console.log(this)
  },

  methods: {
    testM1() {

    },
    testM2() {

    }
  }
}

</script>
<style lang='scss' scoped>
</style>
