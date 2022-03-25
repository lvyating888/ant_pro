<template>
    <header>我是一个user组件</header>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item}}
      </li>
    </ul>
</template>
<script>
  export default {
    data(){
      return{
        list:[]
      }
    },
    mounted() {
      for (var i = 0; i < 10 ; i++) {
        this.list.push(`我是第${i}条数据`);
      }
    }
  }
</script>
<style lang="less">
//scoped 表示css是个局部作用域
ul{
  list-style: none;
}
</style>