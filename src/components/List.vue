<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 加载中展示 -->
    <h1 v-show="info.isLoading">页面加载中。。。</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updataListData", (object) => {
      //   console.log("我是List我接收到数据了", object);
      //   this.info = object;
      // 另一种写法
      this.info = { ...this.info, ...object };
    });
  },
};
</script>

