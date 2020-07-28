import axios from 'axios'
import {AlertWin} from  '../utils/common';
const baseUrl = "http://yourRequest.com"

const service = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded"},
  // withCredentials: true
})

const fetch = function (method, url, data) {
  // console.log("[axio] url:" + url + ",params:"+ JSON.stringify(params) + ",data:"+ JSON.stringify(data))
  return new Promise((resolve, reject) => {
    service({method,url, data})
    .then((res) => {
      // console.log("[axio] return:", res)
      
      if(res.data.code==0){
        resolve(res.data)
      } else {
        // console.log(res.data)
        AlertWin('失败')
      }
    }).catch((err) => { 
      reject(err)
      AlertWin("网络超时")
      console.log('err:',err);
    })
  })
}
export default fetch