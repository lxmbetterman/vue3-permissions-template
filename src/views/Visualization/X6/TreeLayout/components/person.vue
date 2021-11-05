<template>
  <div class="X6-person">
    <!-- <button @click="add()">内部Add: {{ num }} </button> -->
    person node
  </div>
</template>

<script>
export default {
  name: 'LayoutPerson',
  inject: ['getGraph', 'getNode'],
  data() {
    return {
      num: 0
    }
  },
  mounted() {
    const self = this
    const node = this.getNode()
    // 监听数据改变事件
    node.on('change:data', ({ current }) => {
    //   self.num = current.num
    })
  },
  methods: {
    add() {
    //   const node = this.getNode()
    //   const { num } = node.getData()
    //   node.setData({
    //     num: num + 1
    //   })
    }
  }
}
</script>
<style lang="scss" scoped>
.X6-person{
  border-radius: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  background-color: red;
}
</style>
