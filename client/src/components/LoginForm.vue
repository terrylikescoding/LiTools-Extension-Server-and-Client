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
export default {
  data() {
    return {
      show: false,
      email: '',
      password: ''
    };
  },
  methods: {
    toggleLoginForm() {
      this.show = !this.show;
    },
    loginUser() {
      // Use Axios or other library to send login request to server
      // Then redirect user to dashboard if login successful
    },
    toggleRegisterForm() {
      // Implement register form as a similar component and show it instead
    }
  }
};
</script>
  
  <style scoped>
  .login-form-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black background */
    z-index: 3; /* take priority over other elements */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-form {
    max-width: 400px;
    padding: 30px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .login-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .login-form form {
    display: flex;
    flex-direction: column;
  }
  
  .input-container {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .input-container label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-container input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
  
  .submit-btn {
    width: 100%;
    height: 40px;
    background-color: #0078D7;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #106EBE;
  }
  
  .register-link {
    margin-top: 20px;
  }
  </style>
  