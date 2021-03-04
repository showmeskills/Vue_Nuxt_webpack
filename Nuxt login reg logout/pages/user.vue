<template>
  <div>
    <h1>用户</h1>
    <el-button @click="logout">注销</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      //删除Cookie,情况vuex
      //登录时候同步vuex和cookies
      this.$cookies.remove("user");
      this.$store.commit("user/M_UPDATE_USER", {
        err: 1,
        msg: "未登录",
        token: "",
        data: {},
      });
      this.$router.push('/login')
    },
  },
};
</script>