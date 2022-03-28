import { createApp } from 'vue'
import App from './App.vue'
import {Axios} from "axios";
import { Button,Menu,Layout,Breadcrumb,Drawer,Row,Col,Affix,Tooltip} from 'ant-design-vue';

import router from "@/router";
import store from './vuex/store.js';

let app=createApp(App);
//全局绑定属性
app.config.globalProperties.Axios=Axios;
app.use(Menu)
app.use(Drawer)
app.use(Breadcrumb)
app.use(Button);
app.use(Layout);
app.use(Row);
app.use(Col);
app.use(Affix);
app.use(Tooltip);
/*
* Icon.setTwoToneColor('#eb2f96');
Icon.getTwoToneColor(); // #eb2f96
* */
//挂载路由
app.use(router);
//挂载vuex;
app.use(store);
app.mount('#app')
