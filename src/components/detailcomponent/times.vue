<template>
    <div class="selection-component">
        <div class="selection-list">
            <ul>
                <li v-for='(item,index) in tchoose' :key='index' :title="item.time" @click="chooseTime(index)" :class="{active:index===nowIndex}">{{item.time}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tchoose:{
           type:Array,
           default:[{
           time:'test',
           value:0
            }] 
        }
    },
    data(){
        return{
            nowIndex:0
        }
    },
    methods:{
        chooseTime:function(index){
            this.nowIndex=index
            this.$emit('on-change',this.tchoose[this.nowIndex])
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
