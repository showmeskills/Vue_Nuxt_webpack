<template>
  <nav>
    <!-- 跳转声明式跳转 nuxt-link -->
    <nuxt-link to="/index" active-class="active">首页</nuxt-link>
    <nuxt-link to="/goods" active-class="active">商品</nuxt-link>
    <nuxt-link to="/center" active-class="active">用户</nuxt-link>
    <nuxt-link to="/login" active-class="active">登入</nuxt-link>
    <nuxt-link to="/register" active-class="active">注册</nuxt-link>
    <!-- 展示区 == router-view -->
  </nav>
</template>

<style scoped>
.active{
    background-color: pink;
    color: white;
}
</style>