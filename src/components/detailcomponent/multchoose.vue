<template>
    <div class="selection-component">
        <div class="selection-list">
            <ul>
                <li v-for='(item,index) in chooses' :key='index' :title="item.lable" @click="chooseMore(index)" :class="{active:checkActive(index)}">{{item.lable}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props:{
        chooses:{
            type:Array,
            default:[{
                lable: 'test',
                value: 0
            }]
        }
    },

    data(){
        return{
            nowIndexes:[0]
        }
    },
    methods:{
        chooseMore:function(index){
            if(this.nowIndexes.indexOf(index)===-1){
                this.nowIndexes.push(index);
            }else{
                this.nowIndexes=_.remove(this.nowIndexes,(idx)=>{
                    return idx!==index
                })
            }
            this.$emit('on-change',this.nowIndexes)
        },
        checkActive:function(index){
            return this.nowIndexes.indexOf(index)!==-1;
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
