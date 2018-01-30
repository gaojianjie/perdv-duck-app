<template>
    <div class="ReceivingAddress">
        <header class="ReceivingAddress_header">
            <span @click="goBack" class="iconfont icon-zuojiantou-01 header-icon" style="font-size:.4rem;"></span>
            <div>收货地址</div>
            <span class="iconfont icon-shouye header-icon" style="font-size:.5rem;"></span>
        </header>
        <div class="ReceivingAddress_section">
            <div class="address_add">
                <div class="address_List">
                    <addRessItem v-for="(x, i) in $store.state.address_list" :num="i" :key="i" :datas="x"></addRessItem>
                </div>
                <button @click="add_Address">+ 新增地址</button>
            </div>
        </div>
    </div>
</template>

<script >
    import addRessItem from '../../compoment/address_Item.vue'
    export default {
        data() {
            return {
                addressList: []
            }
        },
        mounted() {
            // 请求用户的地址信息
            this.$http.get('/admin/user/address').then(res => {
                if(res.data.code == 1) {
                    this.$store.commit('getaddress', res.data.data)
                }
            })
        },
        methods: {
            add_Address() {
                this.$router.push({name:'addFileAddress', query:{send:'add_1'}})
            },
            // 左按钮回退
            goBack() {
                window.history.go(-1)
            }
        },
        components: {
            addRessItem
        }
    }
</script>
<style src="./ReceivingAddress.css"> 
</style>
