<!--  -->
<template>
  <div class="custom-form-inline" v-resize="onResize"  :class="{'collapse':collapse}">
    <el-form
      ref="formInline"
      :rules="rule"
      :model="formInline"
      :inline="true"
      label-width="120px"
      :class="ResponsiveClass">
      <slot  />
      <!-- <slot name="more" ></slot> -->

      <el-form-item class="operator-form-item">
        <el-button type="primary" @click="onSubmit_">查询</el-button>
        <el-button @click="resetForm_">重置</el-button>
        <el-button type="text" @click="collapse=!collapse" v-if="collapsable">收起</el-button>
      </el-form-item>

  </el-form>
  </div>
</template>

<script>
export default {
  name: 'MyFormInline',
  props: {
    collapsable: { // 是否展示收起
      default: true
    },
    formInline: {
      //  表单实体数据
      type: Object,
      default() {
        return { }
      }
    },
    rule: {
      // 验证规则
      type: Object,
      default() {
        return { }
      }
    },
    reset: {
      type: Function,
      default() {
        return null
      }
    },
    search: {
      type: Function,
      default() {
        return null
      },
      required: true
    }
  },
  data() {
    return {
      collapse: false,
      ResponsiveClass: {
        xs: false,
        sm: false,
        md: false,
        lg: false
      }
    }
  },

  components: {},

  computed: {},

  mounted() {
  },

  methods: {

    Responsive(width) {
      // xs	<768px | sm	≥768px  ｜ md	≥992px ｜lg	≥1200px ｜ xl	≥1920px
      if (width < 800) { // xs
        this.ResponsiveClass = {
          xs: true,
          sm: false,
          md: false,
          lg: false
        }
      } else if (width < 1200) {
        this.ResponsiveClass = {
          xs: false,
          sm: true,
          md: false,
          lg: false
        }
      } else if (width < 1600) {
        this.ResponsiveClass = {
          xs: false,
          sm: false,
          md: true,
          lg: false
        }
      } else {
        this.ResponsiveClass = {
          xs: false,
          sm: false,
          md: false,
          lg: true
        }
      }
    },
    onResize() {
      this.Responsive(this.$el.clientWidth)
    },
    resetForm_() { // prop 传入reset函数
      this.reset()
      setTimeout(() => {
        this.$refs['formInline'].resetFields()
      }, 0)
    },
    onSubmit_() { // prop 传入提交函数
      this.$refs['formInline'].validate((valid) => {
        if (valid) {
          this.search()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>
<style lang='scss'>
.ttt{
  display: inline-flex;
}
// 全局修改formInline的自定义样式
.collapse .pack-up{
  flex: 0 0 0!important;
  opacity: 0;
  height: 0!important;
}
.custom-form-inline{
  padding: 10px;
  .el-form.el-form--inline{
    display: flex;
    flex-wrap: wrap;
  }
  .el-form.el-form--inline .el-form-item{
    flex: 0 0 25%;
    margin-right: 0;
    margin-bottom: 10px;
    overflow: hidden;
    height: 40px;
    transition: all .4s;
  }
  // formInline 下拉框的宽度充满item__content
  .el-form.el-form--inline .el-form-item .el-form-item__content .el-select{
    width: 100%;
  }

  //操作按钮项的样式
  .el-form-item.operator-form-item .el-form-item__content{
    display: flex;
    justify-content: flex-end;
  }

  // 响应式布局样式
  .el-form.el-form--inline.xs{
    .el-form-item{
      flex-basis:50%
    }
  }
  .el-form.el-form--inline.sm{
    .el-form-item{
      flex-basis:33.3%
    }
  }
  .el-form.el-form--inline.md{
    .el-form-item{
      flex-basis:25%
    }
  }

}
</style>
