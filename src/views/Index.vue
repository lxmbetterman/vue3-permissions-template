<!--  -->
<template>
  <div>
    {{listData}}
    <p>this is Index page</p>
    <p>vue3 语法学习</p>
    <el-button @click="getList" :loading="loading" >getList</el-button>
    <el-select v-model="test" placeholder="Select">
      <el-option
        v-for="item in listData"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
     <!--  <el-select v-model="test2" placeholder="Select">
      <el-option
        v-for="item in select2Data"
        :key="item"
        :label="item"
        :value="item"
      >
    </el-option>
  </el-select> -->
  <el-button @click="setCurrentLayout('Column')">Column-{{CurrentLayout}}</el-button>
  <el-button @click="setCurrentLayout('Default')">Default-{{CurrentLayout}}</el-button>
  <div>
    <my-pagination
      :pageSize='pageSize'
      :currentPage="currentPage1"
      :total="total"
      @changeSize="handleSizeChange"
      @currentChange="handleCurrentChange"
    />
  </div>
  </div>
</template>

<script>
// import { getAllRoutes } from '@/router/index.js' // watch
// import { reactive } from 'vue'
// import { ref, reactive, getCurrentInstance, watch } from 'vue'
import { onMounted } from 'vue'

import dropListRepository from '@/repository/select.js'
import layoutRepository from '@/components/Layout/layoutRepository.js'
import paginationRepository from '@/repository/pagination.js'

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
    const { listData, loading, getListData } = dropListRepository()

    const { CurrentLayout, setCurrentLayout } = layoutRepository()

    // 分页相关
    const { currentPage: currentPage1, pageSize, total, setCurrentPage, setPageSize, setTotal, resetPage } = paginationRepository()
    // 暴露到template中
    onMounted(() => {
      setTotal(101)
      setPageSize(25)
      setCurrentPage(3)
    })

    return {
      // 下拉接口
      listData, loading, getListData,
      // 布局切换
      CurrentLayout, setCurrentLayout,
      // 分页相关
      currentPage1, pageSize, total, setCurrentPage, setPageSize, setTotal, resetPage
    }
  },

  components: {},

  computed: {

  },

  mounted() {

  },

  methods: {
    getList() {
      this.getListData('/dev-api/list')
    },

    handleSizeChange(pageSize) {
      this.setPageSize(pageSize)
    },
    handleCurrentChange(currentPage) {
      this.setCurrentPage(currentPage)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
