<!--  -->
<template>
  <div>
    <pre>
      <code>
        const a = [
          { name: '1', age: 1 },
          { name: '2', age: 2 },
          { name: '3', age: 3 },
          { name: '3', age: 4 }
        ]
        const res = groupBy(a, 'name')
        console.log('res:', res)
      </code>
    </pre>
    <el-button @click="groupBy" size="mini" type="primary">test groupBy</el-button>
    <hr>
    <pre>
      <code>
        function duplicate(value, key) {
          console.log(value, key, '111')
          return [key, value]
        }

        function duplicate2(value, key) {
          console.log(value, key, '222')
          return { key, value }
        }

        console.log(flatMapDeep(['a', 'b'], duplicate))
        console.log(flatMapDeep({ name: 'lxm', age: '30' }, duplicate2))
      </code>
    </pre>
    <el-button @click="flatMapDeep" size="mini" type="primary">test flatMapDeep</el-button>
    <hr>
    <pre>
      <code>
        var array = [
          { 'dir': 'left', 'code': 97 },
          { 'dir': 'right', 'code': 100 }
        ]

        const res1 = keyBy(array, function(o) {
          return String.fromCharCode(o.code)
        })
        console.log(res1)
        // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

        const res2 = keyBy(array, 'dir')
        console.log(res2)
        // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
      </code>
    </pre>
    <el-button @click="flatMapDeep" size="mini" type="primary">test keyBy</el-button>
    <pre>
      <code>
        var users = [
          { 'user': 'fred', 'age': 48 },
          { 'user': 'barney', 'age': 34 },
          { 'user': 'fred', 'age': 40 },
          { 'user': 'barney', 'age': 36 }
        ]

        // 以 `user` 升序排序 再  `age` 以降序排序。
        orderBy(users, ['user', 'age'], ['asc', 'desc'])
        // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
      </code>
    </pre>
    <el-button @click="flatMapDeep" size="mini" type="primary">test orderBy</el-button>
    <hr>
    <p>cellection</p>
    <el-button @click="after" size="mini" type="primary">test includes</el-button>

    <p>函数方法：</p>
    <el-button @click="after" size="mini" type="primary">test after</el-button>
    <el-button @click="before" size="mini" type="primary">test before</el-button>
    <el-button @click="curry" size="mini" type="primary">test curry</el-button>
    <el-button @click="debounce" size="mini" type="primary">test debounce</el-button>
    <el-button @click="delay" size="mini" type="primary">test delay</el-button>

  </div>
</template>

<script>
import {
  // 集合
  groupBy, flatMapDeep, keyBy, orderBy, includes,
  // 函数
  after, before, curry, debounce, delay
} from 'lodash'

export default {
  name: '',
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {},
  created() {
    this.debounce = debounce(this.testDebounce, 500, { leading: true })
  },

  methods: {
    groupBy() {
      const a = [
        { name: '1', age: 1 },
        { name: '2', age: 2 },
        { name: '3', age: 3 },
        { name: '3', age: 4 }
      ]
      const res = groupBy(a, 'name')
      console.log('res:', res)
    },
    flatMapDeep() {
      function duplicate(value, key) {
        console.log(value, key, '111')
        return [key, value]
      }
      function duplicate2(value, key) {
        console.log(value, key, '222')
        return { key, value }
      }

      console.log(flatMapDeep(['a', 'b'], duplicate))
      console.log(flatMapDeep({ name: 'lxm', age: '30' }, duplicate2))
    },
    keyBy() {
      var array = [
        { 'dir': 'left', 'code': 97 },
        { 'dir': 'right', 'code': 100 }
      ]

      const res1 = keyBy(array, function(o) {
        return String.fromCharCode(o.code)
      })
      console.log(res1)
      // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

      const res2 = keyBy(array, 'dir')
      console.log(res2)
      // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
    },
    orderBy() {
      var users = [
        { 'user': 'fred', 'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'barney', 'age': 36 }
      ]

      // 以 `user` 升序排序 再  `age` 以降序排序。
      orderBy(users, ['user', 'age'], ['asc', 'desc'])
      // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    },
    // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
    /**
     * lodash 函数方法
     */
    testAfter() {
      console.log('done saving!!!')
    },
    after() { // 同 before
      // 此方法创建一个函数，当他被调用n或 更多次之后将马上触发func
      var saves = ['profile', 'settings', 'test']

      var done = after(saves.length, this.testAfter)
      var done2 = after(saves.length, this.testAfter)

      saves.forEach(item => {
        console.log(item)
        done()
      })
      done2()
      done2()
      done2()
      done2()
      // => Logs 'done saving!' after the two async saves have completed.
    },
    testBefore() {
      console.log('---- to Do')
    },
    before() {
      var saves = ['profile', 'settings', 'test']

      var todo = before(saves.length, this.testBefore)

      saves.forEach(item => {
        console.log(item)
        todo()
      })
    },
    curry() {
      // curry 应用
      var persons = [{ name: 'kevin', age: 11 }, { name: 'daisy', age: 24 }]

      const getProp = curry(function(key, obj) {
        return obj[key]
      })
      const names2 = persons.map(getProp('name'))
      console.log(names2) // ['kevin', 'daisy']

      const ages2 = persons.map(getProp('age'))
      console.log(ages2) // [11,24]
    },
    testDebounce() {
      console.log('do debounce')
    },
    delay() { //
      // delay 不会阻塞当前线程
      console.log(1)
      delay(function(text) {
        console.log(text)
      }, 1000, 'later')
      console.log(2)

      // --------
      function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
      }

      (async function() {
        console.log('Do some thing, ' + new Date())
        await sleep(3000)
        console.log('Do other things, ' + new Date())
      })()
    },
    testIncludes() {
      const arr = [{ 'user': 'fred', 'age': 40 }, { 'user': 'lxm', 'age': 20 }]
      // includes(arr,)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
