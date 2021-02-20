<template>
    <div>
        <ul>
            <nuxt-link to='/film/nowplaying' tag="li" >正在热映</nuxt-link>
            <nuxt-link to='/film/comingsoon' tag="li" >即将上演</nuxt-link>
        </ul>
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>