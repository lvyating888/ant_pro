<template>
  <!-- 固定抽屉切换导航 -->
  <SetDrawer></SetDrawer>
  <a-layout style="min-height: 100vh">
    <TopMenu v-if="menuStyle=='top'"></TopMenu>
    <LeftMenu v-if="menuStyle=='left'"></LeftMenu>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
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
import { defineComponent } from 'vue';
import {mapState} from "vuex";
import store from "@/vuex/store";
export default defineComponent({
  components: {
    SetDrawer,
    LeftMenu,
    TopMenu
  },
  data() {
    return {
    };
  },
  methods:{
    /*api/sys/role/menuList.json 菜单*/
    login(){
      this.Axios.$get('/api/adminlogin.json').then(res=>{
        if(res.data.data){
          this.$store.commit('userLogin',res.data.user);
        }else{
          this.$store.commit('userLogin', {});
          window.location.href='http://c.mp12345.com';
        }
      })
    }
  },
  mounted() {
    this.login();
  },
  computed: {//计算属性
      // ...mapState(['count','list']),
      ...mapState({
        menuColor: (state) => state.menuColor,
        menuStyle: (state) => state.menuStyle,
        userLogin: (state) => state.userLogin
      }),
  },

});
</script>
<style scoped lang="less">
</style>