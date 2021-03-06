import axios from "axios";
import store from "./store/store";
import router from "./router";

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
if (
  localStorage.getItem("currentUser_token") == null ||
  localStorage.getItem("currentUser_token") == ""
) {
  axios.defaults.headers.common["Authorization"] = "";
} else {
  axios.defaults.headers.common["Authorization"] =
    "bearer " + localStorage.getItem("currentUser_token");
}
// axios.defaults.baseURL = "http://59.110.233.84:8077/also";
axios.defaults.baseURL = "http://1i497f8839.51mypc.cn:39319/also";

// http request 拦截器
/*axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });*/

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          console.log(router.currentRoute.name == "target")
          store.commit("users/clearUser");
          // router.replace({
          //   path: "/",
          //   query: { redirect: router.currentRoute.fullPath }
          // });
          if(router.currentRoute.name == "target"){
            //跳转回login路由，并把目标路由的url路径保存在login的query中
            router.replace({
              name:"/",
              query: {redirect: router.currentRoute.fullPath}
            })
          }else{
            /* 普通401拦截直接返回到登录页面 */
            router.push('/');
          }
          break;
        case 403:
          // 403 无权限，跳转到首页
          router.replace({
            path: "/",
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    /*return Promise.reject(error.response.data)*/
    return Promise.reject("");
  }
);

export default axios;
