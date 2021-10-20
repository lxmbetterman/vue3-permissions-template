<!--  -->
<template>
  <div class="custom-form-inline" v-resize="onResize"  :class="{'collapse':collapse}">
    <el-form
      ref="formInline"
      :rules="{}"
      :inline="true"
      :model="formInline"
      label-width="120px"
      :class="ResponsiveClass">
      <slot  />
      <!-- <slot name="more" ></slot> -->

      <el-form-item class="operator-form-item">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="text" @click="toggleCollapse" v-if="collapsable">收起</el-button>
      </el-form-item>

  </el-form>
  </div>
</template>

<script>
export default {
  name: 'MyFormInline',
  props: {
    formInline: {
      type: Object,
      default() {
        return { }
      },
      required: true
    },
    collapse: {
      type: Boolean,
      default() {
        return false
      },
      required: true
    },
    collapsable: {
      default: true
    },
    toggleCollapse: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
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
    console.log(this.$el, '$el')
  },

  methods: {
    resetForm() {
      console.log(this.$refs['formInline'])
      // this.$refs['formInline'].resetFields()
    },
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
    onSubmit(item) {
      console.log(this.formInline, 'formInline')
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
