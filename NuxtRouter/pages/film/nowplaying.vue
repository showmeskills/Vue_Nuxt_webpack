<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleClick(data)">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datalist:['1111','2222',3333]
        }
    },
    methods:{
        handleClick(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>