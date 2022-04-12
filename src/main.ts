import { createApp } from 'vue'
import App from './App.vue'
import axios from "./utils/request";

import { Button,Menu,Layout,Breadcrumb,Drawer,Row,Col,Affix,Tooltip,Input,AutoComplete,Upload} from 'ant-design-vue';

import router from "@/router";
import store from './vuex/store.js';

let app=createApp(App);
//全局绑定属性
app.config.globalProperties.Axios=axios;
app.use(Menu)
app.use(Drawer)
app.use(Breadcrumb)
app.use(Button);
app.use(Layout);
app.use(Row);
app.use(Col);
app.use(Affix);
app.use(Tooltip);
app.use(Input);
app.use(AutoComplete);
app.use(Upload);
/*
* Icon.setTwoToneColor('#eb2f96');
Icon.getTwoToneColor(); // #eb2f96
* */
//挂载路由
app.use(router);
//挂载vuex;
app.use(store);

app.mount('#app')
