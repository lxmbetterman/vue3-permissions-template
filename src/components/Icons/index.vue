<!--  -->
<template>
    <el-icon v-if="!custom" :size="size" :color="color">
        <!-- elementPlus-icon 提供的图标 -->
        <component v-if="name" :is="name"></component>
    </el-icon>
    <!-- 自定义的svg图标 -->
    <svg-icon v-else :iconClass="name" :size="size" :color="color" />
</template>

<script>
import SvgIcon from './SvgIcon'// svg component
export default {
  name: 'MyIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    custom: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 12
    },
    color: {
      type: String
    }

  },
  data() {
    return {
    }
  },

  components: { SvgIcon },

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
