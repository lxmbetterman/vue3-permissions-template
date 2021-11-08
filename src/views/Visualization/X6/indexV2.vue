<template>
  <div class="flowX6Container" v-resize:delay="onResize" style="position:relative">
    <div id="vue-shape-container"></div>
    <!-- <button @click="add">外部 Add</button> -->
    <button @click="getData">data</button>
    <button @click="changedata">changedata</button>
    <!-- {{currentModel?.qaList[0].replyValue}}?? -->
    <el-input v-if="currentModel" v-model="currentModel.qaList[0].replyValue"></el-input>

    <div id="menuContainer">菜单</div>
  </div>
</template>

<script>

import dataJson from './data.json'
import { Graph, edgeView } from '@antv/x6'
import '@antv/x6-vue-shape'

import Start from './components/Start'
import Normal from './components/Normal'

let graph = null
export default {
  name: 'App',
  data() {
    return {
      graph: null,
      currentCell: null,
      currentModel: null

    }
  },
  watch: {
    currentModel: {
      handler(newVal) {
        console.log(newVal)
        // 更新cell
        this.updateCell()
      },
      deep: true
    }
  },
  mounted() {
    this.RegisterVueNodes() // 注册vue node
    const magnetAvailabilityHighlighter = {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#fff',
          stroke: 'green'
        }
      }
    }

    graph = new Graph({
      container: document.getElementById('vue-shape-container'),
      panning: true,
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta']
      },
      width: '100%',
      height: 800,
      autoResize: this.$el,
      grid: true,
      // ?
      highlighting: {
        magnetAvailable: magnetAvailabilityHighlighter, // 连接拖动时，可连接的anchor的颜色
        magnetAdsorbed: {
          // 链接吸附住的颜色
          name: 'stroke',
          args: {
            attrs: {
              fill: '#fff',
              stroke: 'blue'
            }
          }
        }
      },

      // connecting: {
      //   snap: true,
      //   allowBlank: false,
      //   allowLoop: false,
      //   highlight: true,
      //   allowMulti: false
      // }
      router: {
        name: 'manhattan',
        args: {
          startDirections: ['bottom'],
          endDirections: ['top']
        }
      }

    })
    this.graph = graph

    this.addNodes(graph)// 手动添加node节点
    // this.renderGraph(graph)
    graph.on('edge:connected', (args) => {

    })
    graph.on('edge:mouseenter', ({ edge }) => {
      edge.attr({
        line: {
          strokeDasharray: '',
          stroke: 'blue' // stroke: '#808080',
        }
      })
    })
    graph.on('edge:mouseleave', ({ edge }) => {
      edge.attr({
        line: {
          strokeDasharray: '',
          stroke: '#808080' // stroke: '#808080',
        }
      })
    })

    // 控制连接桩显示/隐藏
    /**
     const showPorts = (ports, show) => {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
          ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
      }
      graph.on('node:mouseenter', () => {
        const container = document.getElementById('vue-shape-container')
        const ports = container.querySelectorAll(
          '.x6-port-body[port]'
          // '.x6-port-body[port=out]'
        )
        showPorts(ports, true)
      })
      graph.on('node:mouseleave', () => {
        const container = document.getElementById('vue-shape-container')
        const ports = container.querySelectorAll(
          '.x6-port-body'
        )
        showPorts(ports, false)
      })
     */

    graph.on('edge:click', ({ e, x, y, edge, view }) => {
      console.log(edge, 'edge')

      edge.setLabels([{
        attrs: { label: {
          text: '连线名称',
          fill: 'pink',
          fontSize: 12
        }}
      }])
      const { offsetX, offsetY } = e
      this.showEdgeMenu(offsetX, offsetY)
    })
    graph.on('blank:click', () => {
      console.log('hidden')
      this.hideEdgeMenu()
    })
    graph.on('cell:click', ({ e, x, y, cell, view }) => {
      // this.currentCell = cell
      // console.log(cell, '(newVal)(newVal)')
      // this.currentModel = cell.data
      // console.log(cell.data, 'dattt')
    })
  },
  methods: {
    onResize() {
      // 重新设置画布
    },

    renderGraph(graph) {
      graph.fromJSON(dataJson)
    },
    addNodes(graph) {
      const source = graph.addNode({
        id: '2',
        shape: 'vue-shape',
        x: 300,
        y: 250,
        width: 150,
        height: 100,
        component: 'start',
        data: {
          params: {
            skillList: [],
            NLUList: [],
            qaList: [
            // 开始话术00/兜底话术02/结束话术01
              {
                nodeId: '',
                replyId: '',
                replyScope: '',
                replyValue: '开始话术..'
              }],
            nodeTimeOut: 3, //
            inputType: false
          },
          label: '开始'
        }

      })

      const target = graph.addNode({
        id: '3',
        shape: 'vue-shape',
        x: 600,
        y: 350,
        width: 150,
        height: 100,
        component: 'normal'

      })

      const target2 = graph.addNode({
        id: '4',
        shape: 'vue-shape',
        x: 600,
        y: 550,
        width: 150,
        height: 100,
        component: 'normal'
      })

      const edge = graph.addEdge({
        source,
        target,
        // https://x6.antv.vision/zh/docs/api/registry/router#orth
        router: {
          name: 'metro',
          args: {
            // startDirections: ['bottom'],
            // endDirections: ['top']
          }
        },
        attrs: {
          line: {
            stroke: '#722ed1'
          }
        }
      })

      const update = () => {
        console.log('update')
        const edgeView = graph.findViewByCell(edge)
        edgeView.update()
      }

      const obstacles = []
      obstacles.push(target2)
      obstacles.forEach((obstacle) => obstacle.on('change:position', update))

      update()
    },
    RegisterVueNodes() {
      Graph.registerVueComponent(
        'start',
        {
          template: `<Start />`,
          components: {
            Start
          }
        },
        true
      )
      Graph.registerVueComponent(
        'normal',
        {
          template: `<Normal />`,
          components: {
            Normal
          }
        },
        true
      )
    },
    getData() {
      console.log(JSON.stringify(this.graph.toJSON()))
    },
    showEdgeMenu(left, top) {
      const menuContainer = document.getElementById('menuContainer')
      // menuContainer.style.visibility = 'visible'
      menuContainer.style.display = 'block'
      menuContainer.style.left = left + 'px'
      menuContainer.style.top = top + 'px'
    },
    hideEdgeMenu() {
      const menuContainer = document.getElementById('menuContainer')
      // menuContainer.style.visibility = 'visible'
      menuContainer.style.display = 'none'
      menuContainer.style.left = 0
      menuContainer.style.top = 0
    },
    // 修改数据
    changedata() {
      this.currentCell.setData(
        {
          qaList: [
            {
              replyValue: 'testtt'
            }
          ]
        }
      )
    },
    updateCell() {
      this.currentCell.setData(this.currentModel)
    }

  }
}
</script>

<style lang="scss" scoped>
.htmlnode{
  color: red;
}
</style>
<style lang="scss">
.flowX6Container{
  #menuContainer{
    position: absolute;
    display: none;
    width: 50px;
    height: 40px;
    background-color: rgba(255,255,255,.8);
    box-shadow: 0 0 4px rgb(0,0,0,0.3);
    left: 0;
    top: 0;
    text-align: center;
    line-height: 40px;
    color:#999;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>

