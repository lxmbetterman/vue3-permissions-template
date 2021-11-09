<!--  -->
<template>
  <div >
      <el-dropdown @command="handleCommand">
        <div class="avatar-dropdown">
          <img class="avatarImage" src="https://i.gtimg.cn/club/item/face/img/2/16022_100.gif">
          <span class="avatarName">{{currentUser.name}}</span>
          <my-icon class="avatarArrow" name="iconArrowDownBold"></my-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  </div>
</template>

<script>
import userOperator from '@/repository/user.js'

export default {
  name: '',
  data() {
    return {
    }
  },
  setup() {
    const { currentUser, user_logout } = userOperator()
    return {
      currentUser, user_logout
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.loginOut()
          break
      }
    },
    loginOut() {
      this.user_logout().then((res) => {
        console.log(res, 'reee')
        this.$router.replace({ path: '/login', replace: true })
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.avatar-dropdown{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  transition: transform .5s;
  margin-right: 15px;
  .avatarImage{
    display: block;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  .avatarName{
    margin: 0 5px;
  }

  // .avatarArrow{
  //   animation-name:Rotate2;
  //   animation-duration:.3s;
  //   animation-iteration-count:1;
  //   animation-fill-mode:forwards
  // }
  // &:hover .avatarArrow{
  //   animation-name:Rotate;
  //   animation-duration:.3s;
  //   animation-iteration-count:1;
  //   animation-fill-mode:forwards
  // }

  // @keyframes Rotate{
  //   0%{transform:rotate(0deg);}
  //   100%{transform:rotate(180deg);}
  // }

  // @keyframes RotateBack{
  //   0%{transform:rotate(180deg);}
  //   100%{transform:rotate(0deg);}
  // }

  // transform: rotate(180deg);
}
</style>
