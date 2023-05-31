<template>
  <div class="site-container">
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
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
          </ul>
          <div class="navbar-nav mx-3">
            <!-- 参考 https://plugins.jetbrains.com/plugin-ideas/search?sorting=Votes -->
            <router-link class="nav-item nav-link" to="/extension-ideas">Plugin Ideas</router-link>
            <router-link class="nav-item nav-link" to="/extensions">View Extensions</router-link>
            <!-- 加一个介绍，告诉用户如何贡献插件 -->
            <router-link class="nav-item nav-link" to="/upload">Upload an Extension</router-link>
            <!-- 登录后，Login变成用户名 -->
            <button class="nav-item nav-link btn btn-link" @click="toggleLoginForm">
              {{ loggedInUser ? loggedInUser : "Login" }}
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6 text-center text-md-left">
            <span class="text-muted">Contact LiTools at xxx@yyy.com</span>
          </div>
          <div class="col-12 col-md-6 text-center text-md-right">
            <span class="text-muted">LiTools 版权所有 © 2023</span>
          </div>
        </div>
      </div>
    </footer>
    <div class="modal" tabindex="-1" role="dialog" v-if="showLoginForm">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="close" @click="toggleLoginForm">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="toggleLoginForm">Close</button>
            <button type="button" class="btn btn-primary" @click="loginUser">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState([
      "showLoginForm",
      "loggedInUser"
    ]),
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

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");

.site-container {
  min-height: 100vh;
  position: relative;
}

.content {
  padding-bottom: 50px;
}

.footer {
  background-color: #f5f5f5;
  height: 30px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 15px;
}
</style>
