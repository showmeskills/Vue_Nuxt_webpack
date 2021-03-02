<template>
  <nav>
    <el-button type="primary">element-ui</el-button>

    <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      active-text-color="#399"
      mode="horizontal"
      class="el-menu-demo"
    >
      <el-menu-item
        v-for="(item, index) of navs"
        :key="index"
        :index="index + ''"
        >{{ item.title }}</el-menu-item
      >
    </el-menu>
    <!-- 跳转声明式跳转 nuxt-link -->
    <nuxt-link to="/index" active-class="active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="active">登入</nuxt-link>
    <nuxt-link to="/register" active-class="active">注册</nuxt-link>
    <!-- 展示区 == router-view -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
      navs: [
        { path: "/index", title: "首页" },
        { path: "/goods", title: "商品" },
        { path: "/user", title: "用户" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(this.navs[key].path);
    },
  },
  watch:{
    //深度监视当前页面强刷,解决是否图片点亮的问题
    $route:{
      immediate:true,
      handler(route){
        let find = false;
        this.navs.map((item,index)=>{
          if(item.path == '/') this.$router.push('/index')
          if(route.path==item.path){
            this.activeIndex = index + '';
            find = true;
          }
        })
        if(!find) this.activeIndex = '0';
      }
    }
  }
};
</script>

<style scoped>
.active {
  background-color: pink;
  color: white;
}
</style>