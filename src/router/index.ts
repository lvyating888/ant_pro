import { createRouter,createWebHashHistory} from 'vue-router';
import index from '../view/index.vue';
import page1 from '../view/page1.vue'
import page2 from '../view/page2.vue';
import {start,done} from "@/utils/nprogress";
/*默认跳到首页 去验证是否登陆 若有登陆页则跳到登陆页*/
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
                name:'page1',
                component: page1

            },
            {
                path: 'page2/',
                name:'page2',
                component: page2
            },
        ]
    },
    {
        path: '/404',
        name:'404',
        component:()=>import('../view/404.vue')
    },
    /*{
        path: '/ces',
        name:'ces',
        component:()=>import('../view/ces.vue')
    }*/
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});
/*路由加载之前*/
router.beforeEach((to,from,next)=>{
    start();
    next();
})
router.afterEach((to,from)=>{
   done();
})
export default router;