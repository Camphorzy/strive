<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-lable user">用户名：</span>
                <div class="g-form-input">
                    <input type="text" size="25" placeholder="请输入电子邮箱" v-model="userName">
                    <span class='error'>{{userError.errorText}}</span>
                </div><br>
                 <span class="g-form-lable">密码：</span>
                 <div class="g-form-input">
                     <input type="password" size="25" placeholder="请输入6位密码" v-model="passWord">
                     <span class='error'>{{passError.errorText}}</span>
                </div>
            </div>
        </div>
        <div class="g-form-btn">
            <a class="button Blog" @click="login">登录</a>
        </div>
       <span>{{errorText}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName:'',
            passWord:'',
            errorText:''
        }
    },
    //计算属性来绑定v-model（根据username的改变来验证），来记录error的对象（出错的状态和文本）
    computed:{
        userError(){
            let errorText,status;
            if(/@/g.test(this.userName)){
                status=true;
                errorText=''
            }else{
                status=false;
                errorText='*格式错误'
            }
            //用flag解决一输入就有格式提示（即检测是否是第一次填写）
            //flag没有渲染，不用在data声明（效果和password做的判断一样）(但是用判断在检测登录状态就会出错)
            if(!this.userflag){
                errorText='';
                this.userflag=true;
            }
            return{
                status,errorText
            }
        },
        passError(){
            let errorText,status;
            if(/^[0-9A-Za-z]{6,15}$/.test(this.passWord)){
                status=true;
                errorText=''   
            }else{
                status=false;
                errorText='*密码过短'
            }
            if(!this.passflag){
                errorText='';
                this.passflag=true
            }
            return{
                status,errorText
            }
        }
    },
    methods:{
        login:function(){
            if(!this.userError.status||!this.passError.status){
                this.errorText='格式错误，请重新输入'
            }
            else{
                this.errorText=''
                //模拟后台获得数据
                this.$http.get('/api/user').then((res)=>{
                    //把res.data数据传给has-log事件
                   this.$emit('has-log',res.data)
                   
                }, (error)=>{
                    console.log(error)
                })
            }
            
        }
    }
}
</script>
