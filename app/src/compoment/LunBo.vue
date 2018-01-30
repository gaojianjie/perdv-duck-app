<template>
    <div class="swiper-container container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(x,index) in data" :key="index">
                <img :src="'../../src/' + x.imageUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination">
            <span class="my-bullet"></span>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        props:['data'],
        data () {
            return {

            }
        },
        computed:{
        },
        mounted() {
            new Swiper('.container', {
                loop:true,
                autoplay:{
                    delay:1200
                },
                pagination:{
                    el: '.swiper-pagination'
                },
            })
        }
    };
</script>
<style >
    .swiper-pagination{
        position: absolute;
        bottom:.2rem;
        margin-bottom:.2rem;
    }
    .swiper-pagination-bullet{
        width:.24rem!important;
        height:.24rem!important;
    }
    .container img{
        width:100%;
        height:auto;
    }
</style>


