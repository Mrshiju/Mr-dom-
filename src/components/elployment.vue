<template>
  <div>
    <el-card style="height:100%">
      <el-form :inline="true" label-width="100px">
        <el-form-item label="公司信息：">
          <el-input v-model="company"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="checkData">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="name" label="公司信息"></el-table-column>
        <el-table-column prop="address" label="公司要求"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage4"
          :page-size.sync="pageSizes"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      company: "",
      pageSizes: 30,
      currentPage4: 1,
      total: 0
    };
  },

  methods: {
    async checkData() {
      let res = await this.postRequest("/elployment", {
        name: this.company,
        pageNum: this.currentPage4,
        pageSizes: this.pageSizes
      });
      this.total = res.data.total.totle;
      if (res.data.success == "true") {
        this.tableData = [];
        let total = res.data.data.length;
        for (let item of res.data.data) {
          this.tableData.push({
            name: item.ages,
            address: item.slug
          });
        }
      }
    },

    handleSizeChange() {
      this.checkData();
    },

    handleCurrentChange() {
      this.checkData();
    }
  },

  mounted() {}
};
</script>
<style scoped>
.demo-input-suffix {
  float: left;
}
</style>

