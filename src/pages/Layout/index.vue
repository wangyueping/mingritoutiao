<template>
  <div class="layout-container">
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item :to="{ name: 'Home' }" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'User' }" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.layout-container {
  padding-bottom: 100px;

  .van-tabbar {
    border-top: 1px solid #f8f8f8;
  }
}
</style>>