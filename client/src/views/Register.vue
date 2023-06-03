<template>
  <div class="container mt-5">
    <div class="position-relative">
      <div class="register-form-overlay"></div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 500px; margin: 0 auto;">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">注册</h2>

          <form>
            <div class="form-group">
              <label for="email">邮箱:</label>
              <input type="email" class="form-control" id="email" v-model="email" :class="{ 'is-invalid': emailInvalid }" required>
              <div class="invalid-feedback">
                请输入有效的邮箱地址
              </div>
            </div>

            <div class="form-group">
              <label for="username">用户名:</label>
              <input type="text" class="form-control" id="username" v-model="username" :class="{ 'is-invalid': usernameInvalid }" required>
              <div class="invalid-feedback">
               请输入有效的用户名
              </div>
            </div>

            <div class="form-group">
              <label for="password">密码:</label>
              <div class="input-group">
                <input type="password" class="form-control" id="password" v-model="password" :class="{ 'is-invalid': passwordInvalid }" required>
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i :class="[showPassword ? 'fas fa-eye-slash' : 'fas fa-eye']" @click="toggleShowPassword"></i>
                  </span>
                </div>
              </div>
              <div class="invalid-feedback">
                请输入有效的密码
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password">确认密码:</label>
              <div class="input-group">
                <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" :class="{ 'is-invalid': passwordMismatch }" required>
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i :class="[showPassword ? 'fas fa-eye-slash' : 'fas fa-eye']" @click="toggleShowPassword"></i>
                  </span>
                </div>
              </div>
              <div class="invalid-feedback">
               两次输入的密码不一致
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mt-4 register-btn" @click.prevent="register()" >注册</button>

            <p class="mt-3">已经有账号? <router-link to="/login">点此登录</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Frosted glass effect styles */

.register-form-overlay {
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

.register-btn{
  margin-top: 10px;
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
  components:{
    RouterLink
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      emailInvalid: false,
      usernameInvalid: false,
      passwordInvalid: false,
      passwordMismatch: false,
      showPassword: false
    }
  },
  methods: {
    register() {
      // Check if the input fields are empty
      if (!this.email) {
        this.emailInvalid = true;
      } else {
        this.emailInvalid = false;
      }
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

      // Check if the passwords match
      if (this.password !== this.confirmPassword) {
        this.passwordMismatch = true;
      } else {
        this.passwordMismatch = false;
      }
      
      // Check if the input fields are valid before continuing with registration logic
      if (this.email && this.username && this.password && !this.passwordMismatch) {
        // Add code to handle registration logic here
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>
