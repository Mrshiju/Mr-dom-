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
        ></vue-particles>
        <div class="panish">
            <img :src="src">
        </div>
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="0px"
                class="ms-content"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="ruleForm.username"
                        placeholder="username"
                        @focus="userfocus"
                        @blur="blur"
                    >
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
                <div class="login-btn">
                    <el-button
                        type="primary"
                        @click="submitForm('ruleForm')"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                        :disabled="loading"
                        :loading="loading"
                    >{{loading !== true ? '登录' : '登录中...'}}
                    </el-button>
                </div>
                <p class="login-tips" :class="{active:isActive}">提示：{{errorMsg}}</p>
            </el-form>
        </div>


    </div>
</template>

<script>
    import custom from '../../node_modules/live2d-vue/src/custom';

    export default {
        data: function () {
            return {
                loading: false,
                isActive: false,
                errorMsg: "lalala",
                ruleForm: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: "blur"}
                    ],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}]
                },
                src: require("../assets/login.png"),
                modelPath: '../../static/model.json',
                customDialogue: custom,
                toolsData: [
                    {tabMsg: 'readio', backgroundColor: '#ff0', show: true},
                    {tabMsg: 'dialogue', width: 280, customDialogue: custom, show: true},
                    {tabMsg: 'change', backgroundColor: '#add8e6', show: true},
                    {tabMsg: 'save', backgroundColor: 'green', show: true},
                    {tabMsg: 'about', backgroundColor: '#eb7a77', show: true},
                    {tabMsg: 'hide', backgroundColor: 'red', show: true}
                ],
                islive2d: true,
                isDialogue: false,
                path:'',
            };
        },
        methods: {
            userfocus() {
                this.src = require("../assets/userName.png");
            },
            passwordfocus() {
                this.src = require("../assets/password.png");
            },
            blur() {
                this.src = require("../assets/login.png");
            },
            async submitForm() {
                // let username = this.ruleForm.username;
                // let password = this.ruleForm.password;
                // let path = await  this.$axios.get("/static/requestUrl.json");
                // this.path = path.data.yxBaseUrl;
                // console.log(path,this.path);
                let res = await this.$axios({
                    method: 'post',
                    // url: `${this.path}/web/login`,

                    url:'http://127.0.01:8089/' ,
                    headers: {
                        token: sessionStorage.admin_token
                    },
                    data: {
                        userName: this.ruleForm.username,
                        password: this.ruleForm.password,
                        // source: "admin"
                    }
                });

                console.log(res);
                // if (username === 'wsj' && password === '123') {
                //     this.$router.push("readio");
                //     this.$notify.success('欢迎登录')
                // } else {
                //     this.$notify({
                //         title: "失败",
                //         message: "用户名或密码错误",
                //         type: "warning"
                //     });
                // }
            },
            toolsClick(item) {
                switch (item.tabMsg) {
                    case 'readio':
                        this.$router.push("/readio")
                        break
                    case 'change':
                        // this.$refs.l2dMange.initL2dMange('http://127.0.0.1:8000/media/static/live2d/Pio/model.json')
                        // this.modelPath = 'http://127.0.0.1:8000/media/static/live2d/Pio/model.json'
                        break
                    case 'save':
                        window.Live2D.captureName = `live2d-${Date.now()}.png`
                        window.Live2D.captureFrame = true
                        break
                    case 'about':
                        window.open("https://github.com/LingHanChuJian/live2d-vue")
                        break
                    case 'hide':
                        this.islive2d = false
                        this.toolsDisplay('hide')
                        break
                    case 'show':
                        this.islive2d = true
                        this.toolsDisplay('show')
                        break
                }
            },
            toolsDisplay(display) {
                for (let i = 0, len = this.toolsData.length; i < len; i++) {
                    let tabMsg = this.toolsData[i].tabMsg
                    if (display === 'hide') {
                        if (tabMsg === 'home' || tabMsg === 'about')
                            continue
                        this.toolsData[i].show = false
                        if (tabMsg === 'hide') {
                            this.toolsData[i].show = true
                            this.toolsData[i].tabMsg = 'show'
                        }
                    } else {
                        this.toolsData[i].show = true
                        if (tabMsg === 'show')
                            this.toolsData[i].tabMsg = 'hide'
                    }
                }
            },
            handleMove(liveModel) {
                liveModel.setParamFloat('PARAM_ANGLE_X', value);
            }


        },
        mounted() {
            setInterval(() => {
                fetch('https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json')
                    .then(res => res.json())
                    .then(data => {
                        if (!this.isDialogue) {
                            let tool = this.$refs.tool.filter(item => {
                                return item.customDialogue
                            })
                            if (tool && tool.length > 0)
                                tool[0].showMessage(data.hitokoto)
                        } else {
                            this.$refs.dialogue.showMessage(data.hitokoto)
                        }
                    })
            }, 30000);

        }
    }
    ;
</script>

<style scoped>
    #app {
        position: relative
    }

    .tools-panel {
        position: fixed;
        left: 0;
        bottom: 0;
        max-width: 320px;
    }

    .live2d-panel {
        position: fixed;
        right: 0;
        bottom: 0
    }

    .login-wrap {
        width: 100%;
        height: 100%;
        background-image: url(../assets/log.jpg);
        background-size: 100% 100%;
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

    .panish {
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

    .panish img {
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
