<template>
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
</template>
  
  <script>
export default {
  name: "Footer",
};
</script>
  
<style scoped>
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
  