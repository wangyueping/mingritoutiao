<template>
  <div>
    <!-- 文章组件 -->
    <van-cell>
      <template v-slot:title>
        <h3>
          {{ articleObj.title }}
          <div class="three-image" v-if="articleObj.cover.type === 3">
            <img
              class="thumb-images"
              :src="articleObj.cover.images[0]"
              alt=""
            />
            <img
              class="thumb-images"
              :src="articleObj.cover.images[1]"
              alt=""
            />
            <img
              class="thumb-images"
              :src="articleObj.cover.images[2]"
              alt=""
            />
          </div>
        </h3>
      </template>
      <template v-slot:label>
        <span>{{ articleObj.aut_name }}</span
        >&nbsp; <span>{{ articleObj.comm_count }}评论</span>&nbsp;
        <span>{{ dayjs(articleObj.pubdate) }}</span>
        <div class="icon-close" v-if="articleObj.cover.type === 1">
          <van-icon name="cross" />
        </div>
      </template>
      <template v-slot:default>
        <img
          v-if="articleObj.cover.type === 1"
          :src="articleObj.cover.images[0]"
        />
        <div
          class="icon-close"
          v-if="articleObj.cover.type === 0 || articleObj.cover.type === 3"
        >
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import dayjs from "@/utils/formatDate";

export default {
  name: "ArticleItem",
  data() {
    return {
      dayjs: dayjs,
    };
  },
  props: ["articleObj"],
};
</script>

<style lang="less" scoped>
h3 {
  font-weight: 400;
  margin: 10px 0 10px 0;
}
.van-cell {
  justify-content: space-between;
  .van-cell__title {
    padding-right: 20px;
    flex-shrink: 1;
    flex-basis: auto;
    .three-image {
      margin-top: 20px;
    }
    .van-cell__label {
      .icon-close {
        height: 36px;
        text-align: right;
      }
    }
    .thumb-images {
      width: 206px;
      height: 140px;
      margin-right: 2px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .van-cell__value {
    flex-shrink: 0;
    flex-basis: auto;
    min-width: 28px;
    max-width: 226px;
    img {
      width: 226px;
      height: 140px;
      text-align: left;
    }
    .icon-close {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>