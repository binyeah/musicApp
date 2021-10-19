import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
const baseUrl = "http://music.eleuu.com"

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: { "Content-Type": "application/x-www-form-urlencoded"},
  // withCredentials: true
})

const fetch = function (method, url, data) {
  // console.log("[axio] url:" + url + ",params:"+ JSON.stringify(params) + ",data:"+ JSON.stringify(data))
  return new Promise((resolve, reject) => {
    service({method,url, data})
    .then((res) => {
      // console.log("[axio] return:", res)
      
      if(res.data.code===200){
        resolve(res.data)
      } else {
        // console.log(res.data)
        Toast('网络错误，请重试！')
      }
    }).catch((err) => { 
      reject(err)
      Toast('网络错误，请重试！')
      console.log('err:',err);
    })
  })
}
export default fetch