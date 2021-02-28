export default ({app,redirect,params,query,store})=>{
    //app = vue实例
    //redirect  跳转函数
    /**
        app.router.beforeEach((to,from,next)=>{
            //全局前置的守卫,插件
            //它只能执行next(true or false),不能执行next('/login')❌特定的指向
        })
     */
    // app.router.beforeEach((to,from,next)=>{
    //     //全局前置的守卫,插件
    //     //它只能执行next(true or false),不能执行next('/login')❌特定的指向
    //     console.log('plugins router',to)
    //     if(to.name=='login' || to.name =='center'){
    //         next()
    //     }else{
    //         redirect({name:'login'})
    //     }
    // })

    app.router.afterEach((to,from)=>{
        
        console.log('插件后置守卫')
    })
}