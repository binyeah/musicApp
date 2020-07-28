import fetch  from './fetch'

// 接口1
export function wxshare(){
   return `http://api.mg-sh.cn/attachment`
}  

// 接口2
export function request(data) {
   return fetch('get', `request`,data );
}