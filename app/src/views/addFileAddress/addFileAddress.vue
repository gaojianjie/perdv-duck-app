<template>
    <div class="addFileAddress">
        <header class="addFileAddress_header">
            <span @click="goBack" class="iconfont icon-zuojiantou-01"></span>
            <div>收货人</div>
            <span>  </span>
        </header>
        <section class="addFileAddress_section">
            <input type="text" class="section_input" placeholder="收货人姓名" v-model="username">
            <input type="text" class="section_input" placeholder="手机号" v-model="phone">
            <div class="select_box">
                <div class="select">
                    <div class="select_input">
                        <input type="text" disabled="disabled" v-model="province">
                        <span class="iconfont icon-xiangxia" @click="toggleSelect(1)"></span>
                    </div>
                    <ul class="select_ul" v-if="flag == 1">
                        <li v-for="(x, i) in province_list" :key="i" @click="selectProvince(x.name,1)">{{x.name}}</li>
                    </ul>
                </div>
                <div class="select">
                    <div class="select_input">
                        <input type="text" disabled="disabled" v-model="city">
                        <span class="iconfont icon-xiangxia" @click="toggleSelect(2)"></span>
                    </div>
                    <ul class="select_ul" v-if="flag == 2">
                        <li v-for="(x, i) in city_list" @click="selectCity(x.name, 2)" :key="i">{{x.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="region_select">
                <div class="select_input_region">
                    <input type="text" disabled="disabled" v-model="region">
                    <span class="iconfont icon-xiangxia" @click="toggleSelect(3)"></span>
                </div>
                <ul class="select_ul" v-if="flag == 3">
                    <li v-for="(x, i) in region_list" @click="selectRegion(x,3)":key="i">{{x}}</li>
                </ul>
            </div>
            <input type="text" class="section_input" placeholder="详细地址" v-model="particularAddress">
            <div class="setdefaultAddress">
                 <span class="input_Checkbox" :class="{'active': selectcheck}" @click="inputOff"></span> <span>设置为默认地址</span>
            </div>
            <div class="last_btn">
                <button @click="submit">保存</button>
            </div>
        </section>
    </div>
</template>
<script>
    import json from '../../../static/data/city_list.json'
    export default {
        data() {
            return {
                province: '北京', // 省
                city: '北京', // 市
                region: '海淀区', // 区
                flag:4,
                selectcheck:false,
                province_list:[],
                city_list: [],
                region_list: [],
                username:'',
                phone:'',
                particularAddress:'',
                send:'',
                dataIndex:''
            }
        },
        mounted() {
            this.province_list = json;
            this.send = this.$route.query.send;
            if(this.$route.query.index) {
                this.dataIndex = this.$route.query.index;
            }
        },
        methods:{
            goBack () {
                window.history.go(-1)
            },
            toggleSelect(num) {
                console.log(num)
                this.flag = this.flag == num ? 4 : num;
            },
            inputOff() {
                this.selectcheck = !this.selectcheck;
            },
            // 根据省的点击来确定市以及镇的数据
            selectProvince(name, num) {
                this.flag = this.flag == num ? 4 : num;
                json.forEach((item, index) => {
                    if(item.name == name) {
                        this.province = name;
                        this.city_list = item.city;
                        this.city = item.city[0].name;
                        this.region_list = item.city[0].area;
                        this.region = item.city[0].area[0]
                    }
                });
            },
            // 根据城市的点击来确定镇的数据
            selectCity(name, num) {
                this.flag = this.flag == num ? 4 : num;
                this.city_list.forEach((item, index) => {
                    if(item.name == name) {
                        this.city = name;
                        this.region_list = item.area;
                        this.region = item.area[0]
                    }
                })
            },
            selectRegion(name, num) {
                this.flag = this.flag == num ? 4 : num;
                this.region = name;
            },
            submit() {
                if(!this.username || !this.phone || !this.province || !this.city || !this.region) {
                    this.$message('您的信息还没有完善');
                    return;
                }
                if(!/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.phone)) {
                    this.$message('您的手机号格式不对');
                    return;
                }

                // 这个是用来判断是否是添加用户的地址的
                if(this.send == 'add_1') {
                    this.sendAddress();
                } else if(this.send == 'add_2') {
                    console.log(this.send)
                    this.setAddress();
                }
                
            },
            sendAddress() {
                this.$http.post('/admin/user/addReceivingAddress',{
                    username: this.username,
                    phone: this.phone,
                    address: this.province + this.city + this.region + this.particularAddress,
                    select: this.selectcheck
                }).then(res => {
                    if(res.data.code == 1) {
                        this.$message('添加成功');
                        this.$router.push('ReceivingAddress')
                    }
                })
            },
            setAddress() {
                this.$http.post('/admin/user/setReceivingAddress',{
                    data: {
                        username: this.username,
                        phone: this.phone,
                        address: this.province + this.city + this.region + this.particularAddress,
                        select: this.selectcheck
                    },
                    index: this.dataIndex
                    
                }).then(res => {
                    if(res.data.code == 1) {
                        this.$message('修改成功');
                        this.$router.push('ReceivingAddress')
                    }
                })
            }
        }
    }
</script>
<style src="./addFileAddress.css">
   
</style>
