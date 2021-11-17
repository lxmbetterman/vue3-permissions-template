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
console.log(dataJson)
import { Graph } from '@antv/x6'
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

      connecting: {
        snap: {
          radius: 16
        },
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
            // tools: {
            //   name: 'segments',
            //   args: {
            //     snapRadius: 10,
            //     threshold: 20,
            //     attrs: {
            //       fill: '#444'
            //     }
            //   }
            // }
          })
        },
        validateMagnet({ magnet }) {
        // 点击 magnet 时 根据 validateMagnet 返回值来判断是否新增边，触发时机是 magnet
        // 被按下，如果返回 false，则没有任何反应，如果返回 true，会在当前 magnet 创建一条新的边。
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
      },

      onToolItemCreated({ tool }) {
        // const handle = tool
        // const options = handle.options
        // if (options && options.index % 2 === 1) {
        //   tool.setAttrs({ fill: 'red' })
        // }
      },
      router: {
        name: 'orth'
      }

    })
    this.graph = graph

    this.addNodes(graph)// 手动添加node节点
    // this.renderGraph(graph)
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
          targetMarker: {
            name: 'block',
            args: {
              size: '4'
            }
          }
        }
      })

      const tar = edge.getTargetPoint()
      const sor = edge.getSourcePoint()
      const xLength = (tar.x - sor.x)
      const yLength = (tar.y - sor.y)
      edge.setVertices([
        { x: (sor.x + tar.x) / 2 - xLength / 5, y: (sor.y + tar.y) / 2 - yLength / 5 },
        { x: (sor.x + tar.x) / 2 + xLength / 5, y: (sor.y + tar.y) / 2 + yLength / 5 }
      ])

      edge.addTools([
        { name: 'vertices' }
      ])
    })
    graph.on('edge:mouseenter', ({ edge }) => {
      edge.attr({
        line: {
          strokeDasharray: '',
          stroke: 'blue' // stroke: '#808080',
        }
      })
      edge.addTools('vertices', 'onhover')
    })
    graph.on('edge:mouseleave', ({ edge }) => {
      edge.attr({
        line: {
          strokeDasharray: '',
          stroke: '#808080' // stroke: '#808080',
        }
      })
      edge.removeTools()
    })
    // 控制连接桩显示/隐藏
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
      this.currentCell = cell
      console.log(cell, '(newVal)(newVal)')
      this.currentModel = cell.data
      console.log(cell.data, 'dattt')
    })
  },
  methods: {
    onResize() {
      // 重新设置画布
    },
    // add() {
    //   const node = graph.getCellById('1')
    //   if (node) {
    //     const { num } = node.getData()
    //     node.setData({
    //       num: num + 1
    //     })
    //   }
    // },
    renderGraph(graph) {
      graph.fromJSON(dataJson)
    },
    addNodes(graph) {
      graph.addNode({
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
        },
        ports: {
          items: [
            {
              group: 'in',
              id: 'in',
              attrs: {
                circle: {
                  r: 6,
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
                  r: 6,
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

      graph.addNode({
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

      graph.addNode({
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
              group: 'in',
              id: 'in2',
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
              group: 'in',
              id: 'in3',
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

