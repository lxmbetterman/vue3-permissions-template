<!--  -->
<template>
  <div>
      <p>ElePlusIcons点击复制</p>
      <div class="ElePlusIconsList">
        <div class="item" v-for="item in allIcons" :key="item" :aria-label="item" >
          <my-icon :name="item" :size="24" />
          <div>{{item.slice(4)}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
import { ElMessage } from 'element-plus'
import Icons from '@/components/Icons/index.js'

export default {
  name: 'ElePlusIcons',
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
    this.getAllElePlusIcons()
    this.clipboard = new ClipboardJS('.ElePlusIconsList .item', {
      text: function(trigger) {
        // 自定义复制内容
        return `<my-icon name="${trigger.getAttribute('aria-label')}" :size="12"></my-icon>`
      }
    })
    this.clipboard.on('success', function(e) {
      ElMessage({
        message: '复制完成:' + e.text,
        type: 'success',
        'custom-class': 'customSuccess',
        duration: 1500
      })
    })
  },

  methods: {
    getAllElePlusIcons() {
      this.allIcons = Object.keys(Icons.components).filter(item => item.startsWith('icon'))
    }
  }
}

</script>
<style lang='scss' scoped>
.ElePlusIconsList{
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
