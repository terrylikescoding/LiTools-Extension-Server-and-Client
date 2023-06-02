<template>
  <div class="container mt-5">
    <div class="position-relative">
      <div class="login-form-overlay"></div>
      <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 500px; margin: 0 auto;">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Login</h2>

          <form>
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" id="username" v-model="username" :class="{ 'is-invalid': !username }" required>
              <div class="invalid-feedback">
                Please enter a valid username.
              </div>
            </div>

            <div class="form-group">
              <label for="password">Password:</label>
              <div class="d-flex bd-highlight">
                <input type="password" class="form-control flex-grow-1 bd-highlight" id="password" v-model="password" :class="{ 'is-invalid': !password }" required>  
                <div class="invalid-feedback">
                  Please enter a valid password.
                </div>    
              </div>
            </div>

            <div class="form-group form-check d-flex justify-content-between align-items-center">
              <div class="form-check">
                <input type="checkbox" class="form-check-input mr-2 remember-me" id="remember-me" v-model="rememberMe">
                <label class="form-check-label" for="remember-me">Remember me</label>
              </div>
              <a href="#" class="btn btn-link bd-highlight">Forget password?</a>
            </div>

            <button type="submit" class="btn btn-primary btn-block mt-4 login-btn" @click.prevent="login()" :disabled="!username || !password">Login</button>

            <p class="mt-3">Don't have an account? <a href="#">Register here.</a></p>
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

.remember-me{
  margin-top :7px;
}

.form-check{
  margin-bottom: 0;
}

.login-btn{
  margin-top: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    login() {
      // Add code to handle login logic here
    }
  }
}
</script>
