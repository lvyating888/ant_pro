<template>
  <header class="admin-header" :class="menuColor">
    <div class="logo" style="display:inline-block;width: 188px;vertical-align: middle;" >
      <a id="mp_logo"></a>
      <i class="logoi"></i>
      <span title="物资采购平台" class="fontcolor">物资采购平台</span>
    </div>
    <div style="width: calc((100% - 188px));display: inline-block;vertical-align: middle;">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :theme="menuColor">
        <a-menu-item key="mail">
          <template #icon>
            <mail-outlined />
          </template>
          Navigation One
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <setting-outlined />
          </template>
          <template #title>Navigation Three - Submenu</template>
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">Option 1</a-menu-item>
            <a-menu-item key="setting:2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">Option 3</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </a-menu-item>
      </a-menu>
    </div>
  </header>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import {mapState} from "vuex";
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
  computed:{//计算属性
    // ...mapState(['count','list']),
    ...mapState({
      menuColor:(state:any)=> state.menuColor,
      menuStyle:(state:any)=>state.menuStyle
    }),
  },
});
</script>
<style lang="less">
.admin-header.light{
  background-color: #fff;
}
.admin-header.dark{
  background-color:@menu-dark-inline-submenu-bg;
}
.dark{
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
.light{
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
  padding:0 15px;
  a{
    display:inline-block;
    vertical-align: middle;
  }
  span{
    vertical-align: middle;
  }
  .fontcolor{
    width:88px;
    display: inline-block;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
    text-align: left;
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
