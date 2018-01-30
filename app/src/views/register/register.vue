<template>
    <div class="register_box">
        <header class="register_header">
            <span class="iconfont icon-zuojiantou-01" @click="goBack"></span>
            <div>注册会员</div>
            <span @click="goLogin">登录</span>
        </header>
        <div class="register_section">
            <div class="input_div">
                <img class="iconImg" src="../../assets/image/homepage/123.png" alt="">
                <input type="text" placeholder="请输入用户名" v-model="username">
            </div class="input_div">
            <div class="register_Yanzheng">
                <img class="iconImg" src="http://www.lb717.com/static/mobile/images/denglu_img/code.png" alt="">
                <input type="text" placeholder="请输入验证码">
                <div class="authCode">获取验证码</div>
            </div>
            <div class="input_div">
                <img class="iconImg" src="http://www.lb717.com/static/mobile/images/denglu_img/password.png" alt="">
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
        </div>
        <div class="register_btn_box">
            <button class="register_btn" @click="register">确定</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            goBack () {
                window.history.go(-1)
            },
            goLogin () {
                this.$router.push('/login')
            },
            register() {
                if(!this.username || !this.password) {
                    return;
                };
                this.$http.post('/admin/register',{
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if(res.data.code == 1) {
                        console.log(res.data.msg)
                    } else if(res.data.code == 0) {
                        console.log('注册成功')
                        this.$router.push('/login')
                    }
                })
            }
        }
    }
</script>
<style>
    .register_box{
        width:100%;
        height:100%;
        background: #F4F4F4;
    }
    .register_header{
        width:100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .5rem;
        background: #FAFAFB;
    }

    .register_header div{
        font-size:.34rem;
        color: #666666;
    }

    .register_header span:last-child{
        color:#FB6F70;
    }

    .register_section{
        width:100%;
        height: auto;
        background: white;
        margin-top:.2rem;
    }
    .input_div{
        width:100%;
        padding:0 .2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    .iconImg{
        width:.4rem;
        height:auto;
        flex-shrink:0;
        margin-left:.2rem;
    }

    .input_div input{
        margin-left:.4rem;
        flex:1;
        border-bottom:1px solid #CCCCCC;
        height:1.3rem;
        font-size:.32rem;
        color:#666666;
    }
    .input_div input::-webkit-input-placeholder{
        font-size:.32rem;
        color:#666666;
    }

    .register_btn_box{
        width:100%;
        text-align:center;
        margin-top:.5rem;
    }
    .register_btn_box button{
        width:74%;
        height: 1.2rem;
        border-radius:.6rem;
        background: #FC4141;
        color:white;
        border:none;
        font-size:.34rem;
    }

    .register_Yanzheng{
        width:100%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding:0 .2rem;
    }

    .register_Yanzheng input{
        flex:1;
        height: 1.3rem;
        border-bottom: 1px solid #CCCCCC;
        margin-left:.4rem;
    }

    .register_Yanzheng input::-webkit-input-placeholder{
        font-size:.32rem;
        color:#666666;
    }

    .authCode{
        height: .8rem;
        padding:0 .3rem;
        border-radius:5.5rem;
        border:1px solid #FEC9C9;
        color: #FC4141;
        line-height:.8rem;
        margin-right:.3rem;
        margin-left:.3rem;
        flex-shrink:0;
    }
</style>