<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <router-link :to="{path: '/'}">
                    <img class="head-logo" src="../assets/logo.png">
                </router-link>
                
                <div class="head-nav">
                    <ul>
                        <li>{{username}}</li><li class="nav-pile" v-if="username!==''">|</li>
                        <li v-if="username===''" @click="logClick">登录</li><li class="nav-pile" v-if="username===''">|</li>
                        <li v-if="username===''" @click="regClick">注册</li><li class="nav-pile" v-if="username===''">|</li>
                        <li @click="aboutClick">关于</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="app-content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
        </div>
        <div class="app-foot">
            <p>@ 2018 fishenal MIT</p>
        </div>
         <!-- 关闭方法合并@on-close="closeLog"、@on-close="closeReg"、@on-close="closeAbout" -->
        <my-dailog :isShow="isShowLogDailog" @on-close="close('isShowLogDailog')">     
            <log-from @has-log="onSuccessLog" >log</log-from>
        </my-dailog>
        <my-dailog :isShow="isShowRegDailog" @on-close="close('isShowRegDailog')">
            <reg-form>reg</reg-form>
        </my-dailog>
        <my-dailog :isShow="isShowAboutDailog" @on-close="close('isShowAboutDailog')">
            <p>你说，岁月太吝啬，还没有好好享受幸福，不幸就叩响了门扉。是的，四季中有温暖的春天，
                还要有酷暑难耐的夏天和冰冷难熬的冬天。生活也是这样，有荆棘和坎坷，也有苦涩和无奈。
                如果没有办法改变现实，就选择平静地接受吧！良好的心态可以让自己更理智，更豁达，
                看得更开些，更远些。生活的天空不可能永远是湛湛晴天，生活的小河也不会总是碧波微澜。
                千万不要因为世事的繁杂和无奈而荒芜了内心的花苑，好好侍弄自己的心灵花苑，植一米阳光，
                植一缕花香，让心田充溢温暖和芬芳。
            </p>
        </my-dailog>
    </div>
</template>
<script>
import Dailog from './dailog'
import regform from '../components/self/regform'
import logform from '../components/self/logform'
export default {
    components:{ 
        myDailog:Dailog,
        regForm:regform,
        logFrom:logform
     },
    data(){
        return{
            isShowAboutDailog: false,
            isShowLogDailog: false,
            isShowRegDailog: false,
            username:''
            
        }
    },
    methods:{
        aboutClick: function(){
            this.isShowAboutDailog=true;
        },
        logClick: function(){
            this.isShowLogDailog=true;
        },
        regClick: function(){
            this.isShowRegDailog=true;
        },
        //接收模拟后台数据
        onSuccessLog:function(data){
            console.log(data)
            this.username=data.username
            this.isShowLogDailog=false; //获取到后台数据后弹窗隐藏
        },
        //合并写方法
        close:function(attr){
            this[attr]=false
        }
        //分开写方法
        // closeAbout:function(){
        //     this.isShowAboutDailog=false;
        // },
        // closeLog:function(){
        //     this.isShowLogDailog=false;
        // },
        // closeReg:function(){
        //     this.isShowRegDailog=false;
        // },
    }
}
</script>
<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    color: inherit;
    text-decoration: none;
}
body{
    background: #f0f2f5;
    font-size: 14px;
    color: #444;
}
.app-head{
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
}
.app-head-inner{
    width: 1200px;
    margin: 0 auto;
}
.head-logo{
    float: left;
}
.app-head-inner img{
    width: 50px;
    margin-top: 20px;
}
.head-nav{
    float:right;
}
.head-nav ul{
    overflow: hidden;
}
.head-nav li{
    cursor: pointer;
    float: left;
}
.nav-pile{
    padding:0 10px;
}
.app-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 0 auto;
}
.container{
    width: 1200px;
    margin: 0 auto;
}
/* logform样式 */
.button{
    display: inline;
    background: #4fc08d;
    color: #fff;
    cursor: pointer;
}
.Blog{
    padding:10px 20px;
}
.button:hover{
    background: #4fc08d;
}
.g-form-line{
    padding: 15px 20%;
}
.g-form-lable{
    width: 80px;
    font-size: 16px;
    display: inline-block;
}
.g-form-input{
    display: inline-block;
    padding: 10px 0px;
}
.g-form-input input{
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
}
.g-form-btn{
    padding-left: 40%;
}
.error{
    color: red;
}
</style>
