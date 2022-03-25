<template>
  <div>
    404
    {{count}}
    {{revMsg}}
    <button @click="incCount"> vuex方法</button>
    <button @click="setCount"> vuex方法 传值</button>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item}}
      </li>
    </ul>
    获取 getters {{num}}

    <button @click="setActionMsg"> setActionMsg </button>

    <br>
    {{$store.state.user.count}}


  </div>
</template>
<script>
import {defineComponent} from "vue";
/*vuex 用法*/
import {mapState,mapGetters} from "vuex";//数据多的情况下，映射出你想要的
//数据少的情况$store.state.count
export default defineComponent({
  data(){
    return{

    }
  },methods:{
    incCount(){
      this.$store.commit('incCount')
    },
    setCount(){
      this.$store.commit('setCount',100);
    },
    setActionMsg(){
      this.$store.dispatch('setMsg',"改变后的msg--action");
    }
  },
  computed:{//计算属性
   // ...mapState(['count','list']),
    ...mapState({
      count:(state)=> state.count,
      list:(state)=>state.list
    }),
    //...mapGetters(['num','reverseMsg']),
    ...mapGetters({
      num:"num",
      revMsg:"reverseMsg"
    }),
    list(){
        return this.$store.state.user.list
    },
   /* count(){
      return this.$store.state.count;
    },
    num(){
      return this.$store.getters.num;
    },*/
    /*revMsg(){
      return this.$store.getters.reverseMsg;
    }*/
  }
})
</script>