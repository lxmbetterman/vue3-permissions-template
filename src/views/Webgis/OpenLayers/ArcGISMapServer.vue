<!--  -->
<template>
  <div id="map" class="map"></div>
</template>

<script>
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import View from 'ol/View'
import { OSM, TileArcGISRest } from 'ol/source'
export default {
  name: 'ArcGISMapServer',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {
    const url =
    'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer'

    const layers = [
      new TileLayer({
        source: new OSM()
      }),
      new TileLayer({
        // extent: [-13884991, 2870341, -7455066, 6338219],
        source: new TileArcGISRest({
          url: url
        }),
        style: function(feature) {
          console.log(feature, '@@@')
          //   const classify = feature.get('activeprod')
          //   return styleCache[classify]
        //   return style
        }
      })
    ]
    const map = new Map({
      layers: layers,
      target: 'map',
      view: new View({
        center: [-10997148, 4569099],
        zoom: 4
      })
    })
    console.log(map.getLayers(), 'getLayers')
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.map {
width: 100%;
height:400px;
}
</style>
