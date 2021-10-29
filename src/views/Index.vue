<!--  -->
<template>
  <div >
    <hr>
    <p>全局下拉接口的封装</p>
    <el-button @click="getList" :loading="loading" >获取下拉数据</el-button>
    <el-select v-model="myselect" placeholder="Select">
      <el-option
        v-for="item in listData"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <hr>
    <p>布局切换的实现思路</p>
    <el-button @click="setCurrentLayout('Column')">Column布局切换</el-button>
    <el-button @click="setCurrentLayout('Default')">Default布局切换</el-button>

    <hr>
    <p>分页的封装思路</p>
    <div>
      <my-pagination
        :pageSize='pageSize'
        :currentPage="currentPage1"
        :total="total"
        @changeSize="handleSizeChange"
        @currentChange="handleCurrentChange"
      />
    </div>

    <hr>
    <p>表格搜索条件表单的封装思路</p>
    <div>
      <MyFormInline
        :rule="rule"
        :formInline="formInline"
        :search='search'
        :reset="resetFormInline">

        <el-form-item label="adress" prop="adress">
          <el-select v-model="formInline.adress" placeholder="formInline.adress">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="name" prop="name">
          <el-input v-model="formInline.name" placeholder="formInline.name"></el-input>
        </el-form-item>
        <el-form-item label="age" class="pack-up">
          <el-input v-model="formInline.age" placeholder="formInline.age"></el-input>
        </el-form-item>
        <el-form-item label="sex" class="pack-up">
          <el-input v-model="formInline.sex" placeholder="formInline.sex"></el-input>
        </el-form-item>

      </MyFormInline>
    </div>

    <hr>
    <p>主题切换的实现</p>
    <div>
      <el-button @click="changeThemeCookie('GreenWhite')">绿白主题</el-button>
      <el-button @click="changeThemeCookie('BlueBlack')">蓝黑主题</el-button>
    </div>
    <hr>
    <p>icon</p>
    <el-icon>
      <!-- <icon-edit></icon-edit> -->
      <component :is="'icon-edit'"></component>
    </el-icon>
    <my-icon custom name="eye"></my-icon>
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

import MyFormInline from '@/components/Form/FormInline.vue'

import { setThemeStyleName, getThemeStyleName } from '@/utils/cookieTools.js'

export default {
  name: 'ProjectIndex',
  components: { MyFormInline },
  data() {
    return {
      myselect: 'a',
      formInline: { name: '', adress: '', age: '', sex: '' },
      rule: {
        name: [
          {
            required: true,
            message: 'Please input name',
            trigger: 'blur'
          }
        ],
        adress: [
          {
            required: true,
            message: 'Please select Adress',
            trigger: 'change'
          }
        ]
      }
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

  computed: {

  },

  mounted() {
    // console.log(this.$route)
  },

  methods: {
    /**
     * 下拉
     */
    getList() {
      this.getListData('/dev-api/list')
    },

    /**
     * 分页
     */
    handleSizeChange(pageSize) {
      this.setPageSize(pageSize)
    },
    handleCurrentChange(currentPage) {
      this.setCurrentPage(currentPage)
    },

    /**
     * FormInline
     */
    resetFormInline() {
      this.formInline = { name: '', adress: '', age: '', sex: '' }
    },
    search() {
      console.log(this.formInline, 'do search')
    },
    changeThemeCookie(themeStyleName) {
      // document.getElementsByTagName('body')[0].style.setProperty('--el-color-warning', 'blue')
      if (getThemeStyleName() !== themeStyleName) {
        setThemeStyleName(themeStyleName)
        this.$router.go(0)
      }
    }

  }
}

</script>
<style lang='scss' scoped>
</style>
