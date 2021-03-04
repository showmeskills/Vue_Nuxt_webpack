export default function ({$axios,redirect,route,store}){
    //基本配置信息
    $axios.defaults.timeout = 10000;
    //请求时拦截
    $axios.onRequest(config=>{
        console.log('请求拦截')
        //获取Vuex中的token
        config.headers.token = store.state.user.token;
        return config;
    })
    //响应拦截
    $axios.onResponse(res=>{

        //如果没有token值后,拦截器会拦截并且重定向
        if(res.data.err === 2 && route.fullPath !=='/login'){
            redirect('/login?path='+route.fullPath)
        }
        return res;
    })
    //错误处理
    $axios.onError(error=>{
        //处理
        return error;
    })
}