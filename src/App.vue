<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/aboutAsync">AboutAsync</router-link>
  </div> -->
  <router-view />
</template>
<script>
import $http from './utils/aixosInstance'
export default {
  provide() {
    return {
      $http
    }
  }
}
</script>

<style lang="scss">

</style>
