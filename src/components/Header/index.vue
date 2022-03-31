<template>
  <!-- 标题导航栏 -->
  <div class="nav-bar">
    <van-nav-bar fixed>
      <template #right>
        <van-icon name="search" size="4.8vw" />
      </template>
      <template v-slot:left>
        <img class="image" src="../../assets/logo.png" alt="" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
.van-nav-bar .van-icon {
  color: #fff;
}
.image {
  width: 200px;
  height: 92px;
}
</style>