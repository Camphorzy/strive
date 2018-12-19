<template>
    <div class="selection-component">
        <div class="selection-list">
            <ul>
                <li v-for="(item,index) in edition" :title="item.lable" :key="index" @click="choose(index)" :class="{active:checkActive(index)}">{{item.lable}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props:{
        edition:{
            type:Array,
            default:[{
            lable:'test',
            value:0
            }] 
         }    
    },
    data(){
        return{
            nowIndex:[0]
        }
    },
    methods:{
        choose:function(index){
            if(this.nowIndex.indexOf(index)===-1){
                this.nowIndex.push(index);
                console.log(this.nowIndex)
            }else{
                this.nowIndex=_.remove(this.nowIndex,(idx)=>{
                    return idx!==index})
            }
            //把结果存入数组
            let nowObjectArray=_.map(this.nowIndex,(idx)=>{
                return this.edition[idx]
            })
            this.$emit('on-change',nowObjectArray)  //返回数组对象传出
        },
        checkActive:function(index){
           return this.nowIndex.indexOf(index)!==-1
        }
        
    }

}
</script>

<style scoped>
.selection-list ul{
    list-style: none;
}
.selection-list li{
    border: 1px solid #e3e3e3;
    padding: 0px 10px 0px 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    margin-right: 20px;
}
.selection-list li:hover,.active{
    background: #4fc08d;
    color:#fff;
}
</style>
