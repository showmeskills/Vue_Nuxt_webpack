<template>
  <div>
    home pages
    <h1>同域</h1>
    <!-- //{{title.title}} -->
    <h1>跨域</h1>

    <h4>VueX</h4>
    <button @click='getStore'>编程操作</button>
      <p>map</p>
    <div>index getters:{{getNav}}</div>
    <div>index getters:{{bNav}}</div>
    <div>user:{{data}}</div>

    <div>home:{{home}}</div>
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'

export default {
  async asyncData({$axios}){
    let res = await $axios({url:'/data/list.json'});
    //跨域
   //let res2 = await $axios({url:'/api/profiles'});
    return{
      title: res.data
    }
  },
  //fetch 对vuex请求 fetch 有store
  async fetch({$axios,store,error}){
     let res = await $axios({url:'http://localhost:3000/posts'})
     //console.log(res.data.title)
     //console.log(res.data)
      res.data && store.commit('home/M_UPDATE_HOME',{
        err:0,
        data:res.data
      })
  },
  methods:{
    getStore(){
      // 编程式访问vuex
      // 发出actions请求给user模块 切记必须加上模块的名称user/
      // this.$store.dispatch('user/A_UPDATE_USER',{
      //       err:0,
      //       msg:'登录成功',
      //       token:'假token',
      //       data:{
      //           title:'user模块的actions提交过来的数据'
      //       }
      //   });
      //   也可以发出mutations请求
      //    this.$store.commit('user/M_UPDATE_USER',{
      //       err:0,
      //       msg:'登录成功',
      //       token:'假token',
      //       data:{
      //           title:'是组件携带过去的数据'
      //       }
      //   });

        //调用vue实例上的属性来发actions和mutations请求
        //actions
        // this.A_UPDATE_USER({
        //     err:0,
        //     msg:'登录成功',
        //     token:'假token',
        //     data:{
        //         title:'user模块的actions提交过来的数据'
        //     }
        // });
        //mutations
        this.M_UPDATE_USER({
            err:0,
            msg:'登录成功',
            token:'假token',
            data:{
                title:'是组件携带过去的数据'
            }
        })
    },
    //编程vue实例上的data属性
    ...mapActions('user',['A_UPDATE_USER']),
    ...mapMutations('user',['M_UPDATE_USER']),
  },
  computed:{
    ...mapGetters(['getNav']),
    ...mapState(['bNav']),
    ...mapState('user',['data']),
    //当属行重名了,可以使用接收对象的方法
    ...mapState({home:state=>state.home.data}),

  }
}
</script>
