<template>
    <div>
        detail--{{$route.params.id}}
    </div>
</template>

<script>
export default {
    validate({params,query}){
        return typeof params.id === 'number'
    }
}
</script>

<style scoped>

</style>