<template>

  <a-button @click="sendParent()" type="primary">获取父组件方法</a-button>
  <a-button @click="getParentFn()" type="primary">执行父组件方法</a-button>
</template>
<script>
  export default {
    data(){
      return{
        msg:123132
      }
    },
    methods:{
      getParentTitle(){
        alert(this.title);
      },
      getParentMsg(){
        console.log(this.$parent.msg);
      },
      getParentFn(){
        this.$parent.run()
      },
      sendParent(){
        this.$emit('send',this.msg)
      }
    },
    /*接收父组件传递的值*/
    props:{
      title: String,
      userinfo:Object
    }
  }
</script>
<style lang="less" scoped>
//scoped 表示css是个局部作用域
header{
  width:100%;
  height:44px;
  text-align: center;
  line-height:44px;
  background-color:#f5222d;
  color:#ffffff;
}
</style>