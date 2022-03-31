import axios from "../utils/request";
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function Login(parameter:any) {
    return axios({
        url: '/api/adminlogin.json',
        method: 'get',
        data: parameter
    })
}
export function UserMenu(parameter:any) {
    return axios({
        url: '/api/sys/role/menuList.json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'get',
        //params 必须是一个无格式对象(plain object)或 URLSearchParams 对象
        params: parameter
        //data 是作为请求主体被发送的数据
    })
}

