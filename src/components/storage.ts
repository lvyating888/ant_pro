/*localStorage 存储 获取 删除*/
const storage={
    set(key:any,value:any){
        localStorage.setItem(key,JSON.stringify(value));
    },get(key:any){
     /*   return JSON.parse(localStorage.setItem(key)):void;*/
    },remove(key:any){
        localStorage.removeItem(key);
    }
}
export default storage;