<template>
        <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-lable user">用户名：</span>
                <div class="g-form-input">
                    <input type="text" size="25" placeholder="请输入注册电子邮箱" v-model="userName">
                    <span class='error'>{{userError.errorText}}</span>
                </div><br>
                 <span class="g-form-lable">设置密码：</span>
                 <div class="g-form-input">
                     <input type="password" size="25" placeholder="请输入6位密码" v-model="passWord">
                     <span class='error'>{{passError.errorText}}</span>
                </div><br>
                <span class="g-form-lable">确认密码：</span>
                 <div class="g-form-input">
                     <input type="password" size="25" placeholder="请再次输入密码" v-model="correctWord">
                     <span class='error'>{{correctError.errorText}}</span>
                </div>
            </div>
        </div>
        <div class="g-form-btn">
            <a class="button Blog" @click="register">注册</a>
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
            correctWord:'',
            errorText:''
        }
    },
    computed:{
        userError(){
            var errorText,status;
            if(/@/g.test(this.userName)){
                status=true;
                errorText=''
            }else{
                status=false;
                errorText='*格式错误'
            }
            if(!this.userflag){
                errorText='';
                this.userflag=true;
            }
            return{
                status,errorText
            }
        },
        passError(){
            var errorText,status;
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
        },
        correctError(){
            var errorText,status;
            if(!/^[0-9A-Za-z]{6,15}$/.test(this.passWord)){
                status=false;
                errorText='*密码过短'
            }
            else if(this.passWord!==this.correctWord){
                status=false;
                errorText='*两次密码不匹配';
            }else{
                errorText=''
            }
             if(!this.checkflag){
                errorText='';
                this.checkflag=true;
            }
            return{
                errorText,status
            }
        }
    },
    methods:{
        register:function(){
            if(!this.userError.status||!this.passError.status){
                this.errorText='格式错误，请重新输入'
            }
            else{
                this.errorText=''
            }
        }
    }
}
</script>

<style>

</style>
