<template>
  <div class="container mt-5">
    <div class="position-relative">
      <div class="login-form-overlay"></div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 500px; margin: 0 auto;">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">登录</h2>

          <form>
            <div class="form-group">
              <label for="username">用户名:</label>
              <input type="text" class="form-control" id="username" v-model="username"
                :class="{ 'is-invalid': usernameInvalid }" required>
              <div class="invalid-feedback">
                请输入用户名！
              </div>
            </div>

            <div class="form-group">
              <label for="password">密码:</label> 
                <input type="password" class="form-control flex-grow-1 bd-highlight" id="password" v-model="password"
                  :class="{ 'is-invalid': passwordInvalid }" required>
                  <div class="invalid-feedback">
                    请输入密码！
              </div>
            </div>

            <div class="form-group form-check d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input mr-2 remember-me" id="remember-me" v-model="rememberMe">
                <label class="form-check-label" for="remember-me">记住我</label>
              </div>
              <a href="#" class="btn btn-link bd-highlight">忘记密码?</a>
            </div>

            <button type="submit" class="btn btn-primary btn-block mt-4 login-btn" @click.prevent="login()">登录</button>

            <p class="mt-3">还没有账号?&nbsp;<router-link to="/register">点此注册</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Frosted glass effect styles */

.login-form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  z-index: 1;
}

.card {
  position: relative;
  z-index: 2;
}

.remember-me {
  margin-top: 7px;
}

.form-check {
  margin-bottom: 0;
}

.login-btn {
  margin-top: 10px;
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
  name : "Login",
  components: {
    RouterLink,
  },
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      usernameInvalid: false,
      passwordInvalid: false
    }
  },
  methods: {
    login() {
      // Check if the input fields are empty
      if (!this.username) {
        this.usernameInvalid = true;
      } else {
        this.usernameInvalid = false;
      }
      if (!this.password) {
        this.passwordInvalid = true;
      } else {
        this.passwordInvalid = false;
      }

      // Check if the input fields are valid before continuing with login logic
      if (this.username && this.password) {
        // Add code to handle login logic here
      }
    }
  }
}
</script>
