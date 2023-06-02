<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">LiTools</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">主页</router-link>
          </li>
        </ul>
        <div class="navbar-nav mx-3">
          <!-- 参考 https://plugins.jetbrains.com/plugin-ideas/search?sorting=Votes -->
          <router-link class="nav-item nav-link" to="/download"
            >下载</router-link
          >
          <router-link class="nav-item nav-link" to="/extension-ideas"
            >插件征集</router-link
          >
          <router-link class="nav-item nav-link" to="/extensions"
            >插件市场</router-link
          >
          <!-- 加一个介绍，告诉用户如何贡献插件 -->
          <router-link class="nav-item nav-link" to="/upload"
            >贡献插件</router-link
          >
          <router-link class="nav-item nav-link" to="/bug-report"
            >问题反馈</router-link
          >

          <router-link v-if="isAdmin" class="nav-item nav-link" to="/admin-panel"
            >Admin</router-link
          >

          <!-- 登录后，Login变成用户名 -->
          <router-link v-if="isAdmin" class="nav-item nav-link" to="/login"
            >{{ loggedInUser ? loggedInUser : "登录" }}</router-link
          >

        </div>
      </div>
    </div>
  </nav>


</template>
  
  <script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      isAdmin : true // ToDo 仅供测试，后续改为从数据库查询
    };
  },
  computed: {
    ...mapState(["showLoginForm", "loggedInUser"]),
  },
  methods: {
    toggleLoginForm() {
      this.$store.commit("toggleLoginForm");
    },
    loginUser() {
      // Use Axios or other library to send login request to server
      // Then set the loggedInUser data variable if login successful
      this.$store.commit("loginUser", this.email); // For demo purposes only
      this.email = "";
      this.password = "";
    },
  },
};
</script>
  
  <style scoped>
nav {
  height: 40px;
}
.container {
  margin: 0 auto;
  /* background: red; */
}
</style>
  