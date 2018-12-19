<template>
  <div class="counter-compnent">
    <div class="counter-btn" @click="minus">-</div>
    <div class="counter-show"><input type="text" @keyup="fixnumber" v-model="number"></div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  props:{
    min:{
      type:Number,
      default: 1
    },
    max:{
      type:Number,
      default: 20
    },
  },
  data(){
    return{
      number: this.min
    }
  },
  watch:{
    number(){
      this.$emit('on-change',this.number)
    }
  },
  methods:{
    //判断是否输入其他类型字符，限制条件
    fixnumber:function(){
      let fix
      if(typeof this.number==='string'){
        fix=Number(this.number.replace(/\d/g,''))
      }else{
        fix=this.number
      }
      if(fix>this.max||fix<this.min){
        fix=this.min
      }
      this.number=fix
    },
    minus:function(){
      if(this.number>this.min){
        this.number--;                        //返回当前数据
      }
      return
    },
    add:function(){
      if(this.number<this.max){
        this.number++;
      }
      return
    }
  }
}
</script>

<style>
.counter-compnent{
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-btn{
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover{
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
.counter-show{
  float: left;
}
.counter-show input{
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-align: center;
}
</style>

