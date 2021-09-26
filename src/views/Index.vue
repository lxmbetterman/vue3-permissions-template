<!--  -->
<template>
  <div>this is Index page</div>
</template>

<script>
import { getAllRoutes } from '@/router/index.js'

export default {
  name: 'ProjectIndex',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {
    console.log(getAllRoutes(), 'HHHH')
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
