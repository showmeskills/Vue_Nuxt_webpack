<template>
    <div>
        login
        <button @click='login'>登录</button>
       
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$axios({
                url: '/api/users/login',
                methods:'post',
                data:{
                    email:'123456@qq.com',
                    password:'123456'
                }
            })
            .then(_=>{
                //登录时候同步vuex和cookies
                this.$cookies.set('user',_.data);
                this.$store.commit('user/M_UPDATE_USER',_.data);

                if(!this.$route.query.path || /login|reg/.test(this.$route.query.path)){
                    //如果登录成功后页面来自于login或者reg回调的/user页面
                    this.$router.replace('/user')
                }else{
                    //登录成功后会转入上一个转进来的页面
                    this.$router.replace(this.$route.query.path)
                }
            })
        }
    }
}
</script>

<style scoped>

</style>