<template>
    <div class="checkpay">
        <this-dailog :isShow='isShowcheckBuy' @on-close="checkStatus">请检查你的支付状态!
            <div class="check-btn" @click="checkStatus">支付成功</div>
            <div class="check-btn" @click="checkStatus">支付失败</div>
        </this-dailog>
        <!-- 接收组件传过来的on-close事件，设置 -->
        <this-dailog :isShow='paySuccess' @on-close='close'>购买成功！</this-dailog>  
        <this-dailog :isShow='payFail'>购买失败！</this-dailog>
    </div>
</template>

<script>
import thisDailog from '../../components/dailog'
export default {
    //外部控制是否显示
    props:{
        isShowcheckBuy:{
            type:Boolean,
            default:false
        },
        orderId:{
            type:[String,Number]
        }
    },
    components:{thisDailog},
    data(){
        return{
            paySuccess:false,
            payFail:false,
            isShowThisDailog:false
        }
    },
    methods:{
        //发送请求
        checkStatus:function(){
            this.$http.get('/api/checkOrder',{orderId:this.orderId}).then((res)=>{
                this.paySuccess=true;
                // alert("yes")
                this.$emit('on-close-check')
            },(err)=>{
                this.payFail=true;
                }
            )
        },
        //关闭弹框
        //跳转到订单页面
        close:function(){
            this.$router.push({path:'/orderpage'})
            //this.paySuccess=false
        }
        //点击支付失败方法
        // checkStatusErr:function(){
        //     this.$http.get('/api/checkOrder',{orderId:this.orderId}).then((res)=>{
        //         this.payFail=true;
        //         this.$emit('on-check')
        //     },(err)=>{
        //         alert('err')
                    
        //         }
        //     )
        // }
    }
}
</script>

<style scoped>
.check-btn{
    background: #4fc08d;
    border: 1px solid #4fc08d;
    width: 80px;
    height: 30px;
    color: #fff;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;
}
</style>
