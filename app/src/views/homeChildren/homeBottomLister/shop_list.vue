<template>
    <div class="homeBottomLister">
        <div class="upload_bottom">
            <div class="more_upload"></div>
            <div class="more_upload_center">
                <i></i>
                <div>
                    <img src="http://www.lb717.com//static/mobile/images/homeImg/homelandlogo.png">
                    {{titleStr}}
                </div>
                <i></i>
            </div>
            <div class="more_upload">更多 <span class="iconfont icon-youjiantou-01"></span></div>
        </div>
        <div class="bottomListContent">
            <smallList v-for="(x, i) in data" :detailsData="x" :key="i"></smallList>
        </div>
    </div>
</template>
<script>
    import smallList from './xmallshop_list.vue'
    export default {
        props:{
            titleStr:{
                type:String,
                required:true
            },
            data:{
                type:Array,
                required:true
            }
        },
        components:{
            smallList
        }
    }
</script>
<style scoped>
    .upload_bottom{
        width:100%;
        height:.9rem;
        background:white;
        margin-top:.2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .2rem;
    }

    .more_upload{
        width:1.3rem;
        font-size:.32rem;
    }

    .more_upload_center{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .more_upload_center div{
        height:.6rem;
        line-height:.6rem;
        display:flex;
        align-items:center;
        color: #FF6D00;
        font-size:.34rem;
    }

    .more_upload_center i{
        display:inline-block;
        width:.6rem;
        height:1px;
        background:#FF6D00;
        margin-right:.2rem;
        margin-left:.2rem;
    }

    .more_upload_center img{
        width:.4rem;
        height:.4rem;
        margin-right:.2rem;
    }

    .homepage_Lists{
        width:100%;
        background:white;
        height:auto;
    }

    .bottomListContent{
        width:100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
</style>
