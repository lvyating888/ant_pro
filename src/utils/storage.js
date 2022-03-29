/*localStorage 存储 获取 删除*/
const storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },get(key){
        if(localStorage.getItem(key).indexOf('{')!=-1){
            return JSON.parse(localStorage.getItem(key));
        }
    },remove(key){
        localStorage.removeItem(key);
    }
}
export default storage;