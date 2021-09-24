<template>
  <div class="about">
    <h1>This is an aboutAsync page</h1>

    <router-link to="/aboutAsync/test1">test1</router-link>|
    <router-link to="/aboutAsync/test2">test2</router-link>
    <router-view />
  </div>
</template>
<script>
// import router from '@/router/index.js'
// import { asyncRoutes } from '@/router/index.js'
export default {
  name: 'AboutAsync',
  components: {},
  methods: {

  }
}
</script>
