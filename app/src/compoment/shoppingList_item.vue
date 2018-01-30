<template>
    <div class="shopListItem">
        <span class="input_Checkbox" :class="{'active':data.checkBoolen}" @click="toggle"></span>
        <div class="right_content">
            <dl >
                <dt>
                    <img :src="data.url" alt="">
                </dt>
                <dd >
                    <div class="itemText">{{data.name}}</div>
                    <div class="ietm_file_priceOrnum">
                        <p> x {{data.count}}</p>
                        <p>￥ {{data.price}}</p>
                    </div>
                    <div class="countNum">
                        <button @click="subtract">-</button>
                        <input type="button" v-model="data.count">
                        <button @click="add">+</button>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data:{
                type:Object,
                required:true
            }
        },
        data() {
            return {
                count:1
            }
        },
        methods:{
            post_shopping_List() {
                this.$http.post('/admin/shpoList',{
                    data:this.$store.state.shoppingList
                }).then(res=> {
                    console.log(res)
                })
            },
            add () {
                this.$store.commit('addCount',{
                    id:this.data.id
                })
                this.$store.commit('totalPrice')
                this.post_shopping_List();
                this.$store.commit('ischeckAll');
            },
            subtract() {
                this.$store.commit('subtract',{
                    id:this.data.id
                })
                this.$store.commit('totalPrice');
                this.$store.commit('ischeckAll');
                this.post_shopping_List();
            },
            toggle() {
                this.$store.commit('input_toggle',{
                    id:this.data.id
                })
                this.$store.commit('totalPrice');
                this.$store.commit('ischeckAll');
                this.post_shopping_List();
            }
        }
    }
</script>
<style scoped>
    .shopListItem{
        width:100%;
        height: 2.6rem;
        background: white;
        margin-bottom:.2rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
        border-bottom:1px solid #ccc;
        border-top:1px solid #ccc;
        padding-right: .2rem;
    }

    .input_Checkbox{
        width:.6rem;
        height: 0.6rem;
        display: flex;
        border:1px  solid #ccc;
        border-radius:50%;
        margin-left:.2rem;
        margin-right:.2rem;
        flex-shrink:0;
    }

    .right_content{
        flex:1;
        height: 2rem;
        margin-right:.2rem;
    }

    .right_content dl{
        width:100%;
        height:100%;
        flex-shrink:0;
        display:flex;
        overflow:hidden;
    }

    .right_content dt{
        height:2rem;
        flex-shrink:0;
        
    }

    .right_content img {
        height: 2rem;
        width:auto;
        flex-shrink:0;
        border:1px solid #ccc;
    }

    .right_content dd{
        width:4.2rem;
        height:2rem;
        overflow:hidden;
        padding-left:.2rem;
        position: relative;
    }

    .itemText{
        width:100%;
        height: .8rem;
        line-height:.8rem;
        font-size:.34rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        padding-left:.1rem;
        padding-right:.1rem;
    }

    .active{
        background: #FB4141;
        color:white;
        border: 1px solid #FB4141;
        text-align:center;
        line-height:.6rem;
        font-size:.32rem;
    }
    .active::after{
        width:100%;
        height:100%;
        content:'√'
    }

    .ietm_file_priceOrnum{
        height: 1rem;
        margin-top:.3rem;
    }

    .ietm_file_priceOrnum p:first-child{
        font-size:.28rem;
    }
    .ietm_file_priceOrnum p:last-child{
        font-size: .32rem;
        color:#FC6262;
    }

    .countNum{
        width:1.6rem;
        height: 0.6rem;
        border:1px solid #CCCCCC;
        border-radius:1px;
        position: absolute;
        bottom:.15rem;
        right:.2rem;
        display:flex;
    }

    .countNum button{
        flex:1;
        text-align:center;
        line-height:.58rem;
        border:none;
        background: none;
        font-size:.34rem;
    }
    .countNum input{
        flex:1;
        text-align:center;
        line-height:.6rem;
        background: white;
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
    }
</style>
