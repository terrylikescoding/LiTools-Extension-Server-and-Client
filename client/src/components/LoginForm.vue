<template>
    <div class="login-form-wrapper" v-show="show">
      <div class="login-form">
        <h2>Login</h2>
        <form>
          <div class="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="input-container">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button class="submit-btn" type="submit" @click.prevent="loginUser">Login</button>
        </form>
        <p class="register-link">
          Don't have an account? 
          <a href="#" @click.prevent="toggleRegisterForm">Register now</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    computed: {
      show() {
        return this.$store.state.loginFormVisible;
      }
    },
    methods: {
      ...mapMutations(['toggleLoginForm']),
      loginUser() {
        // Use Axios or other library to send login request to server
        // Then redirect user to dashboard if login successful
      },
      toggleRegisterForm() {
        // Implement register form as a similar component and show it instead
      }
    },
    created() {
    this.toggleLoginForm();
  },
  };
  </script>
  
  <style scoped>
  /* login form styles */
  </style>
  