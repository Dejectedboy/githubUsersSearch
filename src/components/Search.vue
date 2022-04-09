<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="userSearch"
        @keyup.enter="getUsers"
      />&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      userSearch: "",
    };
  },
  methods: {
    getUsers() {
      //发送请求前
      this.$bus.$emit("updataListData", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.userSearch}`)
        .then(
          (response) => {
            // console.log("发送请求成功", response.data.items);
            this.$bus.$emit("updataListData", {
              isLoading: false,
              errorMsg: "",
              users: response.data.items,
            });
          },
          (error) => {
            if (error.message) {
              error.message = "无法查询到该用户,或检查您的网络是否连接";
            }
            // console.log("发送请求失败", error.message);
            this.$bus.$emit("updataListData", {
              isLoading: false,
              errorMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>