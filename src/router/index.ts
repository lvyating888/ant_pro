import { createRouter,createWebHashHistory} from 'vue-router';
import index from '../view/index.vue';
import page1 from '../view/page1.vue'
import page2 from '../view/page2.vue'
import LeftMenu  from '../components/layouts/leftmenu.vue';
const routes=[
    {
        path:'/',
        name:'index',//命名
        component:index,
        //alias:'index',//别名
        children:[
            {
                path: '',//默认访问page2
                component: page1,
                redirect: '/page1',//重定向
            },
            {
                path: 'page1',
                component: page1
            },
            {
                path: 'page2',
                component: page2
            },
        ]
    },
    {
        path: '/404',
        name:'404',
        component:()=>import('../view/404.vue')
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});
export default router;