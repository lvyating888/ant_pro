import {createStore} from "vuex";
import storage from "@/utils/storage";
const user ={
    state(){//数据
        return{
            userLogin:storage.get("setuser") || {},//当前用户信息
            userMenu:storage.get('menulist') || {}//当前用户侧边栏
        }
    },
    mutations:{//方法 异步操作建议放在actions里面
        userLogin(state,data){
            state.userLogin = data ;
            var user=storage.get("setuser") || {};
            user=data;
            storage.set("setuser",user);
        },
        userMenu(state,data){
            state.menulist = data ;
            var user=storage.get("menulist") || {};
            user=data;
            storage.set("menulist",user);
        }
    },
    getters:{//计算属性
    },
    actions:{//执行mutations里面的方法 主要用于异步
    },
};
export default user;