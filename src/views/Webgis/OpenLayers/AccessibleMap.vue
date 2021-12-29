<!--  -->
<template>
    <div>
        <div id="AccessibleMap"></div>
        <button id="zoom-out" @click="zoomOut">Zoom out</button>
        <button id="zoom-in" @click="zoomIn">Zoom in</button>
    </div>
</template>

<script>
import Map from 'ol/Map'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'
export default {
  name: 'AccessibleMap',
  data() {
    return {
      Map: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      this.Map = new Map({
        target: 'AccessibleMap',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([116, 40]),
          zoom: 4
        })
      })
    },
    zoomOut() {
      const view = this.Map.getView()
      const zoom = view.getZoom()
      view.setZoom(zoom - 1)
    },
    zoomIn() {
      const view = this.Map.getView()
      const zoom = view.getZoom()
      view.setZoom(zoom + 1)
    }

  }
}

</script>
<style lang='scss' scoped>
#AccessibleMap{
    height: 500px;
    width: 100%;
}
</style>
