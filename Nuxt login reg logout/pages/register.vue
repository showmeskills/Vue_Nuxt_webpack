<template>
    <div class="reg">
        <h1>注册</h1>    
       <el-divider></el-divider>
        <el-input v-model="username" placeholder="请输入" class="mb">
            <template slot="prepend">用户</template>
        </el-input>
        <el-input v-model="password" type="password" placeholder="请输入" class="mb">
            <template slot="prepend">密码</template>
        </el-input>
        <div class="error">{{message}}</div>
        <el-button type='primary' @click="reg">注册</el-button>
        <el-button  @click="$router.push('/login')">登录</el-button>
    </div>
</template>

<script>
export default {
    data:()=>({
        username:'',
        password:'',
        message:''
    }),
    beforeRouteLeave(to,from,next){
        if(this.username || this.password){
            let bl = window.confirm('是否需要离开');
            next(bl);
        }else{
            next();
        }
    },
    methods:{
        async reg(){
            let formData = new FormData();
            formData.append('username',this.username)
            formData.append('password',this.password)
            let res = await this.$axios({
                url:'',
                method:'post',
                data:formData,
            })
            if(res.data.err==0){
                this.$router.push('/login')
            }else{
                this.message = res.data.msg;
            }
        },

    }
}
</script>

<style scoped>
.reg{
    width:35%;
    height:auto;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-17%;
    transform:translateY(-50%)
}
.mb{
    margin-bottom:20px;
}
.error{
    color:red;
}
</style>