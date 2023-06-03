<template>
  <div class="container-fluid">
    <div class="row align-items-center hero">
      <div class="col-md-6 text-center">
        <h1>Download Internet Download Manager</h1>
        <p class="lead">
          Internet Download Manager has been registered with a&nbsp;
          <span class="badge bg-info">fake serial number</span>.
        </p>
        <p>
          <button @click="$router.push(`/download`)" class="btn btn-primary btn-lg">
            Download Now
          </button>
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/idm.png" alt="Internet Download Manager" />
      </div>
    </div>

    <section class="section-features bg-white">
      <div class="container col-lg-8">
        <h2 class="text-center mb-5">Features</h2>

        <div class="row mb-4  mt-4">
          <div class="col-lg-12">
            <div class="feature-item">
              <div class="row">
                <div class="col-lg-9">
                  <img src="../assets/feature1.png" alt="Feature 1" class="img-fluid">
                </div>
                <div class="col-lg-3">
                  <h3>Resume Downloads</h3>
                  <p>Internet Download Manager will resume unfinished downloads from where they left off.</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="row  mb-4 mt-4">
          <div class="col-lg-12">
            <div class="feature-item">
              <div class="row">
                <div class="col-lg-9">
                  <img src="../assets/skpscr.jpeg" alt="Feature 1" class="img-fluid">
                </div>
                <div class="col-lg-3">
                  <h3>Speed Acceleration</h3>
                  <p>Internet Download Manager can accelerate downloads by up to 5 times due to its intelligent dynamic file segmentation technology.</p>
                </div>
              </div>
            </div>
          </div>
          </div>

       
          <div class="row  mb-4  mt-4">
          <div class="col-lg-12">
            <div class="feature-item">
              <div class="row">
                <div class="col-lg-9">
                  <img src="../assets/feature1.png" alt="Feature 1" class="img-fluid">
                </div>
                <div class="col-lg-3">
                  <h3>Simple Installation</h3>
                  <p>The installation wizard is simple and intuitive, making the setup process fast and easy.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>






    <div class="row testimonials">
      <div class="col-md-6">
        <blockquote class="blockquote">
          IDM saved my day. I was downloading a large file when my internet connection dropped. When I reconnected, IDM
          resumed the download from where it left off and I was able to get my work done on time. Thanks IDM!
          <footer class="blockquote-footer">John Doe</footer>
        </blockquote>
      </div>
      <div class="col-md-6">
        <blockquote class="blockquote">
          I've been using IDM for years and it has never let me down. The speed acceleration feature is amazing and has
          saved me so much time over the years.
          <footer class="blockquote-footer">Jane Doe</footer>
        </blockquote>
      </div>
    </div>

    <div class="row call-to-action">
      <div class="col-md-8 offset-md-2 text-center">
        <h2>Download Internet Download Manager Today</h2>
        <p>Experience fast, reliable, and secure downloads with internet Download Manager.</p>
        <p>
          <button class="btn btn-primary btn-lg">
            Download Now
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 80vh;
  background-color: #f2f6ff;
}

.features {
  padding: 0;
  margin-bottom: 30px;
  background-color: #fafafa;
}

.testimonials {
  padding: 80px 0;
  background-color: #f2f6ff;
}

.call-to-action {
  padding: 80px 0;
  background-color: #fafafa;
}
</style>

<script>
export default {
  name: "Home",
};
</script>
