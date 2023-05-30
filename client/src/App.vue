<template>
  <div class="site-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">LiTools</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
          </ul>
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
  </div>
</template>

<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

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

<script>
export default {
  name: 'App',
};
</script>
