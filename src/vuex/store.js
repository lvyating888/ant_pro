import {createStore} from "vuex";
import storage from "@/utils/storage";
import User from './modules/user';
const store = createStore({
    state(){//数据
        return{
            /*count:1,
            msg:'nihao sdad'*/
            menuColor:storage.get("setmenu") && storage.get("setmenu").menucolor || 'dark', //主题色
            menuStyle:storage.get("setmenu") && storage.get("setmenu").menustyle || 'left', //导航样式
        }
    },
    mutations:{//方法 异步操作建议放在actions里面
        /*incCount(state){
            state.count++
        },
        setCount(state,num){
            state.count=num;
        },
        setMsg(state,msg){
            state.msg=msg;
        }*/
        menuColor(state,data){
            state.menuColor = data ;
            var menuset=storage.get("setmenu") || {};
            menuset.menucolor=state.menuColor;
            storage.set("setmenu",menuset);
        },
        menuStyle(state,data){
            state.menuStyle = data ;
            var menuset=storage.get("setmenu") || {};
            menuset.menustyle=state.menuStyle;
            storage.set("setmenu",menuset);
        }
    },
    getters:{//计算属性
        /*reverseMsg(state){
            return state.msg.split('').reverse().join('');
        },
        num(state){
            return state.count+10;
        }*/
    },
    actions:{//执行mutations里面的方法 主要用于异步

       /* incCount(context){
            context.commit('incCount');//执行mutations 里面的 incCount
        },
        setMsg(context,msg){
            setTimeout(()=>{
                context.commit('setMsg',msg);
            },1000)
        }*/
    },
    modules:{//模块
        User
    }
});
export default store;