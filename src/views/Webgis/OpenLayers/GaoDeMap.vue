<!--  -->
<template>
  <div>
    <p>高德地图</p>
    <div id="map" class="map"></div>
    <div id="popup">11</div>
  </div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer } from 'ol/layer'
import { XYZ } from 'ol/source' // OSM
import { fromLonLat } from 'ol/proj'

import { defaults, FullScreen, MousePosition, ScaleLine } from 'ol/control'

import Overlay from 'ol/Overlay'
import Point from 'ol/geom/Point'

// 向量图层
import Feature from 'ol/Feature'
import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { Style, Icon } from 'ol/style'

//
import * as olProj from 'ol/proj'
//
import { Translate } from 'ol/interaction'
//
import { Draw } from 'ol/interaction'
//
import { Circle as CircleStyle, Fill, Stroke } from 'ol/style'
import { createRegularPolygon, createBox } from 'ol/interaction/Draw'
export default {
  name: 'GaoDeMap',
  data() {
    return {
      map: null,
      vectorLayer: null
    }
  },

  components: {},

  computed: {},

  mounted() {
    // 使用内置的OSM
    // const tileLayer = new TileLayer({
    //    source: new OSM()
    // })
    // 使用高德
    const tileLayer = new TileLayer({
      source: new XYZ({
        url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=512&scale=1&style=8&x={x}&y={y}&z={z}'
      })
    })
    const map = new Map({
      layers: [tileLayer],
      view: new View({
        center: fromLonLat([103.9689813651057, 30.67092634021172]), // 地图中心点
        zoom: 15, // 缩放级别
        minZoom: 0, // 最小缩放级别
        maxZoom: 18, // 最大缩放级别
        constrainResolution: true// 因为存在非整数的缩放级别，所以设置该参数为true来让每次缩放结束后自动缩放到距离最近的一个整数级别，这个必须要设置，当缩放在非整数级别时地图会糊
      }),
      target: 'map', // DOM容器
      controls: defaults().extend([
        new FullScreen(), // 全屏
        new MousePosition(), // 显示鼠标当前位置的经纬度
        new ScaleLine()// 显示比例尺
      ])
    })
    this.map = map
    this.addOverLay()
    // this.addVectorLayer()
    this.addCircleVectorLayer()
    /**
     * 地图事件
     */
    // map.on('moveend', e => {
    //   console.log('地图移动', e)
    // })
    // map.on('rendercomplete', () => {
    //   console.log('渲染完成')
    // })
    // map.on('click', e => {
    //   console.log('地图点击', e)
    // })

    // 监听singleclick事件
    map.on('singleclick', function(e) {
      console.log(e.coordinate)
      console.log(olProj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'))
      // 通过getEventCoordinate方法获取地理位置，再转换为wgs84坐标，并弹出对话框显示
      console.log(map.getEventCoordinate(e.originalEvent))
      console.log(olProj.transform(map.getEventCoordinate(e.originalEvent), 'EPSG:3857', 'EPSG:4326'))

      var lonlat = map.getCoordinateFromPixel(e.pixel)
      console.log(lonlat, 'EPSG:3857')
      console.log(olProj.transform(lonlat, 'EPSG:3857', 'EPSG:4326'), 'EPSG:4326') // 由3857坐标系转为4326
    })
  },

  methods: {
    addOverLay() {
      // 你可以给元素添加任意的内容或属性或样式，也可以给元素绑定事件
      var popup = new Overlay({
        element: document.getElementById('popup'),
        offset: [-5, -60]
      })
      popup.setPosition(fromLonLat([103.9689813651057, 30.67092634021172]))
      this.map.addOverlay(popup)
      //
      // 给地图绑定鼠标移动事件，检测鼠标位置所在是否存在feature，如果是目标feature的话就显示tooltip
      this.map.on('pointermove', (e) => {
        this.map.forEachFeatureAtPixel(e.pixel, (f, layer) => {
          if (layer === this.vectorLayer && f.get('data')) { // || !f.get('data')
            console.log(f, layer, 'pp')
            console.log(f.get('data'), "f.get('data')")
            popup.setPosition(f.getGeometry().getCoordinates())
          } else {
            popup.setPosition(undefined)
          }
        })
      })
    },
    addVectorLayer() {
      // 实例化要素
      // (2)[103.9689813651057, 30.67092634021172] 'EPSG:4326' fromLonLat([103.96466838273531, 30.673262119089415])
      const feature = new Feature({
        geometry: new Point(fromLonLat([103.96715666669476, 30.670553094686298]))// 地理几何图形选用点几何
      })
      // 设置样式，这里就是显示一张图片icon
      feature.setStyle([
        new Style({
          image: new Icon({
            anchor: [0.5, 1], // 显示位置
            size: [64, 64], // 尺寸
            // imgSize: [56, 56], // 尺寸s
            scale: 0.5,
            src: require('/public/openLayers/start.png')// 图片url
          })
        })
      ])
      feature.set('data', { name: 'LXM' })
      // 矢量源
      const source = new VectorSource({
        features: [feature]
      })
      // 实例化的时候也可以不添加feature，后续通过方法添加：source.addFeatures([feature])
      // 清空feature：source.clear()

      // 矢量图层
      const vector = new VectorLayer({
        source: source
      })
      this.vectorLayer = vector

      /**
       * 样式除了可以设置在单个feature上，也可以统一设置在矢量图层上
       */
      // const vector = new VectorLayer({
      //   source: source,
      //   style: new Style({
      //     image: new Icon({
      //       anchor: [0.5, 1], // 显示位置
      //       size: [64, 64], // 尺寸
      //       scale: 0.5,
      //       src: require('/public/openLayers/start.png')// 图片url
      //     })
      //   })
      // })
      this.map.addLayer(vector)

      /**
       * icon拖动
       */

      const translate = new Translate({
        layers: [vector]
      })
      this.map.addInteraction(translate)
      // 可以监听一下拖动开始和结束的事件，拖动后的经纬度可以从e里面获取
      translate.on('translateend', (e) => {
        console.log(e)
      })
      translate.on('translatestart', (e) => {
        console.log(e)
      })

      /**
       * draw 事件
       */
      const draw = new Draw({
        source: source,
        type: 'Point',
        // style: new Style({
        //   image: new Icon({
        //     anchor: [0.5, 1], // 显示位置
        //     size: [64, 64], // 尺寸
        //     scale: 0.5,
        //     src: './openLayers/start.png'// 图片url
        //   })
        // }),
        style: new Style({
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
      })
      // 监听完成事件
      draw.on('drawend', (e) => {
        console.log(e)
        // 如果只需要放置一个的话可以移除该交互，否则可以一直添加
        console.log(draw.getActive(), 'kk')
        const feature = e.feature
        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1], // 显示位置
              size: [64, 64], // 尺寸
              scale: 0.5,
              src: './openLayers/start.png'// 图片url
            })
          })
        )
        feature.set('data', { name: 'lxm' })
        draw.setActive(false)
        // this.map.removeInteraction(draw)
        console.log(this.map.getInteractions())
      })
      this.map.addInteraction(draw)
    },
    addCircleVectorLayer() {
      const source = new VectorSource()
      const vector = new VectorLayer({
        source: source
      })
      this.map.addLayer(vector)
      const draw = new Draw({
        source: source,
        type: 'Circle',
        geometryFunction: createBox()
      })
      this.map.addInteraction(draw)
    }
  }
}

</script>
<style lang='scss' scoped>
.map {
  width: 100%;
  height:400px;
}

#popup{
  background-color: red;
}
</style>
