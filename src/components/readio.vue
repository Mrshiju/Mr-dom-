<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <el-row :gutter="10" height="60px">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple">时间：{{datanow}}</div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light">
              <el-button @click="loginout">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <el-menu :default-openeds="['1', '3']" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>个人信息
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="elployment">招聘信息</el-menu-item>
                <el-menu-item index="readio">个人技能</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>导航二
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>导航三
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datanow: new Date().toLocaleTimeString()
    };
  },
  methods: {
    loginout() {
      localStorage.removeItem("userName");
      this.$router.push("login");
    }
  },
  mounted() {
    let _this = this;
    setInterval(function name(params) {
      _this.datanow = new Date().toLocaleTimeString();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  height: 100%;
  background: linear-gradient(45deg, rgb(210, 230, 174), pink, skyblue);
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background: linear-gradient(45deg, rgb(206, 223, 145), pink, skyblue);

  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.wrapper >>> .el-main {
  background: linear-gradient(45deg, yellowgreen, pink, skyblue, 0.1);

  color: #333;
  /* text-align: center; */
  /* line-height: 160px;
  height: 100%; */
  overflow: auto;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  color: white;

  overflow-y: auto;
  overflow-x: auto;
  z-index: 0;
}
.el-aside::-webkit-scrollbar {
  width: 0;
}
.el-row >>> .grid-content {
  min-height: 60px;
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
