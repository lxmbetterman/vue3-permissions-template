import { Graph, Model } from '@antv/x6'
import { ForceLayout } from '@antv/layout'

const graph = new Graph({
  container: document.getElementById('container')!,
  grid: true,
})

const originData = {
  nodes: [
    { id: 'node0', size: 30},
    { id: 'node1', size: 30},
    { id: 'node2', size: 30},
    { id: 'node3', size: 30 },
    { id: 'node4', size: 30},
    { id: 'node5', size: 30 },
    { id: 'node6', size: 30 }
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node5', target: 'node6' }
  ],
}

const getModelFromOriginData = (data: typeof originData) => {
  const model: Model.FromJSONData = {
    nodes: [],
    edges: [],
  }
  originData.nodes.forEach((item) => {
    model.nodes?.push({
      id: item.id,
      shape: 'circle',
      width: item.size,
      height: item.size,
      x: item.x,
      y: item.y,
      attrs: {
        body: {
          fill: '#855af2',
          stroke: 'transparent',
        },
      },
    })
  })
  originData.edges.forEach((item) => {
    model.edges?.push({
      source: item.source,
      target: item.target,
      attrs: {
        line: {
          stroke: '#ccc',
          strokeWidth: 1,
          targetMarker: 'classic',
        },
      },
    })
  })
  return model
}

const forceLayout = new ForceLayout({
  type: 'force',
  center: [369, 180],
  preventOverlap: false,
  linkDistance: (d) => {
    // if (d.source.id === 'node0') {
    //   return 150
    // }
    return 150
  },
  nodeStrength: (d) => {
    if (d.isLeaf) {
      return 100
    }
    return -500
  },
  edgeStrength: (d) => {

    return 1
  },
  tick: () => {
    const model = getModelFromOriginData(originData)
    graph.fromJSON(model)
  },
})
forceLayout.layout(originData)
