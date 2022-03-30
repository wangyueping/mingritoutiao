<template>
  <div>
    <van-cell>
      <template v-slot:title>
        <h3>{{ articleObj.title }}</h3>
      </template>
      <template v-slot:label>
        <span>{{ articleObj.aut_name }}</span
        >&nbsp; <span>{{ articleObj.comm_count }}</span
        >&nbsp;
        <span>{{ articleObj.pubdate }}</span>
      </template>
      <template v-slot:default>
        <span><van-icon name="cross" /></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: ["articleObj"],
};
</script>

<style lang="less" scoped>
h3 {
  font-weight: 400;
  margin: 10px 0;
}
.van-cell__value {
  span {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>