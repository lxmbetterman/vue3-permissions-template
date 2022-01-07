<!-- 给一个point点 一个gif图片 -->
<template>
  <div id="map" class="map"></div>
</template>

<script>

import Feature from 'ol/Feature'
import Map from 'ol/Map'
import Point from 'ol/geom/Point'
import View from 'ol/View'
import { Icon, Style } from 'ol/style'
import { Stamen, Vector as VectorSource } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { Circle as CircleStyle, Fill, Stroke } from 'ol/style'
export default {
  name: '',
  data() {
    return {
      map: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.init()
  },

  methods: {
    init() {
      // 创建一个feature
      const iconFeature = new Feature({
        geometry: new Point([0, 0])
      })
      // 向量瓦片数据
      const vectorSource = new VectorSource({
        features: [iconFeature]
      })

      const style = new Style({

        image: new CircleStyle({
          radius: 10,
          fill: new Fill({
            color: 'rgba(0, 255, 0, 0.6)'
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 1
          })
        })
      })

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        // style: style
        style: function(feature) {
          console.log(feature, '@@@')
          //   const classify = feature.get('activeprod')
          //   return styleCache[classify]
          return style
        }
      })

      // 光栅瓦片
      const rasterLayer = new TileLayer({
        source: new Stamen({ // Stamen提供的图层 http://maps.stamen.com/
          layer: 'toner'
        })
      })

      const map = new Map({
        layers: [rasterLayer, vectorLayer],
        target: document.getElementById('map'),
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      })
      this.map = map
      // Users/laixueming/BN/my-npm/vue3-permissions-template/public/openLayers/globe.gif
      /** 有问题 */
      //   gifler('https://themadcreator.github.io/gifler/assets/gif/run.gif').frames(
      //     document.createElement('canvas'),
      //     function(ctx, frame) {
      //       alert(1)
      //       if (!iconFeature.getStyle()) {
      //         iconFeature.setStyle(
      //           new Style({
      //             image: new Icon({
      //               img: ctx.canvas,
      //               imgSize: [frame.width, frame.height],
      //               opacity: 0.8
      //             })
      //           })
      //         )
      //       }
      //       ctx.clearRect(0, 0, frame.width, frame.height)
      //       ctx.drawImage(frame.buffer, frame.x, frame.y)
      //       map.render()
      //     },
      //     true
      //   )
    }
  }
}

</script>
<style lang='scss' scoped>
.map{
    width: 100%;
    height:400px;
}
</style>
