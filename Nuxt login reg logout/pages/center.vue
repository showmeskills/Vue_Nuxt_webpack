<template>
    <div>
        center
    </div>
</template>

<script>
export default {
    middleware({store,route,redirect,params,query}){
        console.log('middleware pages 组件都独享前置守卫')
    }
}
</script>

<style scoped>

</style>