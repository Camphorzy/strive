<template>
    <div class="index-wrap">
 <!-- 左边列表 -->
        <div class="index-left">  
            <div class="index-left-block">
                <h2>全部产品</h2>
                <h3>PC产品</h3>
                <ul>
                    <li v-for="(item,index ) in productList.pc" :key='index'>
                      <a :href="item.url">{{item.name}}</a>
                      <span v-if="item.hot" class="hot-tag">HOT</span>
                    </li>
                </ul>
                <div class="hr"></div>
                <h3>应用类</h3>
                <ul>
                    <li v-for="(item,index ) in productList.app" :key='index'>
                      <a :href="item.url">{{item.name}}</a></li>
                </ul>
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="(item,index) in newsList" :key='index'>
                        <a :href="item.url">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
       <!-- 幻灯片区域 -->
        <div class="index-right">
            <slide-show :slides="slides"  :inv="slideSpeed" @onchange="onchangeslide"></slide-show>
            <div class="index-border-list">
                <!-- 这里根据绑定的class设置样式，可以是数组对象 --> <!-- 中间下方的工形区域 -->
                <div class="index-board-item" v-for="(item,index) in borderList" :key='index' :class="[{'line-last' :index%2!==0},'index-board-'+item.id]">
                    <div class="index-board-item-inner">
                        <h2>{{item.title}}</h2>
                        <p>{{item.discription}}</p>
                        <div class="index-border-button">
                           <router-link :to="{path:'/detail'}" class="button">立即购买</router-link>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import slideShow from '../components/slideShow'
//const productList = require("../json/data.js")
export default {
    components:{
        slideShow
        },
    data(){
        return{
            slideSpeed:2000,
            slides:[
                {
                    src: require('../assets/slideshow/slide1.jpg'),
                    title:'xxx1',
                    href:'detail/analysis'
                },
                {
                    src: require('../assets/slideshow/slide2.jpg'),
                    title:'xxx2',
                    href:'detail/count'
                },
                {
                    src: require('../assets/slideshow/slide3.jpg'),
                    title:'xxx3',
                    href:'detail/forecast'
                },
                {
                    src: require('../assets/slideshow/slide4.jpg'),
                    title:'xxx4',
                    href:'detail/publish'
                }
                ],
            productList:{
                pc:[{name:'数据统计',url:'http://starcraft.com'},{name:'数据预测',url:'http://warcraft.com'},{name:'流量分析',url:'http://overWatch.com',hot:true},{name:'广告发布',url:'http://hearstone.com'}],
                app:[{name:'91助手',url:'http://winxin.com'},{name:'产品助手',url:'http://teitter.com'},{name:'智能地图',url:'http://maps.com'},{name:'团队语音',url:'http://phone.com'}]
            },
            newsList:[{name:'91助手',url:'http://winxin.com'},{name:'产品助手',url:'http://teitter.com'},{name:'智能地图',url:'http://maps.com'},{name:'团队语音',url:'http://phone.com'}],
            borderList:[{title:'开放产品',discription:'品牌营销帮助你更好的找到定位',id:'earth',saleout:false},{title:'品牌营销',discription:'品牌营销帮助你更好的找到定位',id:'car',saleout:false},{title:'使命必达',discription:'品牌营销帮助你更好的找到定位',id:'voice',saleout:false},{title:'勇攀高峰',discription:'品牌营销帮助你更好的找到定位',id:'montain',saleout:false}],
        
        }
    },
    methods:{
        onchangeslide: function(){
            console.log('change success');
        },
        // buyIt:function(){
        //     this.$router.push("")
        // }
    }
}
</script>
<style scoped>
.index-wrap{
    width:1200px;
    margin: 0 auto;
    overflow: hidden;
}
.index-left{
    width: 300px;
    float: left;
    text-align: left;
}
.index-right{
    float: left;
    width: 900px;
}
.index-left-block{
    margin: 15px;
    background: #ffffff;
    box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr{
    margin-bottom: 20px;
    border: 1px #ddd solid;
}
.index-left-block h2{
    background: #4fc08d;
    color: #ffffff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3{
    padding:0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}
.index-left-block ul{
    padding: 10px 15px;
}
.index-left-block li{
    padding: 5px;
}
.index-border-list{
    overflow: hidden;
}
.index-board-item{
    float:left;
    width:400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding:20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.index-board-item-inner{
    min-height: 125px;
    padding-left: 120px;
}
.index-board-earth .index-board-item-inner{
    background: url('../assets/1.jpg') no-repeat;
}
.index-board-car .index-board-item-inner{
    background: url('../assets/2.jpg') no-repeat;
}
.index-board-voice .index-board-item-inner{
    background: url('../assets/3.jpg') no-repeat;
}
.index-board-montain .index-board-item-inner{
    background: url('../assets/4.jpg') no-repeat;
}
.index-board-item h2{
    font-size: 18px;
    font-weight: bold;
    color:#000;
    margin-bottom: 15px;
}
.line-last{
    margin-right:0px;
}
.index-border-button{
    margin-top:20px;
    background: #4fc08d;
    height: 25px;
    width: 80px;
}
.index-border-button .button{
    line-height: 25px;
    padding-left: 10px;
    color: #fff;
}
.lastest-news{
    min-height: 512px;
}
.hot-tag{
    background: red;
    color: #fff;
    font-size: 10px;
}
</style>
