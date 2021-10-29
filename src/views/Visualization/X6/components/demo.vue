<!--  -->
<template>
  <div>
    <button @click="centerfy">居中</button>
    <button @click="zoom(.2)">+</button>
    <button @click="zoom(-0.2)">-</button>
    <div id="demo1"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
const data = {
  nodes: [
    {
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      attrs: {
        body: {
          fill: '#2ECC71',
          stroke: '#000',
          strokeDasharray: '10,2'
        },
        label: {
          text: 'Hello',
          fill: '#333',
          fontSize: 13
        }
      }
    },
    {
      id: 'node2',
      x: 180,
      y: 240,
      width: 100,
      height: 40,
      attrs: {
        body: {
          fill: '#F39C12',
          stroke: '#000',
          rx: 16,
          ry: 16
        },
        label: {
          text: 'World',
          fill: '#333',
          fontSize: 18,
          fontWeight: 'bold',
          fontVariant: 'small-caps'
        }
      }
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      shape: 'double-edge'
    }
  ]
}
export default {
  name: '',
  data() {
    return {
      graph: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    console.log(111)
    const graph = new Graph({
      container: document.getElementById('demo1'),
      panning: true,
      width: 800,
      height: 600,
      background: {
        color: '#fffbe6' // 设置画布背景颜色
      },
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta']
      },
      grid: {
        size: 10, // 网格大小 10px
        visible: true // 渲染网格背景
      }
    })
    this.graph = graph
    console.log(graph, 'graphgraph')
    graph.fromJSON(data)
  },

  methods: {
    centerfy() {
      this.graph.centerContent()
    },
    zoom(number) {
      this.graph.zoom(number)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
