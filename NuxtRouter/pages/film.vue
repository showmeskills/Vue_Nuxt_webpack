<template>
    <div>
        film
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    beforeRouteLeave(to,from,next){
        console.log('pages before route leave defence')
        next();
    }
}
</script>

<style scoped>

</style>