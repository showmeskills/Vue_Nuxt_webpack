<template>
    <div v-if="loading">loading...</div>
</template>

<script>
export default {
    data:()=>({
        loading:false
    }),
    //有2个方法 start和finish
    methods:{
        start(){
            this.loading = true;
        },
        finish(){
            this.loading = false;
        }
    }
}
</script>

<style scoped>

</style>