<!-- 基类 Cell 相关的学习 -->
<template>
  <div >
      <p>X6 的 Shape 内置了一些基础图形，如 Rect、Edge、Circle 等，这些图形最终都有共同的基类 Cell，
        定义了节点和边共同属性和方法，如属性样式、可见性、业务数据等，并且在实例化、定制样式、配置默认选项等方面具有相同的行为</p>
                              <!--

                                     ┌──────────────────┐
                                 ┌──▶│ Shape.Rect       │
                                 │   └──────────────────┘
                                 │   ┌──────────────────┐
                                 ├──▶│ Shape.Circle     │
                     ┌────────┐  │   └──────────────────┘
                  ┌─▶│  Node  │──┤   ┌──────────────────┐
                  │  └────────┘  ├──▶│ Shape.Ellipse    │
                  │              │   └──────────────────┘
                  │              │   ┌──────────────────┐
                  │              └──▶│ Shape.Xxx...     │
      ┌────────┐  │                  └──────────────────┘
      │  Cell  │──┤
      └────────┘  │                  ┌──────────────────┐
                  │              ┌──▶│ Shape.Edge       │
                  │              │   └──────────────────┘
                  │  ┌────────┐  │   ┌──────────────────┐
                  └─▶│  Edge  │──┼──▶│ Shape.DoubleEdge │
                     └────────┘  │   └──────────────────┘
                                 │   ┌──────────────────┐
                                 └──▶│ Shape.ShadowEdge │
                                     └──────────────────┘
                               -->

<!--

-->

    <div id="basicClassCell">

    </div>
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
export default {
  name: 'BasicClassCell',
  data() {
    return {
      graph: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    const graph = new Graph({
      container: document.getElementById('basicClassCell'),
      width: 900,
      height: 400,
      panning: true,
      mousewheel: {
        enabled: true
        // modifiers: ['ctrl', 'meta']
      }
    })
    this.graph = graph

    const rect = new Shape.Rect({
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'rect',
      zIndex: 2,
      markup: [
        {
          tagName: 'rect',
          //   ns: 'http://www.w3.org/1999/xhtml',
          selector: 'body'
        },
        {
          tagName: 'text',
          selector: 'label'
        }
      ]
    })

    const circle = new Shape.Circle({
      id: 'node2',
      x: 280,
      y: 200,
      width: 60,
      height: 60,
      label: 'circle',
      zIndex: 2,
      markup: [
        {
          tagName: 'circle',
          //   ns: 'http://www.w3.org/1999/xhtml',
          selector: 'body'
        },
        {
          tagName: 'text',
          selector: 'label'
        }
      ]
    })

    const edge = new Shape.Edge({
      id: 'edge1',
      source: rect,
      target: circle,
      zIndex: 1
    })

    graph.addNode(rect)
    graph.addNode(circle)
    graph.addEdge(edge)

    graph.addNode({
      shape: 'path',
      x: 420,
      y: 0,
      width: 100,
      height: 80,
      label: 'path',
      // 相当于指定路径的 refD 属性!!
      // 使用 path 属性指定路径的 pathData，
      // https://x6.antv.vision/zh/docs/api/registry/attr#refdresetoffset
      path: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z',
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de'
        }
      }
    })

    graph.addNode({
      shape: 'path',
      x: 210,
      y: 0,
      width: 200,
      height: 160,
      label: 'path',
      attrs: {
        body: {
          fill: 'red',
          stroke: 'blue',
          // 指定 refD 属性，pathData 随图形大小自动缩放
          // https://x6.antv.vision/zh/docs/api/registry/attr#refdresetoffset
          refD: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z'
        }
      }
    })

    this.addCustomNode()
  },

  methods: {
    addCustomNode() {
      Graph.registerNode(
        'custom-node',
        {
          width: 200,
          height: 60,
          attrs: {
            body: {
              stroke: 'red',
              strokeWidth: 1,
              fill: 'rgba(95,149,255,1)',
              width: 200,
              height: 60
            },
            image: {
              'xlink:href':
          'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
              width: 16,
              height: 16,
              x: 12,
              y: 12
            },
            title: {
              text: 'Node',
              refX: 40,
              refY: 14,
              fill: 'rgba(0,0,0,0.85)',
              fontSize: 12,
              'text-anchor': 'start'
            },
            text: {
              text: 'this is content text',
              refX: 40,
              refY: 38,
              fontSize: 12,
              fill: 'rgba(0,0,0,0.6)',
              'text-anchor': 'start'
            }
          },
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'image',
              selector: 'image'
            },
            {
              tagName: 'text',
              selector: 'title'
            },
            {
              tagName: 'text',
              selector: 'text'
            }
          ]
        },
        true
      )
      this.graph.addNode({
        x: 200,
        y: 160,
        shape: 'custom-node'
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
