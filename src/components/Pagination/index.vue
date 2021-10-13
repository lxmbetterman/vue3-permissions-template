<!-- 封装pagination组件 -->
<template>
  <div class="custom-pagination">
    <el-pagination
      background
      :currentPage="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
// import { ref } from 'vue'
export default {
  name: '',
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    pageSize: {
      type: Number,
      required: true,
      default: 10
    },
    total: {
      type: Number,
      required: true,
      default: 0
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  emits: ['sizeChange', 'currentChange'],
  data() {
    return {
    }
  },
  setup(props, context) {
    const handleSizeChange = (pageSize) => {
      console.log(`emit sizeChange :value===${pageSize}`)
      context.emit('sizeChange', pageSize)
    }
    const handleCurrentChange = (currentPage) => {
      console.log(`emit currentChange: value===${currentPage}`)
      context.emit('currentChange', currentPage)
    }

    return {
      handleSizeChange,
      handleCurrentChange
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.custom-pagination{
  display: flex;
  justify-content: flex-end;
}
</style>
