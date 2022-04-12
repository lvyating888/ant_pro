import CryptoJS from 'crypto-js' ;
const upyunSignature=(savekey:any,size?:any)=>{
    let policy=window.btoa(JSON.stringify({
     'bucket': 'webimg',
     'content-length-range': size,//文件大小限制
     'save-key': savekey+'/{year}/{mon}/{day}/{random32}{.suffix}',//文件路径
     'expiration':Math.floor(new Date().getTime() / 1000) + 86400,//过期时间不传这个会报400
   }))
   let form_api='dpNJGtx3fMUHooMfVfaPqofJbFE='
   let signature=CryptoJS.MD5(policy+'&'+form_api).toString()//此处文件密钥前要添加&符号，容易出错
   return { policy:policy, signature:signature }
}
export {upyunSignature}