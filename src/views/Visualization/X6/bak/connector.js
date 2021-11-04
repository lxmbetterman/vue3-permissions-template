/* eslint-disable no-undef */
const config1 = {
  // 连线样式
  connecting: {
    snap: true,
    allowBlank: false,
    allowLoop: false,
    highlight: true,
    allowMulti: false,
    router: 'manhattan',
    connector: {
      name: 'rounded',
      args: {
        radius: 8
      }
    },
    anchor: 'center',
    connectionPoint: 'anchor',
    createEdge() {
      return new Shape.Edge({
        attrs: {
          line: {
            stroke: '#A2B1C3',
            strokeWidth: 2,
            targetMarker: {
              name: 'block',
              width: 12,
              height: 8
            }
          }
        },
        zIndex: 0
      })
    }
  }
}
