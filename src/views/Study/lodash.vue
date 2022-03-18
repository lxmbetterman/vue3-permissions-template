<!--  -->
<template>
  <div>
      <pre>
        <code>
          const a = [
            { name: '1', age: 1 },
            { name: '2', age: 2 },
            { name: '3', age: 3 },
            { name: '3', age: 4 }
          ]
          const res = groupBy(a, 'name')
          console.log(res)
        </code>
      </pre>
      <el-button @click="groupBy" size="mini" type="primary">test groupBy</el-button>
      <hr>
      <pre>
        <code>
          const a = [
            { name: '1', age: 1 },
            { name: '2', age: 2 },
            { name: '3', age: 3 },
            { name: '3', age: 4 }
          ]
          const res = groupBy(a, 'name')
          console.log(res)
        </code>
      </pre>
      <el-button @click="groupBy" size="mini" type="primary">test groupBy</el-button>
  </div>
</template>

<script>
import { groupBy } from 'lodash'
console.log(groupBy, 'groupBy')
export default {
  name: '',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    groupBy() {
      const a = [
        { name: '1', age: 1 },
        { name: '2', age: 2 },
        { name: '3', age: 3 },
        { name: '3', age: 4 }
      ]
      const res = groupBy(a, 'name')
      console.log(res)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
