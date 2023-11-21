<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    //使用辅助函数获取closeTag对象再ES6扩展运算符解构出来
    ...mapMutations(["closeTag"]),
    // 面包屑路由跳转 通过传入一个对象
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    //点击tag删除的功能
    handleClose(item, index) {
      // 也可用this.$store.commit 在项目中尽量保证代码风格一致性 这里只做演示
      //调用store中的mutation
      this.closeTag(item);
      const length = this.tags.length;
      //删除之后的跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
      // 表示删除的是最后一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } // 删除的是中间一项
      else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 10px;
        cursor: pointer;
    }
}
</style>
