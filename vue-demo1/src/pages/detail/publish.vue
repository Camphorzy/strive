<template>
   <div class="sales-board">
       <div class="sales-board-intro">
            <h2>广告发布</h2>
            <p>指利用一定媒介或形式，发布各类广告，利用其他形式发布带有广告性质的信息的经营活动。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <pub-counts></pub-counts>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    行业：
                </div>
                <div class="sales-board-line-right">
                    <pub-profession :selections='professionList'></pub-profession>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    产品版本：
                </div>
                <div class="sales-board-line-right">
                    <pub-edition :edition='editionList'></pub-edition>
                </div>
            </div>

             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right"> 
                    <pubtime :tchoose='times'></pubtime>
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
            <p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，
                经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项
                工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负
                责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量
                实施监督。
            </p>
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
import PubCounts from '../../components/detailcomponent/counts'
import PubProfession from '../../components/detailcomponent/profession'
import PubEdition from '../../components/detailcomponent/edition'
import Pubtime from '../../components/detailcomponent/times'
export default {
    components:{PubCounts,PubProfession,PubEdition,Pubtime},
    data(){
        return{
            professionList:[
                {
                    lable:'媒体',
                    value:0
                },
                {
                    lable:'金融',
                    value:1
                },
                {
                    lable:'电子',
                    value:2
                },
                {
                    lable:'产品',
                    value:3
                }
            ],
            editionList:[
                {
                    lable:'初级版',
                    value:0
                },
                {
                    lable:'中级版',
                    value:1
                },
                {
                    lable:'高级版',
                    value:2
                },
                {
                    lable:'专业版',
                    value:3
                }
            ],
            times:[
                {
                    time:'半年',
                    value:0
                },
                {
                    time:'一年',
                    value:1
                },
                {
                    time:'三年',
                    value:2
                }
            ]
        }
    }

}
</script>

<style>
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
