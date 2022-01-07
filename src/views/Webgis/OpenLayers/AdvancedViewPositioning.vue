<!-- 高级视图定位 -->
<template>
  <div>
    <div class="mapcontainer">
      <div id="map" class="map"></div>
      <div class="padding-top"></div>
      <div class="padding-left"></div>
      <div class="padding-right"></div>
      <div class="padding-bottom"></div>
      <div class="center"></div>
    </div>
    <button id="zoomtoswitzerland" @click="fitPolygon">Zoom to 瑞士</button> (best fit).<br/>
    <button id="zoomtolausanne" @click="fitPoint">Zoom to Lausanne</button> (with min resolution),<br/>
    <button id="centerlausanne" @click="centerPoint">Center on Lausanne</button>
  </div>
</template>

<script>
// import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import View from 'ol/View'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
export default {
  name: 'AdvancedViewPositioning',
  data() {
    return {
      map: null,
      view: null,
      vectorSource: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.init()
  },

  methods: {
    init() {
      // /Users/laixueming/BN/my-npm/vue3-permissions-template/public/openLayers/AdvancedViewPositioning.json
      const source = new VectorSource({
        url: '/openLayers/AdvancedViewPositioning.json',
        format: new GeoJSON()
      })
      this.vectorSource = source
      // todo 理解style
      const style = new Style({
        fill: new Fill({
          color: 'rgba(255, 0, 0, 0.6)'
        }),
        stroke: new Stroke({
          color: 'blue',
          width: 1
        }),
        // Point（circle）的样式设置
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
        source: source,
        style: style
      })
      const view = new View({
        center: [0, 0],
        zoom: 1
      })
      this.view = view
      const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          vectorLayer
        ],
        target: 'map',
        view: view
      })
      this.map = map
    },
    fitPolygon() {
      const feature = this.vectorSource.getFeatures()[0]
      const polygon = feature.getGeometry()
      this.view.fit(polygon, { padding: [170, 50, 30, 150] })
    },
    fitPoint() {
      const feature = this.vectorSource.getFeatures()[1]
      const point = feature.getGeometry()
      this.view.fit(point, { padding: [170, 50, 30, 150], minResolution: 50 })
    },
    centerPoint() {
      const feature = this.vectorSource.getFeatures()[1]
      const point = feature.getGeometry()
      const size = this.map.getSize() // 图容器的[宽,高]
      // console.log(size, 'sizesize')
      this.view.centerOn(point.getCoordinates(), size, [570, 500]) // [570, 500]在size中的坐标位置
    }
  }
}

</script>
<style lang='scss' scoped>
.map {
    width: 100%;
    height:400px;
}
.mapcontainer {
    position: relative;
    margin-bottom: 20px;
}
.map {
    width: 1000px;
    height: 600px;
}
.map .ol-zoom {
    top: 178px;
    left: 158px;
}
.map .ol-rotate {
    top: 178px;
    right: 58px;
}
.map .ol-attribution,
.map .ol-attribution.ol-uncollapsible {
    bottom: 30px;
    right: 50px;
}
.padding-top {
    position: absolute;
    top: 0;
    left: 0px;
    width: 1000px;
    height: 170px;
    background: rgba(255, 255, 255, 0.5);
}
.padding-left {
    position: absolute;
    top: 170px;
    left: 0;
    width: 150px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
}
.padding-right {
    position: absolute;
    top: 170px;
    left: 950px;
    width: 50px;
    height: 400px;
    background: rgba(255, 255, 255, 0.5);
}
.padding-bottom {
    position: absolute;
    top: 570px;
    left: 0px;
    width: 1000px;
    height: 30px;
    background: rgba(255, 255, 255, 0.5);
}
.center {
    position: absolute;
    border: solid 1px black;
    top: 490px;
    left: 560px;
    width: 20px;
    height: 20px;
}
</style>
