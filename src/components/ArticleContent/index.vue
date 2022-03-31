<template>
  <div>
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <!-- 加载更多 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <ArticleItem
          v-for="articleObj in articleList"
          :key="articleObj.art_id"
          :articleObj="articleObj"
        ></ArticleItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import ArticleItem from "@/components/ArticleItem";
import { getUserArticleAPI } from "@/api";

export default {
  name: "ArticleContent",
  data() {
    return {
      articleList: [],
      loading: false,
      finished: false,
      timestamp: "",
      isLoading: false,
    };
  },
  components: {
    ArticleItem,
  },
  methods: {
    onLoad() {
      // 判断数据是否全部加载完毕
      if (!this.timestamp) {
        this.finished = true;
        return;
      }
      getUserArticleAPI({
        channelID: this.channelID,
        timestamp: this.timestamp,
      })
        .then((response) => {
          this.articleList = [
            ...this.articleList,
            ...response.data.data.results,
          ];
          this.timestamp = response.data.data.pre_timestamp;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    onRefresh() {
      getUserArticleAPI({
        channelID: this.channelID,
        timestamp: new Date().getTime(),
      })
        .then((response) => {
          this.articleList = response.data.data.results;
          this.timestamp = response.data.data.pre_timestamp;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  props: ["channelID"],
  created() {
    getUserArticleAPI({
      channelID: this.channelID,
      timestamp: new Date().getTime(),
    })
      .then((response) => {
        this.articleList = response.data.data.results;
        this.timestamp = response.data.data.pre_timestamp;
        this.$emit("getStatus", false);
      })
      .catch((err) => {
        console.log(err.message);
        this.$emit("getStatus", false);
      });
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-loading__spinner {
  width: 36px !important;
  height: 36px !important;
}
</style>