<template>
  <!-- 固定抽屉切换导航 -->
  <SetDrawer></SetDrawer>
  <a-layout style="min-height: 100vh">
    <TopMenu v-if="menuStyle=='top'"></TopMenu>
    <LeftMenu v-if="menuStyle=='left'"></LeftMenu>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" v-if="menuStyle=='left'">
          <UserRight></UserRight>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-button @click="cs()">提交</a-button>
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          {{userLogin.id}}
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import SetDrawer from "@/components/layouts/SetDrawer";
import LeftMenu from "@/components/layouts/LeftMenu.vue";
import TopMenu from "@/components/layouts/TopMenu.vue";
import UserRight from '@/components/layouts/UserRight.vue';
import { defineComponent } from 'vue';
import {mapState} from "vuex";
import {Login, UserMenu} from '../api/user';
import axios from "@/utils/request";
export default defineComponent({
  components: {
    SetDrawer,
    LeftMenu,
    TopMenu,
    UserRight
  },
  data() {
    return {

    };
  },
  methods:{
    /*cs(){
      axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: '/onel/m/persist/goods.json',
        //params 必须是一个无格式对象(plain object)或 URLSearchParams 对象
        params:{
          title:1,
          description:1,
          samll_imgurl:1,
          weburl:1,
          need_count:1
        }
        //data 是作为请求主体被发送的数据
      }).then(res=>{
        console.log(res);
        console.log(122342342342423);
      })
    },*/
    /* 菜单*/
    getMenuList(){
      UserMenu({
        compId:this.userLogin.comp_id,
        uid:this.userLogin.id
      }).then(res=>{
        if(res){
          this.$store.commit('userMenu',res);
        }else{
          this.$store.commit('userMenu', {});
        }
      });
    },
    /*登录*/
    login(){
      Login({}).then(res=>{
        if(res.data.data){
          this.$store.commit('userLogin',res.data.user);
        }else{
          this.$store.commit('userLogin', {});
         // window.location.href='http://c.mp12345.com';
        }
      })
    }
  },
  mounted() {

    /*判断用户是否登陆*/
    this.login();
    /*获取用户列表*/
   /* this.getMenuList();*/
  },
  computed: {//计算属性
      // ...mapState(['count','list']),
      ...mapState({
        menuColor: (state) => state.menuColor,
        menuStyle: (state) => state.menuStyle,
        userLogin: (state) => state.User.userLogin,
        userMenu: (state) => state.User.userMenu,
      }),
  },

});
</script>
<style scoped lang="less">
</style>