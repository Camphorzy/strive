<template>
    <div class="order-wrap">
        <h2>您的产品</h2>
        <div class="order-list-option">
            选择类型：
            <v-selection class="chk" :selections="productList" @on-change="productChange" ></v-selection>
        </div>
        <div class="order-list-option">
            开始日期：
            <date-picker v-model="startTime"></date-picker>
        </div>
        <div class="order-list-option">
            结束日期：
            <date-picker v-model="endTime"></date-picker>
        </div>
        <div class="order-list-option">
           关键词：
           <input type="text" class="order-query" v-model.lazy="query">
        </div>
        <button class='btn' @click="find">查询</button>
        <div class="order-list-table">
            <table>
                <tr>
                    <th v-for="(head,index) in tableHeads" :key='index' @click='changeOrder(head)' :class="{active:head.active}">{{head.lable}}</th>
                </tr>
                <tr v-for="(item,index) in tableData" :key="index" v-if='index<currentpages'>
                    <td v-for="(head,index) in tableHeads" :key='index'>{{item[head.key]}}</td>
                </tr>
            </table>
            <v-page :total-row="totalRow" @page-change="pageChange"></v-page>
        </div>
    </div>
</template>

<script>
import VSelection from '../components/detailcomponent/alyselection'
import DatePicker from 'vue2-datepicker'
export default {
    components:{VSelection,DatePicker},
    data(){
        return{
            totalRow:null,
            currentpages:null,
            startTime:'',
            endTime:'',
            query: '',
            productId:null,
            showData:[],  //分页表格显示数据
            tableData:[],   //存储传输过来的数据
            productList:[
                {
                    lable: '数据统计',
                    value: 0
                },
                {
                    lable: '数据预测',
                    value: 1
                },
                {
                    lable: '流量分析',
                    value: 2
                },
                {
                    lable: '广告发布',
                    value: 3
                },
            ],
            tableHeads:[
                {
                    lable:'订单号',
                    key: 'orderId'
                },
                {
                    lable:'购买产品',
                    key: 'product'
                },
                {
                    lable:'版本类型',
                    key: 'version'
                },
                {
                    lable:'有效时间',
                    key: 'period'
                },
                {
                    lable:'购买日期',
                    key: 'buyDate'
                },
                {
                    lable:'数量',
                    key: 'buyNum'
                },
                {
                    lable:'总价',
                    key: 'amount'
                },
            ]

        }
    },
    //监听query,改变的时候调用方法
    watch:{
        query(){
            console.log('query is change');
            this.getTableData();
        }
    },
    methods:{
        //选择类型
        productChange:function(obj){
            this.productId=obj.value; 
            console.log(this.productId)
        },
        //获取后台数据
        getTableData:function(){
            let reqParams={
                query:this.query,
                productId:this.productId,
                startTime:this.startTime,
                endTime:this.endTime
            }
            this.$http.get('/api/getOrderList',reqParams).then((res)=>{
                this.tableData=res.data.list;
                //console.log(this.tableData)
            },(error)=>{
                console.log(error);
            })
        },
        find:function(){
            this.getTableData();
        },
        //点击表头进行排序
        changeOrder:function(headItem){
            this.tableHeads.map((item)=>{
                item.active=false    //先把所有高亮取消
                return item
               // console.log(item);
            })
            headItem.active=true //点击采用高亮
            //排序功能
            if(this.currentOrder==='asc'){
                this.currentOrder='desc';
            }else{
                this.currentOrder='asc';
            }
            this.tableData=_.orderBy(this.tableData, headItem.key,this.currentOrder)  //根据headItem.key来排序
            //console.log(this.currentOrder)
        },
        //实现分页
        pageChange:function(pageInfo){
            
            this.currentpages=pageInfo.pageSize;
            //console.log(currentpage);
            this.$http.get('/api/getOrderList').then((res)=>{
               this.totalRow=res.data.list.length;
            //分页点击每页展示相应的条数
            //    var DataArray=[];
            //    for( let orderId in res.data.list){
            //         DataArray.push(orderId)
            //     }
            //    console.log(DataArray)
             //this.showData=DataArray.slice(pageInfo.pageSize*pageInfo.pageNumber-1,pageInfo.pageSize*pageInfo.pageNumber)

            },(error)=>{
                console.log(error)
            })
           
        }
    },
//生命钩子，进入页面就发送请求
    mounted(){
        this.getTableData();
    }

}
</script>

<style scoped>
 .order-wrap{
     width: 1200px;
     min-height: 580px;
     margin:0 auto;
     overflow: hidden;
 }
 .order-query{
     height: 25px;
     line-height: 25px;
     border: 1px solid #e3e3e3;
     outline: none;
     text-indent: 10px;
 }
 .order-list-option{
     display: inline-block;
     padding-left: 15px
 }
 .order-list-option:first-child{
     padding-left: 0px;
 }
 .chk{
     background: #fff;
 }
 .btn{
     margin-left: 20px;
 }
 .order-list-table table{
     width: 100%;
     margin-top: 20px;
 }
 .order-list-table td,.order-list-table th{
     border: 1px solid #4fc08d;
     color:#000;
     text-align:center;
     background: #fff;
     padding: 10px 0;
 }
 .order-list-table th{
     background:  #4fc08d;
     color: #fff;
     border: 1px solid #4fc08d;
     cursor: pointer;
 }
 .order-list-table th.active{
     background: #35495e;
 }
</style>
