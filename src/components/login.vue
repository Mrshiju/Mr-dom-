<template>
    <div class="login-wrap">
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
        >
        </vue-particles>
        <div class="panish">
            <img :src="src">
        </div>
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content" >
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username" @focus="userfocus" @blur="blur">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="ruleForm.password"
                        @keyup.enter.native="submitForm('ruleForm')"
                        @focus="passwordfocus"
                        @blur="blur"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="baseUrl">
                    <el-button icon="el-icon-setting"></el-button>
                    <el-select v-model="ruleForm.baseUrl" @change="getBaseUrl(ruleForm.baseUrl)">
                        <el-option
                            v-for="(item,i) of baseUrlList"
                            :label="item.label"
                            :value="item.value"
                            :key="i"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <div class="login-btn">
                    <el-button
                        type="primary"
                        @click="submitForm('ruleForm')"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                        :disabled="loading"
                        :loading="loading"
                    >{{loading !== true ? '登录' : '登录中...'}}</el-button>
                </div>
                <p class="login-tips" :class="{active:isActive}">提示：{{errorMsg}}</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                loading: false,
                isActive: false,
                errorMsg: "lalala",
                ruleForm: {
                    username: "",
                    password: "",
                    baseUrl: localStorage.base ? localStorage.base : ""
                },
                baseUrlList: [
                    {
                        label: "营销账号",
                        value: "yxBaseUrl"
                    },
                    {
                        label: "行业账号",
                        value: "hyBaseUrl"
                    }
                ],
                rules: {
                    username: [
                        { required: true, message: "请输入用户名", trigger: "blur" }
                    ],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                    baseUrl: [
                        { required: true, message: "请选择账号类型", trigger: "change" }
                    ]
                },
                src:require('../assets/login.png'),
            };
        },
        methods: {
            userfocus(){
              this.src = require('../assets/userName.png')
            },
            passwordfocus(){
              this.src = require('../assets/password.png')
            },
            blur(){
              this.src = require('../assets/login.png')
            },
        }
    };
</script>

<style scoped>
    .login-wrap {
        width: 100%;
        height: 100%;
        background-image: url(../assets/log.jpg);
        background-size: 100%;
        font-size: 40px;
    }
    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.3);
        overflow: hidden;
    }
    .panish{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 150px;
        margin: -290px 0 0 -70px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0);
        overflow: hidden;
        z-index: 2;
    }
    .panish img{
        width: 100%;
    }
    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
        line-height: 100%;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }

    .login-tips {
        display: none;
        font-size: 12px;
        line-height: 30px;
        color: red;
    }

    .active {
        display: block;
    }
</style>
