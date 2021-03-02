<template>
    <div>
       <h1>comments</h1>
       <nuxt-link :to="{name:'goods-comment-uid',params:{uid:'1'},query:{a:1,b:1}}">评论1</nuxt-link>
       <nuxt-link to="/goods/comment/2?a=22&b=22">评论2</nuxt-link>
       <Nuxt />
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>