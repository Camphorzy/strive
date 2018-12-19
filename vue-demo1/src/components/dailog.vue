<template>
    <div class="dailog-warp" v-if="isShow">
        <div class="dailog-cover" @click="closeit"></div>
        <div  class="dailog-content">
            <p class="dailog-close" @click="closeit">x</p>
            <!-- 使用插槽来得到父组件中的<my-dailog>内信息 -->
            <slot>empty</slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        isShow: {
            type:Boolean,
            default:false     //默认是关闭状态
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        closeit:function(){
            this.$emit('on-close')       //点击灰色背景和x触发
        }
    }
}
</script>
<style scope>
/* 掉落样式 */
/* .drop-enter-active{
    transition: all 0.5s ease;
}
.drop-leave-active{
    transition: all 0.3s ease;
}
.drop-center{
    transition: translateY(-500px);
}
.drop-leave-active{
    transition: translateY(-500px);
} */
.dailog-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
}
.dailog-cover{
    background: #000;
    opacity: 0.3;
    position: fixed;
    z-index: 5;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
}
.dailog-content{
    width: 50%;
    position:fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left:50%;
    margin-left:-25%;
    z-index: 10;
    border: 2px solid #464068;
    padding:2%;
    line-height: 1.6; 
}
.dailog-close{
    position: absolute;
    right: 10px;
    top: 0px;
    cursor: pointer;
}
</style>
