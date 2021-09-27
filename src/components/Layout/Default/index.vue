<!--  -->
<template>
  <el-container class="layoutOfDefault">
        <el-aside width="200px">
            <el-menu :default-openeds="['1', '3']">
                <el-sub-menu index="1">
                <template
                    #title
                    ><i class="el-icon-message"></i>Navigator One</template
                >
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="1-1">Option 1</el-menu-item>
                    <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="2">
                <template #title><i class="el-icon-menu"></i>Navigator Two</template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="2-1">Option 1</el-menu-item>
                    <el-menu-item index="2-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="2-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="3">
                <template #title ><i class="el-icon-setting"></i>Navigator Three</template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="3-1">Option 1</el-menu-item>
                    <el-menu-item index="3-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="3-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="3-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <router-link to="/">Index</router-link> |
                <router-link to="/about">About</router-link>|
                <router-link to="/asyc/asycAbout">AsycAbout</router-link>|
                <router-link to="/asyc2/asycAbout2">AsycAbout2</router-link>|
                <el-button @click="loginOut">退出登录</el-button>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
// import router from '@/router/index.js'
// import { getAllRoutes, resetRouter } from '@/router/index.js' // asyncRoutes
export default {
  name: 'LayoutDefaultIndex',
  components: {},
  methods: {
    addRoute() {
    //   router.addRoute(asyncRoutes[0])
    },
    loginOut() {
      this.$store.dispatch('user/logout').then(() => {
        this.$router.replace({ path: '/login', replace: true })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.layoutOfDefault{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;

}
</style>
