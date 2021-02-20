<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                {{data.name}}
                <img :src="data.poster" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            datalist:[]
        }
    },
    asyncData(){
        return axios({
            url:`https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5264259`,
            method:'get',
            headers:{
              'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16084672032938535019544577","bc":"110100"}',
              'X-Host': 'mall.film-ticket.film.list',
            }
        })
        .then(_=>{
            console.log(_.data.data.films)
            return {
                datalist:_.data.data.films
            }
        })
    },
    methods:{
        handleClick(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>