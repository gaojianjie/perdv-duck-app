<template>
    <div class="homepage">
        <!-- 首页的排版 -->
        <header class="homepage_header">
            <div class="homepage_header_left">
                <img src="../../../assets/image/homepage1/717logo.jpg" alt="">
            </div>
            <form class="homepage_header_center" name="homepage_header_from">
                <div class="iconfont icon-fangdajing left_icon"></div>
                <input type="text" class="content_input" @focus="search" placeholder="请输入您要购买的商品"/>
            </form>
            <div class="homepage_header_right">
                <dl>
                    <dt>
                        <img src="../../../assets/image/homepage/hours.png" alt="">
                    </dt>
                    <dd>我的店铺</dd>
                </dl>
            </div>
        </header>
        <section class="homepage_section" @scroll="scrollUpload" ref="upload_section">
            <div class="section_content" ref="upload_content">
                <LunBo :data="lunboData"></LunBo>
                <div class="homepage-title">
                    <navBar :data="item" v-for="(item,index) in  titleDate" :key="index"></navBar>      
                </div>
                <Verticar :title="'商城动态'" :data="VerticarLunBo"></Verticar>
                <div class="everyDay">
                    <div class="everyDay_left">
                        <img src="../../../assets/image/homepage/list_icon1.jpg" alt="">
                        <h2>天天特惠</h2>
                        <span>每天都有惊喜</span>
                    </div>
                    <div>
                        更多
                        <span class="iconfont icon-youjiantou-01"></span>
                    </div>
                </div>
                <div class="everyDay_content">
                    <div class="everyDay_content_left">
                        <img src="http://www.lb717.com//static/mobile/images/homeImg/home1.png" alt="">
                    </div>
                    <div class="everyDay_content_right">
                        <img src="http://www.lb717.com//static/mobile/images/homeImg/ruwei.png" alt="">
                        <img src="http://www.lb717.com//static/mobile/images/homeImg/gaodian.png" alt="">
                    </div>
                </div>
                
                <div class="homepage_Lists">
                    <homeBttomList :data="x.dataArr" :titleStr="titleArr[i]" v-for="(x,i) in contentList" :key="i"></homeBttomList>
                </div> 
                <div class="diXian">
                    我是有底线的
                </div>
            </div>
        </section>
    </div>
</template>
<script>

    import LunBo from '../../../compoment/LunBo.vue'
    import navBar from '../../../compoment/nav_bar.vue'
    import Verticar from '../../../compoment/VerticarLunBo.vue'
    import homeBttomList from '../homeBottomLister/shop_list.vue'

    export default {
        data() {
            return {
                lunboData: [
                    {
                        imageUrl:'assets/image/LunBo_Banner/p1.png'
                    },{
                        imageUrl:'assets/image/LunBo_Banner/p2.png'
                    },{
                        imageUrl:'assets/image/LunBo_Banner/p3.png'
                    },{
                        imageUrl:'assets/image/LunBo_Banner/p5.png'
                    }
                ],
                titleDate:[
                    {
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav4.png',
                        txt:'家乡味道'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav1.png',
                        txt:'进口食品'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav2.png',
                        txt:'牛奶乳品'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav4.png',
                        txt:'茶果冲饮'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav5.png',
                        txt:'休闲零食'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav6.png',
                        txt:'米面粮油'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav7.png',
                        txt:'调味饮料'
                    },{
                        imgUrl:'http://www.lb717.com//static/mobile/images/homeImg/nav2.png',
                        txt:'酒水饮料'
                    },
                ],
                VerticarLunBo:[
                    {text:'这个是轮播的第一条数据，如有不对，仅供参考这个是轮播的第一条数据，如有不对，仅供参考仅供参考仅供参考'},
                    {text:'这个是轮播的第二条数据，如有不对，仅供参考这个是轮播的第二条数据，如有不对，仅供参考仅供参考仅供参考'},
                    {text:'这个是轮播的第三条数据，如有不对，仅供参考这个是轮播的第三条数据，如有不对，仅供参考仅供参考仅供参考'},
                    {text:'这个是轮播的第四条数据，如有不对，仅供参考这个是轮播的第四条数据，如有不对，仅供参考仅供参考仅供参考'}
                ],
                contentList:[],
                titleArr:['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','酒水饮料'],
                resId:2,
                updataOFF:true,
                axiosOFF:true
            }
        },
        components: {
            LunBo,
            navBar,
            Verticar,
            homeBttomList,
           
        },
        mounted() {
            this.getData()
        },
        methods:{
            search() {
                this.$router.push('/home/search')
            },
            getData() {
                if(this.axiosOFF) {
                    this.$http.post('/mall/index/getGoodsChannel',{
                        channel_id:this.resId
                    }).then(res => {
                        let data = JSON.parse(res.data).data.data;
                        console.log(data)
                        if(data.length == 0) {
                            this.axiosOFF = false;
                        } else {
                            this.contentList.push({dataArr:data})
                        }
                    }) 
                }
            },
            scrollUpload () {
                let section = this.$refs.upload_section;
                let _content = this.$refs.upload_content;
                let sectionHeight = section.offsetHeight;
                let _contentHeight = _content.offsetHeight;
                let scrollTops = section.scrollTop; 
                let num = _contentHeight - sectionHeight - scrollTops;
                if(num < 50) {
                    this.resId += 1;
                    this.getData();
                }
            }
        }
    }
</script>
<style scoped src="./homepage.css">
</style>

