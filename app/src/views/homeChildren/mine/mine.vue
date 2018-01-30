<template>
    <div class="mine" >
        <!-- mine_header_active -->
        <div class="mine_header" :class="{'mine_header_active':header_active}">
            <span class="iconfont icon-shezhi"></span>
            <div>我的717的商城</div>
            <span>  </span>
        </div>
        <section class="mine-section" @scroll = "scroll_num" ref="section">
            <div class="section_user" ref="bannerHeight">
                <img src="../../../assets/image/mine/images/minde_01.jpg" alt="">
                <dl class="user_file">
                    <dt>
                        <img src="../../../assets/image/mine/未标题-7.png"/>
                    </dt>
                    <dd>你猜我是谁</dd>
                </dl>
            </div>
            <div class="my_shop">
                <div>
                    <span class="iconfont icon-dianpu"></span>
                    <span>我的店铺</span>
                </div>
                <span class="iconfont icon-youjiantou-01"></span>
            </div>
            <div class="shop_nav">
                <div class="shop_nav_left">
                    <dl>
                        <dt class="iconfont icon-gongzuojilu"></dt>
                        <dd>待付款</dd>
                    </dl>
                    <dl>
                        <dt class="iconfont icon-daifahuo"></dt>
                        <dd>代发货</dd>
                    </dl>
                    <dl>
                        <dt class="iconfont icon-daishouhuo"></dt>
                        <dd>待收货</dd>
                    </dl>
                    <dl>
                        <dt class="iconfont icon-shouhou"></dt>
                        <dd>售后</dd>
                    </dl>
                </div>
                <dl class="shop_nav_right">
                    <dt class="iconfont icon-dingdan"></dt>
                    <dd>我的订单<span class="iconfont icon-youjiantou-01"></span></dd>
                </dl>
            </div>
            <div class="Management_List">
                <div class="Management_List_Item">
                    <div class="item-left-div">
                        <span class="iconfont icon-zhanghuyue"></span>
                        <span>账户余额</span>
                    </div>
                    <span class="iconfont icon-youjiantou-01"></span>
                </div>
                <div class="Management_List_Item">
                    <div class="item-left-div">
                        <span class="iconfont icon-dizhi"></span>
                        <span>地址管理</span>
                    </div>
                    <router-link to="/ReceivingAddress">
                        <span class="iconfont icon-youjiantou-01"></span>
                    </router-link>
                </div>
                <div class="Management_List_Item">
                    <div class="item-left-div">
                        <span class="iconfont icon-kefu"></span>
                        <span>我的客服</span>
                    </div>
                    <span class="iconfont icon-youjiantou-01"></span>
                </div>
            </div>
            <div class="hot_recommend">
                <img src="http://www.lb717.com//static/mobile/images/myimg/my16.png"/>
                热门推荐
                <img src="http://www.lb717.com//static/mobile/images/myimg/my16.png"/>
            </div>  
            <div class="TuiJian_List">
                <shopItem v-for="(x, i) in dataList" :detailsData="x" :key="i"></shopItem>
            </div>
        </section>
    </div>
</template>
<script>
    import shopItem from '../homeBottomLister/xmallshop_list.vue'
    export default {
        data() {
            return {
                header_active:false,
                dataList:[]
            }
        },
        mounted() {
            this.$http.post('/mall/goods/recommendgoods', {
                key_code: 4777
            }).then(res => {
                this.dataList = JSON.parse(res.data).data;
            })
        },
        methods: {
            scroll_num () {
                let section = this.$refs.section;
                let ng = section.scrollTop;
                let bannerHeight = this.$refs.bannerHeight.clientHeight;
                if(ng > bannerHeight) {
                    this.header_active = true;
                } else {
                    this.header_active = false;
                }
            }
        },
        components:{
            shopItem
        }
    }
</script>
<style scoped src="./mine.css">
    
</style>
