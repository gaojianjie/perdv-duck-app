<template>
    <div class="homepage">
        <div class="homepage-Routerview">
            <keep-alive include="home">
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="homepage-footer">
            <dl>
                <router-link class="router_link" to="/home/homepage">
                    <dt></dt>
                    <dd>首页</dd>
                </router-link>
            </dl>
            <dl>
                <router-link class="router_link" to="/home/classify">
                    <dt></dt>
                    <dd>分类</dd>
                </router-link>
            </dl>
            <div class="Social">
                <img src="http://www.lb717.com//static/mobile/images/footer/inter.png" alt="">
            </div>
            <dl>
                <router-link class="router_link" to="/home/shoppingCart">
                    <dt></dt>
                    <dd>购物车</dd>
                </router-link>
            </dl>
            <dl>
                <router-link class="router_link" to="/home/mine">
                    <dt></dt>
                    <dd>我的</dd>
                </router-link>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped src="./home.css">
   
</style>

