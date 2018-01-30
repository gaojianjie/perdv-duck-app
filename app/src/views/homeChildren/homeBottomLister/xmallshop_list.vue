<template>
    <dl class="smallshop_list_item">
        <dt>
            <img :src="'http://www.lb717.com/' + detailsData.obj_data" alt="">
        </dt>
        <dd>
            <div class="smallshop_dd_top">
                {{detailsData.goods_name}}
            </div>
            <div class="smallshop_dd_bottom">
                <span>￥{{detailsData.discount_price}}</span>
                <img @click="addShopList" class="bottom_img" src="http://www.lb717.com//static/mobile/images/homeImg/homeland3.png" alt="">
            </div>
        </dd>
    </dl>
</template>
<script>
    import {getCookie} from '../../../utils/utils.js'
    export default {
        props:{
            detailsData: {
                type: Object,
                required: true
            }
        },
        methods:{
            addShopList () {
                if(!getCookie('token')) {
                    this.$router.push({name:'login', params:{oldHistory:'/home/homepage'}})
                    return;
                }
                this.$message('添加成功')
                this.$store.commit('addshoppingList',{
                    id: this.detailsData.goods_id,
                    price: this.detailsData.discount_price,
                    name: this.detailsData.goods_name,
                    count:1,
                    url:'http://www.lb717.com/' + this.detailsData.obj_data,
                    checkBoolen: false
                })
                // 存储到后台的数据库里
                this.$http.post('/admin/shpoList',{
                    data:this.$store.state.shoppingList
                }).then(res=> {
                    console.log(res)
                })
            }
        }
    }
</script>
<style>
    .smallshop_list_item{
        margin-top:.1rem;
        width:49.5%;
        height:auto;
        background: white;
    }
    .smallshop_list_item dt img{
        width:100%;
        height:auto;
    }
    .smallshop_dd_top{
        font-size:.26rem;
        height:.8rem;
        width:100%;
        padding:.1rem;
        overflow: hidden;
        display: -webkit-box;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        color:#666666;
    }

    .smallshop_dd_bottom{
        padding:.2rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .smallshop_dd_bottom span{
        color:#fc4141;
        font-weight:bold;
    }

    .bottom_img{
        width:.5rem;
        height:.5rem;
        margin-right:.2rem;
    }
</style>