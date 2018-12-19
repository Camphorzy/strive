<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据预测</h2>
            <p>当然这样的定义是站在网络营销管理的角度来考虑的，如果出于其他方面的目的，
                对网站流量分析会有其他相应的解释。
            </p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <fore-counts></fore-counts>
                </div>
            </div>
             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    媒介：
                </div>
                <div class="sales-board-line-right">
                    <mult-choose :chooses='datas' ></mult-choose>
                </div>
            </div>
             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <fore-times :tchoose='times'></fore-times>
                </div>
            </div>
             <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    <span>500元</span>
                </div>
            </div>
            <div class="index-border-button">
                <a href="" class="button">立即购买</a>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>大数据预测是大数据最核心的应用，大数据预测将传统意义预测”拓展到“现测”。
                大数据预测的优势体现在它把一个非常困难的预测问题，转化为一个相对简单
                的描述问题，而这是传统小数据集根本无法企及的。从预测的角度看，大数据
                预测所得出的结果不仅仅得到处理现实业务简单、客观的结论，更能用于帮助
                企业经营决策，收集起来的资料还可以被规划，引导开发更大的消费力量。在
                小数据时代，由于缺乏获取全体样本的手段，人们发明了“随机调研数据”的方
                法。理论上，抽取样本越随机，就越能代表整体样本。但问题是获取一个随机
                样本代价极高，而且很费时。人口调查就是典型一例，即使一个大国都做不到
                每年都发布一次人口调查，因为随机调研实在是太耗时耗力。但有了云计算和
                数据库以后，获取足够大的样本数据乃至全体数据，就变得非常容易。
            </p>
        </div>
    </div>
</template>

<script>
import multChoose from '../../components/detailcomponent/multchoose'
import foreCounts from '../../components/detailcomponent/counts'
import foreTimes from '../../components/detailcomponent/times'
export default {
    components:{multChoose,foreCounts,foreTimes},
    data(){
        return{
            datas:[
                {
                    lable:'纸质报告',
                    value:0
                },
                {
                    lable:'pdf',
                    value:1
                },
                {
                    lable:'页面报告',
                    value:2
                },
                {
                    lable:'邮件',
                    value:3
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
</style>
