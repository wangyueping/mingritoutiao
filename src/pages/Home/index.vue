<template>
  <div>
    <!-- 标题导航栏 -->
    <Header />
    <!-- 频道Tab标签 -->
    <div class="tabs">
      <van-tabs
        ref="tabs"
        v-model="active"
        sticky
        animated
        offset-top="12.266vw"
      >
        <van-tab
          v-for="channelObj in channels"
          :key="channelObj.id"
          :title="channelObj.name"
          :name="channelObj.id"
        >
          <ArticleContent :channelID="active" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ArticleContent from "@/components/ArticleContent";
import Header from "@/components/Header";
import { userChannelsAPI } from "@/api";
import { Notify } from "vant";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      channels: [],
    };
  },
  components: {
    ArticleContent,
    Header,
  },
  created() {
    userChannelsAPI()
      .then((response) => {
        console.log(response.data.data.channels);
        this.channels = response.data.data.channels;
      })
      .catch((err) => {
        Notify({ type: "danger", message: "网络请求错误！" });
      });
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding-top: 92px;
}
</style>