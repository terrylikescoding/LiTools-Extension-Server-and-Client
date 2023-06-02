<template>
  <div class="container mt-5">
    <div class="position-relative">
      <div class="register-form-overlay"></div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 500px; margin: 0 auto;">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Register</h2>

          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="email" :class="{ 'is-invalid': emailInvalid }" required>
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username" :class="{ 'is-invalid': usernameInvalid }" required>
              <div class="invalid-feedback">
                Please enter a valid username.
              </div>
            </div>

            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model="password" :class="{ 'is-invalid': passwordInvalid }" required>
              <div class="invalid-feedback">
                Please enter a valid password.
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password">Confirm Password:</label>
              <input type="password" class="form-control" id="confirm-password" v-model="confirmPassword" :class="{ 'is-invalid': passwordMismatch }" required>
              <div class="invalid-feedback">
                Passwords do not match.
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-block mt-4 register-btn" @click.prevent="register()" >Register</button>

            <p class="mt-3">Already have an account? <router-link to="/login">Login here.</router-link></p>
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
      passwordMismatch: false
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
    }
  }
}
</script>
