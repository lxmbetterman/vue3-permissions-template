<!--  -->
<template>
  <div>
    <div id="treeContainer"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'
import { DagreLayout } from '@antv/layout'
import Person from './components/person.vue'
export default {
  name: '',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {
    Graph.registerVueComponent(
      'person',
      {
        template: `<Person />`,
        components: {
          Person
        }
      },
      true
    )
    this.init()
  },

  methods: {
    init() {
      const graph = new Graph({
        container: document.getElementById('treeContainer'),
        grid: true,
        width: '100%',
        height: 600
      })
      const data = {
        nodes: [],
        edges: []
      }
      const edges = [
        ['1', '2'],
        ['2', '3'],
        ['2', '4'],
        ['4', '5'],
        ['4', '6'],
        ['4', '7'],
        ['4', '8'],
        ['5', '9'],
        ['6', '10'],
        ['7', '11'],
        ['8', '12']
      ]

      for (let i = 1; i <= 12; i++) {
        data.nodes.push({
          id: `${i}`,
          // id: '3',
          shape: 'vue-shape',
          width: 50,
          height: 50,
          component: 'person'
        })
      }

      edges.forEach((edge) => {
        data.edges.push({
          source: edge[0],
          target: edge[1],
          attrs: {
            line: {
              stroke: '#fd6d6f',
              strokeWidth: 1
            }
          }
        })
      })

      const dagreLayout = new DagreLayout({
        type: 'dagre',
        rankdir: 'LR',
        align: 'DR', // 'UL' | 'UR' | 'DL' | 'DR'
        ranksep: 50,
        nodesep: 40
      })
      const model = dagreLayout.layout(data)

      graph.fromJSON(model)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
