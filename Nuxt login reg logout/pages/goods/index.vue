<template>
    <div>
        <h1>goods</h1>
        <nuxt-link to='/goods/1?a=1&b=2'>商品01</nuxt-link>
        <nuxt-link :to='{name:"goods-id",params:{id:2},query:{a:111,b:2222}}'>商品02</nuxt-link>
        <nuxt-link :to='{name:"goods-id",params:{id:3},query:{a:111,b:2222}}'>商品03</nuxt-link>
        <nuxt-link to='/goods/comment'>comments</nuxt-link>
        <!-- 约定子路由的展示区 -->
        <Nuxt/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>