<template>
    <div class="login_box">
        <header class="login_header">
            <span class="iconfont icon-zuojiantou-01" @click="goBack"></span>
            <div>会员登录</div>
            <span @click="goRegister">注册</span>
        </header>
        <div class="login_section">
            <div class="input_div">
                <img class="iconImg" src="../../assets/image/homepage/123.png" alt="">
                <input type="text" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="input_div">
                <img class="iconImg" src="//www.lb717.com/static/mobile/images/denglu_img/password.png" alt="">
                <input type="text" placeholder="请输入密码" v-model="password">
            </div>
        </div>
        <div class="login_btn_box">
            <button class="login_btn" @click="login">立即登录</button>
        </div>
    </div>
</template>
<script>
    import {getCookie,setCookie} from '../../utils/utils.js'
    export default {
        data() {
            return {
                username: '',
                password: '',
                oldHistory:'/home/homepage'
            }
        },
        mounted () {
            if(this.$route.params.oldHistory) {
                this.oldHistory = this.$route.params.oldHistory;
            }
        },
        methods: {
            goBack () {
                window.history.go(-1)
            },
            goRegister () {
                this.$router.push('/register')
            },
            login() {
                // 判断格式是否匹配
                if(!this.username || !this.password) return;
                this.$http.post('/admin/login', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if(res.data.code == 0) {
                        console.log('登陆成功');
                        this.$router.push(this.oldHistory); // 跳转到之前的页面
                        setCookie('token', res.data.token)
                    } else if(res.data.code == 1) {
                        console.log(res.data.msg)
                    } else if(res.data.code == 3) {
                        console.log(res.data.msg)
                    }
                })
            }
        }
    }
</script>
<style>
    .login_box{
        width:100%;
        height:100%;
        background: #F4F4F4;
    }
    .login_header{
        width:100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .5rem;
        background: #FAFAFB;
    }

    .login_header div{
        font-size:.34rem;
        color: #666666;
    }

    .login_header span:last-child{
        color:#FB6F70;
    }

    .login_section{
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

    .login_btn_box{
        width:100%;
        text-align:center;
        margin-top:.5rem;
    }
    .login_btn_box button{
        width:74%;
        height: 1.2rem;
        border-radius:.6rem;
        background: #FC4141;
        color:white;
        border:none;
        font-size:.34rem;
    }

    
</style>