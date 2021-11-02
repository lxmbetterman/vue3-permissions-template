<template>
  <div v-resize:delay="onResize">
    <div id="vue-shape-container"></div>
    <button @click="add">外部 Add</button>
    <button @click="getData">data</button>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'
import Count from './components/Count'
import Start from './components/Start'
import Normal from './components/Normal'
import { Platform } from '@antv/x6'

let graph = null
export default {
  name: 'App',
  data() {
    return {
      graph: null
    }
  },
  mounted() {
    const magnetAvailabilityHighlighter = {
      name: 'stroke',
      args: {
        attrs: {
          fill: '#fff',
          stroke: 'red'
        }
      }
    }

    graph = new Graph({
      container: document.getElementById('vue-shape-container'),
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

      connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        allowMulti: false,
        sourceAnchor: {
          name: 'orth',
          args: {
            // dx: Platform.IS_SAFARI ? 5 : 0
            dx: 0
          }
        },
        targetAnchor: {
          name: 'orth',
          args: {
            dx: 0
          }
        },
        // connectionPoint: 'anchor',
        // connector: 'algo-edge',
        connector: 'smooth',
        createEdge() {
          return graph.createEdge({
            attrs: {
              line: {
                strokeDasharray: '5 5',
                stroke: '#808080',
                strokeWidth: 1,
                targetMarker: {
                  name: 'block',
                  args: {
                    size: '6'
                  }
                }
              }
            }
          })
        },
        validateMagnet({ magnet }) {
        // 点击 magnet 时 根据 validateMagnet 返回值来判断是否新增边，触发时机是 magnet
        // 被按下，如果返回 false，则没有任何反应，如果返回 true，会在当前 magnet 创建一条新的边。
          console.log(magnet)
          return magnet.getAttribute('port-group') !== 'in'
        },

        // 在移动边的时候判断连接是否有效，如果返回 false，当鼠标放开的时候，不会连接到当前元素，否则会连接到当前元素。
        validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
          // 只能从输出链接桩创建连接
          if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
            return false
          }

          // 只能连接到输入链接桩
          if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
            return false
          }
          return true
        }
      }

    })

    this.graph = graph

    // 定义边
    // Graph.registerConnector(
    //   'algo-edge',
    //   (source, target) => {
    //     const offset = 4
    //     const control = 80
    //     const v1 = { x: source.x, y: source.y + offset + control }
    //     const v2 = { x: target.x, y: target.y - offset - control }

    //     return `M ${source.x} ${source.y}
    //       L ${source.x} ${source.y + offset}
    //       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${target.x} ${target.y - offset}
    //       L ${target.x} ${target.y}
    //   `
    //   },
    //   true
    // )

    graph.on('edge:connected', (args) => {
      const edge = args.edge
      const node = args.currentCell
      const elem = args.currentMagnet
      const portId = elem.getAttribute('port')

      // 触发 port 重新渲染
      node.setPortProp(portId, 'connected', true)

      // 更新连线样式
      edge.attr({
        line: {
          strokeDasharray: '',
          targetMarker: ''
        }
      })
    })

    // 注册 vue component
    // 如果需要序列化/反序列化数据，必须使用该方式
    Graph.registerVueComponent(
      'count',
      {
        template: `<Count />`,
        components: {
          Count
        }
      },
      true
    )
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

    graph.addNode({
      id: '1',
      shape: 'vue-shape',
      x: 200,
      y: 150,
      width: 150,
      height: 100,
      component: 'count',
      data: {
        num: 0
      }
    })

    const source = graph.addNode({
      id: '2',
      shape: 'vue-shape',
      x: 300,
      y: 250,
      width: 150,
      height: 100,
      component: 'start',
      ports: {
        items: [
          {
            group: 'in',
            id: 'in',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          },
          {
            group: 'out',
            id: 'out',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          }
        ],
        groups: {
          in: {
            position: { name: 'left' }
            // zIndex: 1
          },
          out: {
            position: { name: 'right' }
            // zIndex: 1
          }
        }
      }
    })
    const target = graph.addNode({
      id: '3',
      shape: 'vue-shape',
      x: 600,
      y: 350,
      width: 150,
      height: 100,
      component: 'normal',
      ports: {
        items: [
          {
            group: 'in',
            id: 'in',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          },
          {
            group: 'out',
            id: 'out',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          }
        ],
        groups: {
          in: {
            position: { name: 'left' }
          },
          out: {
            position: { name: 'right' }
          }
        }
      }
    })
    const target2 = graph.addNode({
      id: '4',
      shape: 'vue-shape',
      x: 600,
      y: 550,
      width: 150,
      height: 100,
      component: 'normal',
      ports: {
        items: [
          {
            group: 'in',
            id: 'in',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          },
          {
            group: 'out',
            id: 'out',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#31d0c6',
                strokeWidth: 2,
                fill: '#fff'
              }}
          }
        ],
        groups: {
          in: {
            position: { name: 'left' }
          },
          out: {
            position: { name: 'right' }
          }
        }
      }
    })

    // 连线
    // graph.addEdge({
    //   source,
    //   target,
    //   vertices: [

    //   ],
    //   connector: { name: 'smooth' },
    //   attrs: {
    //     line: {
    //       stroke: '#722ed1'
    //     }
    //   }
    // })

    const sourceHtml = graph.addNode({
      shape: 'html',
      x: 120,
      y: 220,
      width: 120,
      height: 50,
      html: () => {
        return `
          <div class="x6htmlNode-node1">
            <div class="item"></div>
          
          </div>
        `
      }
    })
  },
  methods: {
    onResize() {
      // 重新设置画布
    },
    add() {
      const node = graph.getCellById('1')
      if (node) {
        const { num } = node.getData()
        node.setData({
          num: num + 1
        })
      }
    },
    getData() {
      console.log(this.graph.toJSON(), 'this.graph.toJson()')
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
.x6htmlNode-node1{
  display: flex;
  min-height: 40px;
  width: 100px;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color:#666;
  font-weight: bold;
  .item{
    display: none;
  }
  &:hover{
    >.item{
      display: block!important;
      width: 30px;
      height: 100px;
      background-color: blue;
      border-radius: 15px;
    }
  }
}
</style>
