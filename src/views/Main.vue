<template>
  <el-container>
    <el-aside width="auto">
      <Common-aside />
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>
      <CommonTag/>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTag from "../components/CommonTag.vue";
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag 
  },
};
</script>

<style lang="less" scoped>
   .el-header{
    padding: 0;
   }
</style>

