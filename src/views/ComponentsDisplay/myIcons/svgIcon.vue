<!--  -->
<template>
  <div id="svgIconsDisplay">
      <p>SvgIcon点击复制</p>
      <div class="svgIconsList">
        <div class="item" v-for="item in allIcons" :key="item" :aria-label="item" >
          <my-icon custom :name="item" :size="24"></my-icon>
          <div>{{item}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import { ElMessage } from 'element-plus'
import Icons from '@/components/Icons/index.js'

export default {
  name: 'SvgIcon',
  data() {
    return {
      allIcons: [],
      clipboard: null
    }
  },

  components: {},

  computed: {},
  unmounted() {
    this.clipboard.destroy()
    this.clipboard = null
  },
  mounted() {
    this.getAllSvgIconsList()

    this.clipboard = new ClipboardJS('#svgIconsDisplay .svgIconsList .item', {
      text: function(trigger) {
        // 自定义复制内容
        return `<my-icon custom name="${trigger.getAttribute('aria-label')}" :size="12" color="red"></my-icon>`
      }
    })
    this.clipboard.on('success', function(e) {
      ElMessage({
        message: e.text,
        type: 'success',
        duration: 1500
      })
    })
  },

  methods: {
    getAllSvgIconsList() {
      this.allIcons = Icons.svgNames
    }
  }
}

</script>
<style lang='scss' scoped>
.svgIconsList{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  .item{
    flex: 0 0 86px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 15px;
    box-shadow:0 0 2px #ccc;
    border-radius: 3px;
    transition: all .5s;
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
  }
}
</style>
