<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible :theme="menuColor">
    <div class="logo" >
      <a id="mp_logo"></a>
      <i class="logoi"></i>
      <span title="物资采购平台" :class="menuColor=='dark'?'fontcolor':''">
        物资采购平台
      </span>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" :theme="menuColor" mode="inline">
      <router-link to="/">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>
            首页
          </span>
        </a-menu-item>
      </router-link>
      <router-link to="/page2">
        <a-menu-item key="2">
          <desktop-outlined />
          <span>
           page2
          </span>
        </a-menu-item>
      </router-link>
      <a-sub-menu key="sub1">
        <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import {mapState} from "vuex";
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
  methods:{
  },
  mounted() {
  },
  computed:{//计算属性
    // ...mapState(['count','list']),
    ...mapState({
      menuColor:(state)=> state.menuColor,
      menuStyle:(state)=>state.menuStyle,
      userMenu: (state) => state.User.userMenu,
    }),
  }

});
</script>
<style scoped lang="less">
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.ant-menu-item a,.ant-menu-item-selected a, .ant-menu-item-selected a:hover{
  color: #ffffff;
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.ant-layout-sider-dark{
  .logo {
    .fontcolor {
      color: #fff;
    }
    #mp_logo {
      width: 30%;
      height: 45px;
      background-image: url("https://w2.mp12345.com/html/meikuang/personal/img/logo.png");
    }
  }
}
.ant-layout-sider-light{
  .logo{
    .fontcolor{
      color: #333;
    }
    #mp_logo {
      width: 45px;
      height: 45px;
      background-image: url("https://webimg.mp12345.com/static/gycimg/logo_hg_new.png");
    }
  }
}
.logo{
  padding:6px 0 6px;
  a{
    display:inline-block;
    vertical-align: middle;
  }
  span{
    vertical-align: middle;
  }
  #mp_logo {
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .logoi {
    vertical-align: middle;
    font-style: normal;
    display: inline-block;
    height: 25px;
    width: 1px;
    background-color: @primary-color;
    margin: 0 3%;
  }
}
</style>