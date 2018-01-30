<template>
    <div class="VerticarLunBo">
        <div class="VerticarLunBo_title">
            <div>{{title}}</div>
        </div>
        <div class="VerticarLunBo_content">
            <div class="swiper-container containerVerticacr">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(x, i) in data" :key="i">
                        {{x.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        props:{
            data:{
                type: Array,
                required: true
            },
            title:{
                type: String,
                required: true
            }
        },
        data() {
            return {

            }
        },
        mounted() {
            this.Newswiper()
        },
        methods: {
            Newswiper() {
                new Swiper('.containerVerticacr',{
                    direction: 'vertical',
                    loop:true,
                    autoplay:{
                        delay:500
                    }
                }) 
            }
        },
        updated() {
            this.Newswiper()
        }
    }
</script>
<style scoped>
    .VerticarLunBo{
        padding:.1rem 0;
        width:100;
        padding:0.2rem;
        height: 1.2rem;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .VerticarLunBo_title{
        height:1rem;
        flex-shrink:0;
        color:#FF6D00;
    }
    .VerticarLunBo_title div{
        width:.64rem;
        height:.64rem;
        float:right;
        margin-right:.1rem;
    }

    .VerticarLunBo_content{
        width:6.26rem;
        height: 0.8rem;
        border:1px solid #E5E5E5;
        border-radius:10px;
        overflow:hidden;
        font-size:.26rem;
    }

    .swiper-slide{
        height:.7rem;
        padding-left:.2rem;
        padding-right:.1rem;
        overflow: hidden;
        display: -webkit-box;
        word-break: break-all;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        color:#666666;
    }
</style>
