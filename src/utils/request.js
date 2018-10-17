// 最终使用的版本
import axios from 'axios'
import {
  Message,
  MessageBox,
} from 'element-ui'
//登录成功后关闭弹窗的函数
window.con401close=function(){
  let con401=document.getElementById("con401")
  con401.style.display="none"
}
// 创建axios实例
const service = axios.create({
  // baseURL: "/proxyapi", // api的base_url
  // baseURL: "http://10.10.11.9:8084/", // api的base_url  
  timeout: 15000, // 请求超时时间
  withCredentials: true, // 默认的
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Accept': 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    // let con401=document.getElementById("con401")
    // if(con401){
    //   con401.style.display="none"
    // }
    if (res.status !== 1) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    
    //判断登录超时显示登录框的代码开始----------------
    let con401=document.getElementById("con401")
    if (error.response.status===401) {
      let div = document.createElement("div")
      div.setAttribute("id", "con401")
      //iframe 的src根据自己的项目来写地址 比如海外投资项目的写http://kfhwtz.shinyway.org/crm.html  通过后台重定向到http://kfzonghe.shinyway.org/login
      div.innerHTML = "<span id='con401close'>关闭</span><iframe id='ifra401' src='http://kfzonghe.shinyway.org/login' frameborder='0'></iframe>"
      if (document.domain.lastIndexOf("shinyway.org") > -1) {
        document.domain = "shinyway.org";//为了能跨域执行父窗口的方法
      }
      if(!con401){
        document.body.appendChild(div)
      }else{
        con401.style.display="block"
      }
    }
    document.getElementById("con401close").onclick=function(){
      con401.style.display="none"
    }
    //判断登录超时显示登录框的代码结束----------------
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // return Promise.reject(error)
    return error
  }
)
export default service