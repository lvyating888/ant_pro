<template>
  <div>
    <BackwardOutlined style="font-size:20px;"/>
    <hr>
    <BackwardOutlined class="icon"/>
    <hr>
    <TeamOutlined />
    page1
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