<template>
    <div class="classify">
        <header class="classify_header">
            <form class="classify_header_form ">
                <div class="iconfont icon-fangdajing icon"></div>
                <input type="text"  @focus="goSearch"  placeholder="请输入您要查找的商品">
            </form>
        </header>
        <section class="classify_section">
            <div class="classify_section_left">
                <ul>
                    <li v-for="(x, i) in navList" :key="i" @click="addClass(i)" :class="{'navleftActive':flagTab == i}">
                        {{x}}
                    </li>
                </ul>
            </div>
            <div class="classify_section_right">
                <cassifyItem v-for="(x,i) in rightList" :key="i" :data="x"></cassifyItem>
            </div>
        </section>
    </div>    
</template>
<script>
    // 分类的页面
    import cassifyItem from './classify_Item.vue'
    export default {
        data() {
            return {
                navList:['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味饮料','酒水饮料'],
                flagTab:0,
                rightList:[]
            }
        },
        mounted() {
            this.$http.post('/admin/classify',{
                id: 1
            }).then(res => {
                this.rightList = res.data.data;
            })
        },
        methods: {
            getNavList() {
                // this.$http.
            },
            addClass(index) {
                this.flagTab = index;
                this.$http.post('/admin/classify',{
                    id:index+1
                }).then(res => {
                    this.rightList = res.data.data;
                })
            },
            goSearch() {
                this.$router.push('/home/search')
            }
        },
        components:{
            cassifyItem
        }
    }
</script>
<style scoped src="./classify.css">
</style>

