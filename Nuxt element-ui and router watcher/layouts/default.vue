<template>
  <div>
    <Appheader v-if='bNav'/>
    <Nuxt />
  </div>
</template>

<script>
import Appheader from "./app-header.vue"
export default {
  components:{
    Appheader
  },
  data(){
    return{
      bNav:true
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(route){
        if(/login|reg/.test(route.path)){
          this.bNav = false
        }else{
          this.bNav = true
        }
      }
    }
  },
  //middleware: 'auth',//页面层级中间件定义(当本页面运行,就会运行到对应middleware中间件)
  middleware({store,route,redirect,params,query}){
    console.log('middleware layouts 前置全局守卫')
    //redirect('/center')
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
