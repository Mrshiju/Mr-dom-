<template>
  <div class>
    <el-button type="button" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center v-dialogDrag >
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "elloading.vue",
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>

<style scoped>
</style>