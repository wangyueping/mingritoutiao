<template>
  <div>
    <van-nav-bar title="明日头条-登录" />
    <van-form @submit="onSubmit">
      <van-field
        required
        v-model="user.mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '请填写正确格式的手机号' },
        ]"
      />
      <van-field
        required
        v-model="user.code"
        type="password"
        name="code"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\d{6}$/, message: '请填写6位数密码' },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          :loading="isLoading"
          :disabled="isLoading"
          type="info"
          loading-text="登录中..."
          native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from "@/api";
import { Notify } from "vant";
import { setToken } from "@/utils/token";

export default {
  name: "Login",
  data() {
    return {
      user: {
        mobile: "",
        code: "",
      },
      isLoading: false,
    };
  },
  methods: {
    onSubmit(values) {
      this.isLoading = true;
      loginAPI(this.user)
        .then((resposne) => {
          setToken(resposne.data.data.token);
          this.isLoading = false;
          Notify({ type: "success", message: "登陆成功！" });
          this.$router.replace("/layout");
        })
        .catch((err) => {
          this.isLoading = false;
          Notify({ type: "danger", message: "用户名或密码错误！" });
        });
    },
  },
};
</script>

<style scoped lang='less'>
</style>