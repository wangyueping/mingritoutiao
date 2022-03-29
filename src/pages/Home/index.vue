<template>
  <div>
    <!-- 标题导航栏 -->
    <div class="nav-bar">
      <van-nav-bar fixed>
        <template #right>
          <van-icon name="search" />
        </template>
        <template v-slot:left>
          <img class="image" src="../../assets/logo.png" alt="" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 频道Tab标签 -->
    <div class="tabs">
      <van-tabs
        ref="tabs"
        v-model="active"
        sticky
        animated
        offset-top="12.266vw"
      >
        <van-tab title="标签 1">
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
          <p>内容 1</p>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.image {
  width: 200px;
  height: 92px;
}
.van-nav-bar .van-icon {
  color: #fff;
  font-size: 36px;
}
.tabs {
  padding-top: 92px;
}
</style>