<template>
  <div class="global-search-wrapper input_out" >
    <a-auto-complete
        v-model:value="value"
        :options="dataSource"
        @select="onSelect"
        @search="handleSearch"
    >
      <template #option="item">
        <div style="display: flex; justify-content: space-between">
          <span>
            找到 {{item.query}} 在
            <a :href="`http://c.mp12345.com/${item.url}${item.params}`"
                target="_blank">{{item.category}}
            </a>
          </span>
        </div>
      </template>
      <!-- <a-input-search size="large" placeholder="搜索菜单" enter-button></a-input-search>-->
      <a-input v-model:value="value" placeholder="搜索菜单">
        <template #prefix class="searchbtn">
          <search-outlined />
        </template>
      </a-input>
    </a-auto-complete>

  </div>
</template>
<script lang="ts">
import {defineComponent, getCurrentInstance, ref} from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
interface Option {
  query: string;
  category: string;
  url: string;
  params: string;
}
export default defineComponent({
  components:{
    SearchOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const value = ref('');
    const dataSource = ref<Option[]>([]);
    const onSelect = (value: string) => {
      console.log('onSelect', value);
    };

    const getRandomInt = (data:any) => {
      var menulist=proxy.$store.state.User.userMenu.data.data;
      var dataarr=new Array;
      let find = menulist.filter(function (item:any){
        if(item['menuText'].indexOf(data) !=-1){
          dataarr.push(item);//返回满足条件的所有值
        }
      })
      return dataarr;
      // return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const searchResult = (query: string): Option[] => {
      console.log(getRandomInt(query));
      return getRandomInt(query).map((_item, idx) => ({
        query,
        category: _item.menuText,
        url: _item['menuUrl'],
        params: _item['params'],
      }));
    };
    const handleSearch = (val: string) => {
      dataSource.value = val ? searchResult(val) : [];
    };
    return {
      value,
      dataSource,
      onSelect,
      handleSearch,
    };
  },
});
</script>
<style lang="less">
  @inputout:240px;
  @searchbtn:40px;
  .input_out{
      width: @inputout;
      .searchbtn{
        width: @searchbtn!important;
        cursor: pointer;
      }
      .searchinput{
        width:calc(( @inputout - @searchbtn))!important;
      }
  }
</style>