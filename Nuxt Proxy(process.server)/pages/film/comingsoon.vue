<template>
    <div>
        comingsoon
        <ul>
            <li v-for="data in list" :key="data.id">
                {{data.nm}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            list:[]
        }
    },
    asyncData(data){
        console.log(process.server)
        return axios({
            url:process.server? `http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=53D45E30731B11EB9764F9AE218AD3F94BDBD9525B864122ACAF4BA611FC7877&optimus_risk_level=71&optimus_code=10` : '/ajax/movieOnInfoList?token=&optimus_uuid=53D45E30731B11EB9764F9AE218AD3F94BDBD9525B864122ACAF4BA611FC7877&optimus_risk_level=71&optimus_code=10',
        })
        .then(_=>{
            console.log(_.data)
            return {
               list:_.data.movieList
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