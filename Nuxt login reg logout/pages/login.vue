<template>
  <div class="login">
    <h1>登录</h1>
    <el-divider></el-divider>
    <el-input v-model="username" placeholder="请输入" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input
      v-model="password"
      type="password"
      placeholder="请输入"
      class="mb"
    >
      <template slot="prepend">密码</template>
    </el-input>
    <div class="error">{{ message }}</div>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="$router.push('/register')">注册</el-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    message: "",
  }),
  methods: {
    login() {
      this.$axios({
        url: "/api/users/login",
        methods: "post",
        data: {
          email: this.username,
          password: this.password,
        },
      }).then((_) => {
        if (_.data.err == 0) {
          //登录时候同步vuex和cookies
          this.$cookies.set("user", _.data);
          this.$store.commit("user/M_UPDATE_USER", _.data);

          if (!this.$route.query.path ||/login|reg/.test(this.$route.query.path)) {
            //如果登录成功后页面来自于login或者reg回调的/user页面
            this.$router.replace("/user");
          } else {
            //登录成功后会转入上一个转进来的页面
            this.$router.replace(this.$route.query.path);
          }
        } else {
            this.message = _.data.msg
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  width: 35%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -17%;
  transform: translateY(-50%);
}
.mb {
  margin-bottom: 20px;
}
.error {
  color: red;
}
</style>