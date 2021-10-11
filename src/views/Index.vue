<!--  -->
<template>
  <div>
    <p>this is Index page</p>
    <p>vue3 语法学习</p>

    <el-select v-model="test" placeholder="Select">
      <el-option
        v-for="item in select1Data"
        :key="item"
        :label="item"
        :value="item"
      >
    </el-option>
  </el-select>
    <el-select v-model="test2" placeholder="Select">
      <el-option
        v-for="item in select2Data"
        :key="item"
        :label="item"
        :value="item"
      >
    </el-option>
  </el-select>
  </div>
</template>

<script>
// import { getAllRoutes } from '@/router/index.js' // watch
// import { ref, reactive, getCurrentInstance, watch } from 'vue'
import { onMounted } from 'vue'

import selectDataRepo from '@/repository/select.js'
console.log(selectDataRepo, 'selectDataReposelectDataRepo')

export default {
  name: 'ProjectIndex',
  data() {
    return {
      aaa: 1,
      test: 'bbb',
      test2: 'ccc'
    }
  },
  setup(prop, context) {
    const { select1Data, get_select1Data } = selectDataRepo('select1Data')
    const { select2Data, get_select2Data } = selectDataRepo('select2Data')
    // 暴露到template中
    onMounted(() => {
      // getSelect1Data()
      console.log(get_select1Data)
      console.log('onMountedonMounted')
    })
    return {
      select1Data, get_select1Data,
      select2Data, get_select2Data
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.get_select1Data()
    this.get_select2Data()
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
