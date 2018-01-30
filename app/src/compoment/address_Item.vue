<template>
    <div class="address_Item">
        <div class="classItem_content">
            <div class="userfile">
                <span class="user_name">{{datas.username}}</span>
                <span class="user_phone">{{datas.phone}}</span>
            </div>
            <div class="user_address">
                {{datas.address}}
            </div>
            <div class="user_select">
                <div class="user_select_left">
                    <span @click="setdefault" class="input_Checkbox" :class="{'active':datas.select}" ></span>
                    <span>默认地址</span>
                </div>
                <div class="user_select_right">
                    <p>
                        <span class="iconfont icon-bianji1 icon"></span>
                        <span @click="compile">编辑</span>
                    </p>
                    <p>
                        <span class="iconfont icon-shanchu-01 icon"></span>
                        <span>删除</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            datas:{
                type: Object,
                required: true
            },
            num:{
                type: Number,
                required: true
            }
        },
        data () {
            return {
                boolen:false
            }
        },
        methods:{
            compile() {
                this.$router.push({name:'addFileAddress', query:{send:'add_2', index:this.num}})
            },
            setdefault() {
                this.$http.post('/admin/user/setdefaultAddress',{
                    index: this.num
                }).then(res => {
                    this.getList()
                })
            },
            getList() {
                this.$http.get('/admin/user/address').then(res => {
                    if(res.data.code == 1) {
                        this.$store.commit('getaddress', res.data.data)
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .address_Item{
        width:100%;
        height: auto;
        margin-bottom:.3rem;
        padding:.1rem .24rem;
        background: white;
        text-align:left;
    }

    .userfile{
        width: 100%;
        height: .8rem;
        text-align: left;
        font-size: .34rem;
        line-height: .7rem;
        color:#5E5E5E;
    }

    .user_name{
        margin-right:.2rem;
    }

    .user_address{
        width:100%;
        height: .8rem;
        overflow: hidden;
        display: -webkit-box;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        color:#9F9F9F;
        font-size:.28rem;
    }

    .user_select{
        width:100%;
        height: 1rem;
        border-top:1px solid #ccc;
        margin-top:.35rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .input_Checkbox{
        width:.4rem;
        height: 0.4rem;
        display: flex;
        border:1px  solid #ccc;
        border-radius:50%;
        margin-left:.2rem;
        margin-right:.2rem;
        flex-shrink:0;
    }
    .active{
        background: #FB4141;
        color:white;
        border: 1px solid #FB4141;
        text-align:center;
        line-height:.4rem;
        font-size:.28rem;
    }
    .active::after{
        width:100%;
        height:100%;
        content:'√'
    }

    .user_select_left{
        display: flex;
        align-items:center;
        color:#7C7C7C
    }
    .user_select_right{
        display: flex;
        justify-content: space-between;
        align-items:center;
        color:#7C7C7C
    }

    .user_select_right p{
        margin-right:.3rem;
    }

    .icon{
        font-size:.4rem;
    }

</style>
