<template>
  <div class="x6-start-node">
    <div class="x6-start-node-header">
      <img class="icon" src="@/components/Icons/images/start.png" alt="" srcset="">
      <div class="title">{{Title}}</div>
    </div>
    <div class="content">
      {{startWords}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  inject: ['getGraph', 'getNode'],
  data() {
    return {
      Title: '开始',
      startWords: ''
    }
  },
  mounted() {
    const node = this.getNode()
    const data = node.getData()
    this.startWords = data.qaList[0].replyValue
    console.log(data, 'datadatadata')
    // 监听数据改变事件
    node.on('change:data', ({ current }) => {
      const data = current
      this.startWords = data.qaList[0].replyValue
    })
  },
  methods: {
    // add() {
    //   const node = this.getNode()
    //   const data = node.getData()
    //   console.log(data)
    // }
  }
}
</script>

<style lang="scss" scoped>
.x6-start-node{
  background-color: rgb(233,240,246);
  border: 1px solid rgb(175, 209, 238);
  min-height: 100px;
  border-radius: 3px;
  .x6-start-node-header{
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: flex-start;
    margin: 0 5px;
    .icon{
      flex: 0 0 12px;
      height: 12px;
    }
    .title{
      flex: 1 1 auto;
      color: rgb(84, 169, 243);
      font-size: 12px;
    }
  }

  .content{
    min-height: 80px;
    margin: 5px auto;
    width: 90%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(60,70,78);
    font-size: 13px;
  }

}
</style>
