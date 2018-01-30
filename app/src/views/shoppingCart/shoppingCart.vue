<template>
    <div class="shoppingCart">
        <div class="shoppingCart_header">
            购物车
        </div>
        <div class="sehopingCart_section">
            <div class="sehopingCart_section_vacancy" v-if="$store.state.shoppingList == 0">
                <div class="sehopingCart_section_vancancy_show">
                    <dl>
                        <dt class="iconfont icon-gouwuche">
                        </dt>
                        <dd class="vacancy_first_dd">购物车为空</dd>
                        <dd class="vacancy_second_dd" @click="goHomepage">去逛逛</dd>
                    </dl>
                </div>
            </div>
            <shopItem 
                v-for="(x, i) in $store.state.shoppingList" 
                :key="i"
                :data="x"></shopItem>
            <div class="hot_recommend">
                <img src="http://www.lb717.com//static/mobile/images/myimg/my16.png"/>
                热门推荐
                <img src="http://www.lb717.com//static/mobile/images/myimg/my16.png"/>
            </div>  
            <div class="recommend_list">
                <smallShopList 
                    v-for="(item,index) in recommend_List" 
                    :key="index"
                    :detailsData="item">
                </smallShopList>
            </div>
            <div class="totalPrices">
                <div class="totalPrice_left">
                    <p>
                        <span class="input_Checkbox" :class="{'active': $store.state.checkAll}"  @click="checkall"></span>全选
                    </p>
                    <p><span>合计：</span><span class="color_price">￥</span><span class="color_price">{{$store.state.totalPrice}}</span></p>
                </div>
                <div class="totalPrice_right">结算</div>
            </div>
        </div>
    </div>
</template>
<script>
    import shopItem from '../../compoment/shoppingList_item.vue'
    import smallShopList from '../homeChildren/homeBottomLister/xmallshop_list.vue'
    export default {
        data () {
            return {
                recommend_List: []
            }
        },
        mounted() {
            // 请求数据
            this.getData();
            // 从后台上拿到购物车的数据，并且存储到数据容器里
            this.$http.get('/admin/GetShoppingList').then(res => {
                this.$store.commit('set_shoppingList',{
                    data:JSON.parse(res.data.data)
                })
                // 当数据存储完之后，执行以下判断是否该全选
                this.$store.commit('ischeckAll')
            })
        },
        uploaded() {
            this.getData();
        },
        methods:{
            // 向后台发送存储之后的购物车信息
            post_shopping_List() {
                this.$http.post('/admin/shpoList',{
                    data:this.$store.state.shoppingList
                }).then(res=> {
                    console.log(res)
                })
            },
            getData () {
                this.$http.post('/mall/goods/recommendgoods', {
                    key_code: 4777
                }).then(res => {
                    this.recommend_List = JSON.parse(res.data).data;
                })
            },
            // 全选，计算总价，以及向后台发送数据
            checkall () {
                this.$store.commit('checkall');
                this.$store.commit('totalPrice');
                this.post_shopping_List();
            },
            // 购物车为空的时候，去首页的按钮
            goHomepage() {
                this.$router.push('/home/homepage')
            }
        },
        components:{
            smallShopList,
            shopItem
        }
    }
</script>
<style scoped src="./shoppingCart.css">
    
</style>
