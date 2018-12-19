<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>网站流量分析，是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，
                从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现
                目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供
                依据。当然这样的定义是站在网络营销管理的角度来考虑的，如果出于其他方面的目的，
                对网站流量分析会有其他相应的解释。
            </p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <vcounts @on-change="onParamChange('buyNum',$event)"></vcounts>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品类型：
                </div>
                <div class="sales-board-line-right">
                     <vselection :selections='productTypes' @on-change="onParamChange('buyType',$event)"></vselection> 
                </div>
            </div>

             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right"> 
                    <vtime :tchoose='times' @on-change="onParamChange('buyTime',$event)"></vtime>
                </div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品版本：
                </div>
                <div class="sales-board-line-right"> 
                   <veditions :edition='editions' @on-change="onParamChange('version',$event)"></veditions>
                </div>
            </div>

             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right"> 
                    {{price}}
                </div>
            </div>
            <div class="index-border-button">
                <a class="button" @click="payIt">立即购买</a>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>除了基本的网站流量统计数据分析之外，还包括用户行为分析、
                网站流量与网络营销策略关联分析,网络营销策略的问题诊断,
                以及对网络营销策略的相关建议等。
            </p>
            <h3>用户行为指标</h3>
            <p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</p>
            <ul>
                <li>用户在网站的停留时间；</li>
                <li>用户来源网站（也叫“引导网站”）；</li>
                <li>用户所使用的搜索引擎及其关键词；</li>
                <li>在不同时段的用户访问量情况等。</li>
            </ul>
            <h3>浏览网站方式</h3>
            <ul>
                <li>用户上网设备类型；</li>
                <li>用户浏览器的名称和版本；</li>
                <li>访问者电脑分辨率显示模式；</li>
                <li>用户所使用的操作系统名称和版本；</li>
                <li>用户所在地理区域分布状况等。</li>
            </ul>
        </div>
        <dailog :isShow='isShowPayDailog' @on-close="hideShowPayDailog">
            <table class="buytable">
                <tr>
                    <th>购买数量</th>
                    <th>产品类型</th>
                    <th>有效时间</th>
                    <th>产品版本</th>
                    <th>总价</th>
                </tr>
                <tr>
                    <td>{{buyNum}}</td>
                    <td>{{buyType.lable}}</td>
                    <td>{{buyTime.time}}</td>
                    <td>
                        <span v-for="(item,index) in versions" :key='index'>{{item.lable}}</span>
                    </td>
                    <td>{{price}}</td>
                </tr>
            </table>
            <h3>请选择银行：</h3>
            <bank-choose @on-change='onChangeBanks'></bank-choose>
            <div class="buytable-btn" @click="confirmBuy">确认购买</div> 
        </dailog>
        <check-buy :isShowcheckBuy='ShowcheckOrder' @on-close-check="hideCheckOrder"></check-buy>

    </div>
</template>

<script>
import _ from 'lodash'
import Vselection from '../../components/detailcomponent/alyselection'
import Vcounts from '../../components/detailcomponent/counts'
import Vtime from '../../components/detailcomponent/times'
import Veditions from '../../components/detailcomponent/edition'
import Dailog from '../../components/dailog'
import BankChoose from '../../components/detailcomponent/bankchoose'
import CheckBuy from '../../components/detailcomponent/checkBuy'
export default {
    components:{Vselection,Vcounts,Vtime,Veditions,Dailog,BankChoose,CheckBuy},
    data(){
        return{
            buyNum:0,
            buyType:{},
            buyTime:{},
            versions:[],
            price:0,
            bankId:null,
            isShowPayDailog:false,
            ShowcheckOrder:false,
            productTypes:[
                {
                    lable: '入门版',
                    value: 0
                },
                {
                    lable: '中级版',
                    value: 1
                },
                {
                    lable: '高级版',
                    value: 2
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
            ],
            editions:[
                {
                    lable: '客户版',
                    value: 0
                },
                {
                    lable: '代理商版',
                    value: 1
                },
                {
                    lable: '专家版',
                    value: 2
                }
            ]
        }
    },
    methods:{
        onParamChange:function(attr,val){   //从组件里面$event获取到的值val,给attr赋值
            this[attr]=val;      //多个对象时使用 this[attr]
            //console.log(attr,this[attr])
            this.getPrice()
        },
        // 获取购买信息传给后台，后台响应返回价格
        getPrice:function(){
            let buyVersionArray=_.map(this.versions,(item)=>{
                return item.value
            })
            let reqParams={
                buyNumber: this.buyNum,
                buyType: this.buyType.value,
                buyTime: this.buyTime.value,
                version: buyVersionArray.join(',')       //把数组转化成字符串形式
            }
            this.$http.get('/api/getprice',reqParams).then((res)=>{
                //console.log(res.data)
                this.price=res.data.amount;
            },(error)=>{
                    alert('确认购买失败');
                    console.log(error)
                }
            )
        },
        // 点击立即购买，出现弹框
        payIt:function(){
            this.isShowPayDailog=true
        },
        hideShowPayDailog:function(){
            this.isShowPayDailog=!this.isShowPayDailog
        },
        //选择银行
        onChangeBanks:function(bankdata){
            this.bankId=bankdata.id;
            console.log(bankdata.id);
        },
        //确认购买
        confirmBuy:function(){
            let buyVersionArray=_.map(this.versions,(item)=>{
                return item.value
            })
            let reqParams={
                buyNum:this.buyNum,
                buyType:this.buyType,
                buyTime:this.buyTime,
                Version:buyVersionArray.join(','),
                bankId:this.bankId
            }
            this.$http.get('/api/greateOrder',reqParams).then((res)=>{
                this.orderId=res.data.orderId;
                console.log(this.orderId)
                this.ShowcheckOrder=true ;   //成功之后弹出
                this.isShowPayDailog=false ;//确认支付页面隐藏
            },(error)=>{
                alert(error);   //支付失败
                // console.log(error)
            })
        },
        //点击支付成功/失败隐藏页面
        hideCheckOrder:function(){
           this.ShowcheckOrder=!this.ShowcheckOrder 
        },
    },
    mounted(){
        this.buyNum=1,
        this.buyType=this.productTypes[0],
        this.versions=[this.editions[0]],
        this.buyTime=this.times[0]
        this.getPrice()
    }

}
</script>

<style scoped>
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
.buytable{
    width: 100%;
    margin-bottom: 20px;
}
.buytable th,.buytable td{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
}
.buytable th{
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
}
.buytable-btn{
    background: #4fc08d;
    border: 1px solid #4fc08d;
    width: 80px;
    height: 30px;
    color: #fff;
    margin-left: 45%;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
}
</style>
