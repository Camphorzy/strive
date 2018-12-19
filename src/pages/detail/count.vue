<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据统计</h2>
            <p>统计数据是表示某一地理区域自然经济要素特征、规模，结构、水平等指标的数据。
                是定性、定位和定量统计分析的基础数据。比如我们通常所说的统计年鉴。
            </p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                    <ul>
                        <li class="edition" v-for='(item,index) in products' @click="chosenSelecction(index)"
                         :key='index' :title="item.lable" :class="{active:index===nowIndex}">{{item.lable}}</li>
                    </ul>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    适用地区：
                </div>
                <div class="sales-board-line-right">
                    <con-selection :selections='locations'></con-selection>
                </div>
            </div>

             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right"> 
                    <contime :tchoose="times"></contime>
                </div>
            </div>

             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right"> 
                    500元
                </div>
            </div>
            <div class="index-border-button">
                <a href="" class="button">立即购买</a>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>统计数据是表示某一地理区域自然经济要素特征、规模，结构、水平等指标的数据。</p>
            <table class="sales-board-table">
                <tr>
                    <td>安全安保</td> <td>电子电工</td><td>家庭日用</td><td>美容化妆</td>
                    <td>手机数码</td><td>办公文职</td><td>家用电器</td>
                </tr>
                <tr>
                    <td>医疗服务</td> <td>箱包服饰</td><td>礼品</td><td>机械设备</td>
                    <td>生活服务</td><td>运动休闲</td><td>游戏</td>
                </tr>
                 <tr>
                    <td>安全安保</td> <td>电子电工</td><td>家庭日用</td><td>美容化妆</td>
                    <td>手机数码</td><td>办公文职</td><td>家用电器</td>
                </tr>
                <tr>
                    <td>医疗服务</td> <td>箱包服饰</td><td>礼品</td><td>机械设备</td>
                    <td>生活服务</td><td>运动休闲</td><td>游戏</td>
                </tr>
                <tr>
                    <td>住宿</td> <td>食品保健</td><td>母婴护理</td><td>化工产品</td>
                    <td>园林艺术</td><td>果蔬生鲜</td><td>软件</td>
                </tr>
            </table>
            
        </div>
    </div>
</template>

<script>
import ConSelection from '../../components/detailcomponent/conselection'
import Contime from '../../components/detailcomponent/times'
export default {
    components:{ConSelection,Contime},
    data(){
        return{
            nowIndex: 0,
            products:[
                {
                    lable: '红色版',
                    value: 0
                },
                {
                    lable: '绿色版',
                    value: 1
                },
                {
                    lable: '黑色版',
                    value: 2
                }
            ],
            locations:[
                {
                    lable: '上海',
                    value: 0
                },
                {
                    lable: '北京',
                    value: 1
                },
                {
                    lable: '成都',
                    value: 2
                },
                {
                    lable: '重庆',
                    value: 3
                },
                {
                    lable: '武汉',
                    value: 4
                }
            ],
            times:[
                {
                    time: '半年',
                    value: 0
                },
                {
                    time: '一年',
                    value: 1
                },
                {
                    time: '三年',
                    value: 2
                }
            ]
        }
    },
     methods: {
        chosenSelecction:function(index){
            this.nowIndex=index;
            }
        }

}
</script>

<style>
.sales-board-line-right .edition{
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
.sales-board-line-right .edition:hover,
.active{
    background: #4fc08d;
    color:#fff;
}
.index-border-button{
    background: #4fc08d;
    height: 25px;
    width: 80px;
}
.index-border-button .button{
    line-height: 25px;
    padding-left: 10px;
    color: #fff;
}
</style>
