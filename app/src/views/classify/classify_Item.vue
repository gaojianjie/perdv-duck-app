<template>
    <dl>
        <dt>
            <img :src="'http://www.lb717.com' + data.cate_icon" alt="">
        </dt>
        <dd>{{data.cate_name}}</dd>
    </dl>
</template>
<script>
    export default {
        props:{
            data: {
                type:Object,
                required:true
            }
        }
    }
</script>
<style scoped>
    dl{
        width:31%!important;
        height:auto;
        margin-left:.05rem;
        margin-right:.05rem;
        background: #F7F7F7;
        flex-shrink:0;
        float:left;
        margin-top:.05rem;
        margin-bottom:.05rem;
    }

    dl img{
        width:100%;
        height:auto;
    }

    dl dd{
        width:100%;
        text-align:center;
        line-height:.6rem;
        line-height:.6rem;
    }
</style>