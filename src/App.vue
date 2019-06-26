<template>
    <div id="app">
        <template>
            <div class="live2d-panel">
                <dialogue v-if="isDialogue" :customDialogue="customDialogue" ref='dialogue'
                          :position="right"></dialogue>
                <live2d v-if="islive2d" :modelPath="modelPath" ref='l2dMange'
                ></live2d>
            </div>

            <div class="tools-panel">
                <live2dTools v-for="(item,index) in toolsData" :key="index" v-if="item.show"
                             @click="toolsClick(item)"
                             :width="item.width" :toolsID="item.tabMsg" :tabMsg="item.tabMsg"
                             :customDialogue='item.customDialogue'
                             :backgroundColor="item.backgroundColor" ref='tool'
                             position="right">
                </live2dTools>

            </div>
        </template>
        <transition name="fade" mode="out-in">

            <router-view>

            </router-view>
        </transition>


    </div>
</template>
<script>
    import custom from '../node_modules/live2d-vue/src/custom';

    export default {
        name: 'App',
        data() {
            return {
                modelPath: '../static/model.json',
                customDialogue: custom,
                toolsData: [
                    {tabMsg: 'readio', backgroundColor: '#ff0', show: true},
                    {tabMsg: 'dialogue', width: 280, customDialogue: custom, show: true},
                    {tabMsg: 'change', backgroundColor: '#add8e6', show: true},
                    {tabMsg: 'save', backgroundColor: 'green', show: true},
                    {tabMsg: 'about', backgroundColor: '#eb7a77', show: true},
                    {tabMsg: 'login', backgroundColor: 'red', show: true}
                ],
                islive2d: true,
                isDialogue: false,
            }
        },
        methods: {
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
                    case 'login':
                        this.islive2d = true
                        this.$router.push("/login")
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
</script>

<style>

    @import "../static/main.css";

    #app {
        position: relative
    }

    .tools-panel {
        position: fixed;
        right: 0;
        bottom: 0;
        max-width: 32px;
    }

    .live2d-panel {
        position: fixed;
        right: 0;
        bottom: 0
    }

    .fade-enter {
        opacity: 0.6;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-enter-active {
        transition: opacity 2s;
    }

    .fade-leave-active {
        opacity: 0;
        transition: opacity 2s;
    }

</style>
