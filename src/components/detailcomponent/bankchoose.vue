<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for='(item, index) in banks' :key="index" :title="item.lable" @click="chooseBank(index)" :class="['bank-'+item.name,{active:index===nowIndex}]"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nowIndex:0,
            banks:[
                {
                    id:'201',
                    name:'zhaoshang',
                    lable:'招商银行'
                },
                 {
                    id:'301',
                    name:'jianshe',
                    lable:'中国建设银行'
                },
                 {
                    id:'401',
                    name:'pufa',
                    lable:'浦发银行'
                },
                 {
                    id:'501',
                    name:'jiaotong',
                    lable:'交通银行'
                },
                 {
                    id:'601',
                    name:'nongye',
                    lable:'中国农业银行'
                },
                 {
                    id:'701',
                    name:'zhongguo',
                    lable:'中国银行'
                },
                 {
                    id:'801',
                    name:'gongshang',
                    lable:'工商银行'
                }
            ]

        }
    },
    methods:{
        chooseBank:function(index){
            this.nowIndex=index;
            this.$emit('on-change',this.banks[index])
        }
    }
}
</script>

<style scoped>
.chooser-component{
    position: relative;
    display: inline-block;
}
.chooser-list li.active{
    border:  1.5px solid #4fc08d;
}
.chooser-list li{
    display: inline-block;
    width: 170px;
    height: 40px;
    margin: 5px;
    border: 1px solid #e3e3e3;
    cursor: pointer;
}
.bank-zhaoshang{
    background: url('../../assets/bank/zhaoshang.jpg') no-repeat;
}
.bank-jianshe{
    background: url('../../assets/bank/jianshe.jpg') no-repeat;
}
.bank-pufa{
    background: url('../../assets/bank/pufa.jpg') no-repeat;
}
.bank-jiaotong{
    background: url('../../assets/bank/jiaot.jpg') no-repeat;
}
.bank-nongye{
    background: url('../../assets/bank/nongye.jpg') no-repeat;
}
.bank-zhongguo{
    background: url('../../assets/bank/zhongguo.jpg') no-repeat;
}
.bank-gongshang{
    background: url('../../assets/bank/gongshang.jpg') no-repeat;
}
</style>
