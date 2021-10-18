<!--  -->
<template>
  <div class="custom-form-inline" v-resize="onResize" ref="container">

  </div>
</template>

<script>
export default {
  name: 'MyFormInline',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onResize() {
      console.log(this.$el.clientWidth)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
