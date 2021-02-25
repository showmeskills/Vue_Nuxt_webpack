<template>
    <div>
         <h1 v-if="error.statusCode">{{error.message}}</h1>
        <h1 v-else>application happens </h1>
        <button @click='$router.replace("/film/nowplaying")'>back home</button>
    </div>
</template>

<script>
export default {
    props:['error']
}
</script>