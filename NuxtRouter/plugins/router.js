export default({app,redirect,params,query,store})=>{
    //app is a new Vue, in the plugins section, it can design full configration router
    app.router.beforeEach((to,from,next)=>{
       console.log('global front defence, plugins');
       next();
    })
    app.router.afterEach((to,from)=>{
        console.log('plugins server defence')
    })
};