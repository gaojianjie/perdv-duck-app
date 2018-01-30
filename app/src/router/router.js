import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
import homepage from '../views/homeChildren/homepage/homepage.vue'
import search from '../views/search/search.vue'
import login from '../views/login/login.vue'
import detailpage from '../views/detailpage/detailpage.vue'
import register from '../views/register/register.vue'
import mine from '../views/homeChildren/mine/mine.vue'
import shoppingCart from '../views/shoppingCart/shoppingCart.vue'
import classify from '../views/classify/classify.vue'
import ReceivingAddress from "../views/ReceivingAddress/ReceivingAddress.vue"
import addFileAddress from "../views/addFileAddress/addFileAddress.vue";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/home'
        },
        {
            path: '/home', 
            name: 'home',
            component: home,
            redirect: '/home/homepage',
            children:[
                {
                    path: '/home/homepage',
                    name: 'homepage',
                    component: homepage
                },{
                    path: '/home/search',
                    name: 'search',
                    component: search
                },{
                    path: '/home/mine',
                    name: 'mine',
                    component: mine
                },{
                    path: '/home/shoppingCart',
                    name: 'shoppingCart',
                    component: shoppingCart
                },{
                    path: '/home/classify',
                    name: 'classify',
                    component: classify
                }
            ]
        },{
            path: '/login', // 登录
            name: 'login',
            component: login
        },{
            path: '/detailpage', // 商品的详情页
            name: 'detailpage',
            component: detailpage
        },{
            path: '/register', // 注册的页面
            name: 'register',
            component: register
        },{
            path: '/ReceivingAddress', // 添加收货地址的路由
            name: 'ReceivingAddress',
            component: ReceivingAddress
        },{
            path: '/addFileAddress', // 添加详细地址的路由
            name: 'addFileAddress',
            component: addFileAddress
        }
    ]
})