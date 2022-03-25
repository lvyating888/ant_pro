<template>
  <div>
    <a-row type="flex">
      <a-col :span="12" >1 col-order-4</a-col>
      <a-col :span="12" >1 col-order-4</a-col>
      <a-col :span="6" >2 col-order-3</a-col>
      <a-col :span="6" >3 col-order-2</a-col>
      <a-col :span="6" >4 col-order-1</a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {
  BackwardOutlined,TeamOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  components:{
    BackwardOutlined,
    TeamOutlined
  },
  data(){
    return{

    }
  },
  mounted(){
    //this.$route.params 获取动态地址
    //this.$route.query 获取get传值
    //js 跳转路由 this.$router.push({path:'...',query{id:1}})
    //name this.$router.push({name:'name',query{id:1}})
    console.log(this.$route.params);
  }
})
</script>
<style lang="less">
.icon{
  font-size:60px;
  color:red;
}
</style>