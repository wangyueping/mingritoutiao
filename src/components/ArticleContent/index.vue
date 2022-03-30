<template>
  <div>
    <ArticleItem
      v-for="articleObj in articleList"
      :key="articleObj.art_id"
      :articleObj="articleObj"
    ></ArticleItem>
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
    };
  },
  components: {
    ArticleItem,
  },
  props: ["channelID"],
  created() {
    getUserArticleAPI({
      channelID: this.channelID,
      timestamp: new Date().getTime(),
    })
      .then((response) => {
        console.log(response.data);
        this.articleList = response.data.data.results;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};
</script>

<style lang="less" scoped>
</style>