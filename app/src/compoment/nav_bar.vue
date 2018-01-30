<template>
    <dl class="nav_bar">
        <dt>
            <img :src="data.imgUrl"/>
        </dt>
        <dd>
            {{data.txt}}
        </dd>
    </dl>
</template>
<script>
    export default {
        props:{
            data:{
                type:Object,
                required:true
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>
<style scopeds>
    .nav_bar{
        width:25%;
        text-align:center;
        margin-top:.2rem;
    }

    .nav_bar img{
        width:50%;
        height:auto;
    }
    .nav_bar dd{
        margin-top:.1rem;
        font-size:.28rem;
        color:#999999
    }
</style>
