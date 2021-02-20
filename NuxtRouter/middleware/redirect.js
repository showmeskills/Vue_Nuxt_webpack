export default function({isHMR,app,store,route,params,error,redirect}){
    if(isHMR) return;
    //页面均放在_lang文件夹下,即lang为动态路由参数
    /*if(!params.lang){//此写法会出现路由重定向次数过多的问题
        return redirect('/'+defaultLocale+' '+route.fullPath)
    }*/
    if(route.fullPath == '/film'){
        return redirect('/film/nowplaying')
    }
}
router:{
middleware:'redirect'//即没此路由跳转会调用该中间件
//多个中间件写法
//middleware:['redirect']
}