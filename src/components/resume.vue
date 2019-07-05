<template>
  <div class="wrapper">
    <el-row :gutter="20">
      <el-col :span="12" body-style="{padding: '0px'}">
        <el-card shadow="hover">
          <div class="resume">个人技能详情</div>
          <div id="main" style="left: 'center';top:'middle';height:400px;width:100%;"></div>
        </el-card>
      </el-col>
      <el-col :span="12" body-style="{padding: '0px'}">
        <el-card shadow="hover">
          <div class="resume">个人能力</div>
          <div id="maps" style="left: 'center';top:'middle';height:400px;width:100%;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {};
  },
  methods: {
    skillShow() {
      var myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        series: [
          {
            name: "技能",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 40, name: "js", selected: true },
              { value: 30, name: "html" },
              { value: 30, name: "css" },
              { value: 10, name: "node" },
              { value: 10, name: "php" }
            ]
          },
          {
            name: "框架",
            type: "pie",
            selectedMode:"single",
            radius: ["40%", "55%"],
            label: {
              normal: {
                formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                backgroundColor: "#eee",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                rich: {}
              }
            },
            data: [
              { value: 20, name: "vue" },
              { value: 5, name: "react" },
              { value: 15, name: "bootstrop" },
              { value: 20, name: "jquery" },
              { value: 5, name: "express" },
              { value: 5, name: "nginx" },
              { value: 15, name: "mui" },
              { value: 20, name: "element-ui" },
              { value: 20, name: "echarts" }
            ]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    mapShow() {
      var myChart = echarts.init(document.getElementById("maps"));
      var option = {
        radar: [
          {
            splitArea: {
              areaStyle: {
                color: [
                  "rgba(114, 172, 209, 0.2)",
                  "rgba(114, 172, 209, 0.4)",
                  "rgba(114, 172, 209, 0.6)",
                  "rgba(114, 172, 209, 0.8)",
                  "rgba(114, 172, 209, 1)"
                ],
                shadowColor: "rgba(0, 0, 0, 0.3)",
                shadowBlur: 10
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
              }
            }
          },
          {
            indicator: [
              { text: "学习", max: 150 },
              { text: "适应", max: 150 },
              { text: "处事", max: 150 },
              { text: "性格", max: 120 },
              { text: "态度", max: 120 },
              { text: "能力", max: 120 }
            ],
            center: ["50%", "50%"],
            radius: 120
          }
        ],
        series: [
          {
            type: "radar",
            radarIndex: 1,
            data: [
              {
                value: [130, 118, 130, 100, 100, 100],
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value;
                    },
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        color: "#B8D3E4",
                        offset: 0
                      },
                      {
                        color: "#72ACD1",
                        offset: 1
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.skillShow();
    this.mapShow();
  }
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
.resume {
  text-align: left;
  padding-left: 40px;
  font-size: 14px;
  height: 20px;
}
.grid-num {
  height: 20px;
}
</style>




