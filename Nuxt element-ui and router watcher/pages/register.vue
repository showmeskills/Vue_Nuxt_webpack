<template>
    <div>
        register
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to,from,next){
        let bl = window.confirm('是否需要离开');
        next(bl);
    }
}
</script>

<style scoped>

</style>