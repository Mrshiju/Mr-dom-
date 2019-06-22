<template>
    <div>
        <div v-for="item in struct">
            <h6>{{item.question}}</h6>
            <el-radio-group v-model="item.answervalue" @change="changes">
                <template v-for="items in item.optionlist" >
                    <el-radio :label=i v-for="(key,i) in items" >
                            {{items[i]}}
                    </el-radio>
                </template>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                struct: [{
                    "optionlist": [{
                        "00": "宋江"
                    }, {
                        "10": "吴用"
                    }, {
                        "20": "卢俊义"
                    }],
                    quetype: "1",
                    answervalue: "20",
                    question: "请问你好我是第一题"
                },
                    {
                        "optionlist": [{
                            "01": "宋江1"
                        }, {
                            "11": "吴用1"
                        }, {
                            "21": "卢俊义1"
                        }],
                        quetype: "1",
                        answervalue: "11",
                        question: "请问你好我是第er题"
                    },
                    {
                        "optionlist": [{
                            "02": "宋江2"
                        }, {
                            "12": "吴用2"
                        }, {
                            "22": "卢俊义2"
                        }],
                        quetype: "1",
                        answervalue: "22",
                        question: "请问你好我是第san题"
                    },
                    {
                        "optionlist": [{
                            "03": "宋江"
                        }, {
                            "13": "吴用"
                        }, {
                            "23": "卢俊义"
                        }],
                        quetype: "1",
                        answervalue: "03",
                        question: "请问你好我是第si题"
                    },

                ],
                item:{
                    answervalue:'',
                },
                answervalue:[],
            };
        },
        methods:{
            changes(e){
                console.log('1111' + e);
            },
        },
        mounted() {

            console.log(this.struct.answervalue)
            // this.struct.optionlist.map(function (key,v) {
            //     console.log(key.v);
            // })
            this.struct.forEach(function (key) {
                // key.optionlist.forEach(function (keys) {
               for (let i of key.optionlist){

               }

                    // for (let i of keys){
                    //     console.log(i);
                    // }
                })
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
