import axios from './intercept';
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    $get(url: any, params: any) {
        let pro = axios.get(url, {params});
        pro.catch(() => {
            message.error('系统出现错误');
        })
        return pro;
    },
    $post(url: any, params: any) {
        let pro = axios.post(url, params);
        pro.catch(() => {
            message.error('系统出现错误');
        })
        return pro;
    }
});