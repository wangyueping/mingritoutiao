<template>
  <div>
    <!-- 标题导航栏 -->
    <Header />
    <div class="loading" v-if="isLoading">
      <van-loading size="6.4vw" vertical>加载中...</van-loading>
    </div>

    <!-- 频道Tab标签 -->
    <div class="tabs" v-if="!isLoading">
      <van-tabs
        ref="tabs"
        v-model="active"
        sticky
        animated
        offset-top="12.266vw"
        :v-if="!isLoading"
      >
        <van-tab
          v-for="channelObj in channels"
          :key="channelObj.id"
          :title="channelObj.name"
          :name="channelObj.id"
        >
          <ArticleContent @getStatus="judgeIsLoading" :channelID="active" />
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
      isLoading: true,
    };
  },
  methods: {
    judgeIsLoading(status) {
      this.isLoading = status;
    },
  },
  components: {
    ArticleContent,
    Header,
  },
  created() {
    userChannelsAPI()
      .then((response) => {
        this.channels = response.data.data.channels;
        this.isLoading = false;
      })
      .catch((err) => {
        Notify({ type: "danger", message: "网络请求错误！" });
        this.isLoading = false;
      });
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.tabs {
  padding-top: 92px;
}
</style>