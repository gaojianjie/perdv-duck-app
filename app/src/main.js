import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/css/common.css'
// 设置字体大小
import './assets/js/font.js'
import './assets/css/font.css'
// icon
import './assets/fonts1/iconfont.css'
import './assets/appicon/iconfont.css'
// swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
// 请求方式
import './axios/my_axios.js'
// Mintui
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
// vuex
import {store} from './store/store.js'
import message from './plugins/message'
import {getCookie} from './utils/utils.js'

Vue.use(VueAwesomeSwiper);
Vue.use(Mint);
Vue.use(message);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

// 判断用户有没有登录
router.beforeEach(function(to, from ,next) {
  if(to.name !== 'login') {
    if(getCookie('token')) {
      next()
    } else {
      next('/login')
    }
  } else if(to.name == 'mine') {
    if(getCookie('token')) {
      next();
    } else {
      next("/login");
    }
  }
  next()
})