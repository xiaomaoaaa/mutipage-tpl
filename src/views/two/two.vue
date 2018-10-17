<template>
    <div>
       <el-button :plain="true" @click="open">打开消息提示</el-button>
    </div>
</template>
<script>

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    open() {
      this.$message("这是一条消息提示");
    }
  }
};
</script>
<style>
</style>
