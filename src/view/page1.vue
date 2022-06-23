<template>
  <div>

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <button @click="ces(item)">
          {{ item.item }}1231111
        </button>
      </li>
    </ul>
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
    TeamOutlined,
  },
  data(){
    return{
      list:[{item:1,id:123},{item:2}]
    }
  },
  mounted(){
    //this.$route.params 获取动态地址
    //this.$route.query 获取get传值
    //js 跳转路由 this.$router.push({path:'...',query{id:1}})
    //name this.$router.push({name:'name',query{id:1}})
    console.log(this.$route);
    console.log(this.$route.params);
    console.log(12312321);
  },methods:{
    ces(data:any){
      console.log(data);
      this.$router.push({
        path:'/page2',
        name:'page2',
        query:{item:data.item,id:data.id}
      });
      console.log(data);
      console.log(123123232);
    }
  }
})
</script>
<style lang="less">
.icon{
  font-size:60px;
  color:red;
}
</style>