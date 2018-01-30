<template>
    <div class="home_search">
        <header class="search_header">
            <form>
                <span class="iconfont icon-fangdajing"></span>
                <input type="text" placeholder="请输入您要购买的商品" v-model="search_input">
            </form>
            <div @click="addRecord">搜索</div>
        </header>
        <section class="search_section">
            <div class="search_title_h2">
                <span>最近搜索</span>
                <img @click="cleanHistory" src="http://www.lb717.com//static/mobile/images/my/remo.png" alt="">
            </div>
            <p class="tiShi" v-if="p_Off">
                暂无搜索记录....
            </p>
            <ul class="searchHistory">
                <li v-for="(x,i) in history_search" :key="i">{{x}}</li>
            </ul>
            <div class="search_title_h2">
                <span>大家都在搜</span>
            </div>
            <ul class="searchHistory">
                <li v-for="(x,i) in search_seem" :key="i">{{x}}</li>
            </ul>
        </section>
    </div>
</template>
<script>
    import {setLocalstorageArr,getItem,cleanItem} from '../../utils/utils.js'
    export default {
        data() {
            return {
                search_input:'',
                history_search:'',
                p_Off:true,
                search_seem:['粽子','锅巴','酱','零食','干果','特产','油','大米','面粉']
            }
        },
        mounted() {
            this.gethistory()
        },
        methods:{
            addRecord () {
                setLocalstorageArr('717_search_record',this.search_input);
                this.gethistory()
            },
            gethistory () {
                this.history_search = getItem('717_search_record');
                if(this.history_search.length == 0) {
                    this.p_Off = true;
                } else {
                    this.p_Off = false;
                }
            },
            cleanHistory () {
                cleanItem('717_search_record');
                this.gethistory()
            }
        }
    }
</script>
<style>
    .home_search{
        width: 100%;
        height:100%;
        background: white;
        display: flex;
        flex-direction: column;
    }

    .search_header{
        width:100%;
        height: 0.9rem;
        border-bottom:1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:.3rem;
        padding-right:.2rem;
        flex-shrink:0;
    }
    .search_header form{
        width:85%;
        height: 0.64rem;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search_header span{
        margin-left:.5rem;
        margin-right:.2rem;
    }
    .search_header input{
        flex:1;
        height:100%;
        background: none;
    }
    .search_header input::-webkit-input-placeholder{
        font-size:.32rem;
    }
    .search_header div{
        width:15%;
        height: 0.5rem;
        text-align:right;
        line-height:.5rem;
    }
    .search_section{
        flex:1;
        padding:0 .3rem;
    }

    .search_title_h2{
        width:100%;
        display: flex;
        justify-content: space-between;
        margin-top:.3rem;
    }
    .search_title_h2 span{
        font-size:.34rem;
    }
    .search_title_h2 img{
        width:.4rem;
        height:.4rem;
    }

    .tiShi{
        width:100%;
        padding-left:.6rem;
        font-size:.28rem;
        margin-top:.3rem;
        margin-bottom:.3rem;
    }

    .searchHistory{
        width:100%;
        height: auto;
        min-height:1rem;
        padding:.2rem;
    }
    .searchHistory li{
        float: left;
        margin-right:.5rem;
        padding:5px 6px;
        border:1px solid #ccc;
        border-radius:5px;
        color:#666666;
        margin-bottom:.3rem;
    }
</style>
