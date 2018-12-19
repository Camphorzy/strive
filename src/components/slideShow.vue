<template>
    <div class="slide-show" @mouseout="runIntv" @mouseover="clearIntv">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{slides[nowIndex].title}}</h2>
        <ul class="slide-pages">
            <li @click="goto(prev)">&lt;</li>
            <li v-for="(item,index) in slides" :key="index" @click="goto(index)">
                <a :class="{on: index===nowIndex}">{{index+1}}</a>
            </li>
            <li @click="goto(next)">&gt;</li>
        </ul>
    </div>
</template>
<script>
export default {
    //子组件接收值，接收slides属性
    props:{
        slides:{
            type:Array,    //设置接收类型
            default:[]
        },
        inv:{
            type:Number,
            default:1000
        }
    },
    data(){
        return{
            nowIndex:0,
            isShow:true
        }
    },
    //计算属性实现翻页,采用返回值，不能用赋值来改变index
    computed:{
        prev(){
            if(this.nowIndex===0){
                return this.slides.length-1;
            }else{
               return this.nowIndex -1;
            }   
        },
        next(){
            if(this.nowIndex===this.slides.length-1){
                return 0;
            }else{
               return this.nowIndex +1;
            }
        }
    },
    
    methods:{
        //点击切换图片，把slides中index传入
        goto: function(index){
            //设置动画效果，现将其设置为false
            this.isShow=false;
            setTimeout(()=>{
                this.isShow=true;
                //赋值 
                this.nowIndex=index;
                //子传父(把切换过后的index值传入自定义事件里)，父组件监听
                this.$emit('onchange',index);
            },10)
            
        },
        //自动切换setInterval()
        runIntv:function(){
            this.interId=setInterval(()=>{
                this.goto(this.next);   //1s后进入下一张(回调函数)
            },this.inv)
        },
        //清理定时器
        clearIntv:function(){
            clearInterval(this.interId);
        }
    },
    
    mounted(){
        this.runIntv();  //调用运行
        // console.log(this.slides);
        
    }
}
</script>
<style scoped>
.slide-trans-enter-active{
    transition: all .5s;
}
.slide-trans-enter{
    transform: translateX(300px);
}
.slide-trans-old-leave-active{
    transition: all .5s;
    transform: translateX(-300px);
}
.slide-show{
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 350px;
    overflow: hidden;
}
.slide-show h2{
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
}
.silde-img{
    width: 100%;
}
.silde-img img{
    width: 100%;
    position: absolute;
    top: 0;
}
.slide-pages{
    position: absolute;
    bottom: 10px;
    right: 15px;
}
.slide-pages li{
    float: left;
    color: #fff;
    padding-left: 10px;
    cursor: pointer;
}
.on{
    color:yellow;
}
</style>

