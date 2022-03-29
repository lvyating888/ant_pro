import axios from "axios";

//创建实例时设置配置的默认值
var instance = axios.create({
    //baseURL:'http://x.mp12345.com:8089',
    //timeout:2500// 请求时间
});
//添加请求拦截器
instance.interceptors.request.use(function (config){
    console.log(config);
    console.log(1232132322);
    //在发送请求之前
    return config;
},function (error){
   //请求错误
    //message.error(error);
   return Promise.reject(error);
});
//响应拦截器 拿到数据走这里
instance.interceptors.response.use(function (response){
    //
    return response;
},function (error){
    return Promise.reject(error);
})

export default instance;
