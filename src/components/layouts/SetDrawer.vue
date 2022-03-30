<template>
  <div ref="containerRef">
    <a-drawer
        v-model:visible="visible"
        class="custom-class"
        style="color: red"
        title="设置"
        placement="right"
        :closable="false"
        @after-visible-change="afterVisibleChange"
        width= "260px"
    >
      <h4>导航设置</h4>
      <a-row type="flex">
        <a-col :span="12" >
          <a-tooltip
              @click="SetMenuStyfun('left')"
              placement="topLeft" title="侧边导航" class="defaultsty" :class="menuStyle=='left'?'check_item':''">
            <CheckOutlined class="checknav"/>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="">
          </a-tooltip>
        </a-col>
        <a-col :span="12" >
          <a-tooltip
              @click="SetMenuStyfun('top')"
              placement="topLeft" title="顶部导航" class="defaultsty" :class="menuStyle=='top'?'check_item':''">
            <CheckOutlined class="checknav"/>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="">
          </a-tooltip>
        </a-col>
<!--        <a-col :span="8" >
          <a-tooltip
              @click="SetMenuStyfun('blend')"
              placement="topLeft" title="混合导航" class="defaultsty" :class="menuStyle=='blend'?'check_item':''">
            <CheckOutlined class="checknav"/>
            <img src="https://gw.alipayobjects.com/zos/antfincdn/x8Ob%26B8cy8/LCkqqYNmvBEbokSDscrm.svg" alt="">
          </a-tooltip>
        </a-col>-->
      </a-row>
      <h4>导航颜色</h4>
      <a-row type="flex">
        <a-col :span="12" >
          <a-tooltip
              @click="SetMenuColfun('dark')"
              placement="topLeft" title="蓝色" class="defaultsty" :class="menuColor=='dark'?'check_item':''">
            <CheckOutlined class="checknav"/>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="">
          </a-tooltip>
        </a-col>
        <a-col :span="12" >
          <a-tooltip
              @click="SetMenuColfun('light')"
              placement="topLeft" title="白色" class="defaultsty" :class="menuColor=='light'?'check_item':''">
            <CheckOutlined class="checknav"/>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
          </a-tooltip>
        </a-col>
      </a-row>
    </a-drawer>
  </div>
  <a-affix  :target="() => containerRef"  :class="[visible?'fixedsetshow':'fixedset']">
    <a-button type="primary" @click="showDrawer" v-if="visible==false">
      <template #icon><SettingOutlined /></template>
    </a-button>
    <a-button type="primary" @click="hideDrawer" v-if="visible==true">
      <template #icon><CloseOutlined /></template>
    </a-button>
  </a-affix>
</template>
<script lang="ts">
import {SettingOutlined,CloseOutlined,CheckOutlined} from '@ant-design/icons-vue';
import {defineComponent, getCurrentInstance, ref} from 'vue';
import {mapState} from 'vuex';
export default defineComponent({
  data(){
    return {
    }
  },
  components: {
    SettingOutlined,
    CloseOutlined,
    CheckOutlined
  },
  methods:{
  },
  computed:{//计算属性
    // ...mapState(['count','list']),
    ...mapState({
      menuColor:(state:any)=> state.menuColor,
      menuStyle:(state:any)=>state.menuStyle
    }),
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const containerRef = ref();
    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    const hideDrawer = () => {
      visible.value = false;
    };
    const SetMenuColfun =(data:any)=>{
      proxy.$store.commit('menuColor',data);
    };
    const SetMenuStyfun=(data:any)=>{
      proxy.$store.commit('menuStyle',data);
    }
    return {
      containerRef,
      visible,
      afterVisibleChange,
      showDrawer,
      hideDrawer,
      SetMenuColfun,
      SetMenuStyfun
    };
  },
  mounted() {
    /*console.log(this.$parent);
    console.log(this.$parent.setmenucolor);*/
  }
});
</script>
<style lang="less">
@drawerwidth:260px;
.fixedset{
  position: fixed;
  z-index: 1111;
  right:0;
  top:120px;
  .ant-affix{
    width:auto!important;
    left:0;
  }
}
.fixedsetshow{
  position: fixed;
  z-index: 1111;
  right:@drawerwidth;
  top:120px;
  .ant-affix{
    width:auto!important;
  }
}
.defaultsty{
  cursor: pointer;
}
.checknav{
  display: none;
}
.check_item{
  position:relative;
  .checknav{
    display: block;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) ;
    font-size:14px;
    color: @primary-color;
  }
}
</style>

