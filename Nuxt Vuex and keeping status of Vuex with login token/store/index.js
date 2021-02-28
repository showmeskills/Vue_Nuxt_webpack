//主模块
export const state = ()=>({
    bNav:false,
    bLoding:false,
});
//mutations
export const mutations = {
    M_UPDATE_NAV(state,payload){
        state.bNAV = payload
    },
    M_UPDATE_LOADING(state,payload){
        state.bLoading = payload
    }
}

//actions hooker
export const actions = {
    nuxtServerInit(store,{app:{$cookies}}){
        //初始化东西到store当中
        //console.log('nuxtServerInit',store,context)
        //防止用户强刷后token信息丢失,所有同步下
        let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'登录信息',token:''};
        //同步到vuex mutations中
        store.commit('user/M_UPDATE_USER',user);
    }
};

//getters
export const getters = {
    getNav(state){
        return state.bNAV ? '显示' : '隐藏';
    }
}