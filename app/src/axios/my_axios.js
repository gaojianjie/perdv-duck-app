import Vue from 'vue';
import axios from 'axios';
import {getCookie} from '../utils/utils.js'

if (process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = "http://localhost:3000";
}
if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = "http://www.lb717.com";
}

// 拦截器，主要是加上token
// axios.interceptors.request.use(
//     config => {
//         if (getCookie('token')) { 
//             config.headers.Authorization = `token ${getCookie('token')}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
// });

let httpPlugin = {
    install: function (Vue) {
        Vue.prototype.$http = axios;
    }
}
Vue.use(httpPlugin);
