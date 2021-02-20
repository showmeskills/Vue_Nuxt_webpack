<template>
    <div v-if="filmInfo">
        detail--{{$route.params.id}}
        {{filmInfo}}
        <img :src="filmInfo.poster" alt="">
    </div>
</template>

<script>
import axios from "axios";
export default {
    layout: "detailtemplate",
    data(){
        return{
            filmInfo:null,
        }
    },
    asyncData(data){
       return axios({
                    url:`https://m.maizuo.com/gateway?filmId=${data.params.id}&k=3590936`,
                    method:'get',
                    headers:{
                        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"16084672032938535019544577","bc":"110100"}',
                        'X-Host': 'mall.film-ticket.film.info',
                    }
                })
                .then(_=>{
                    console.log( _.data.data.film)
                    return{
                        filmInfo: _.data.data.film,
                    }
                });
    }
}
</script>

<style scoped>

</style>