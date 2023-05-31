<template>
  <div class="site-container">
    <TopBar />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from '@/components/Footer.vue';
import TopBar from '@/components/TopBar.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons' // Import the icons you need
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css' // Import the Font Awesome CSS file

library.add(faDownload, faStar) // Add the icons to the library

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    TopBar,
    Footer,
    FontAwesomeIcon
  },
  computed: {
  },
  methods: {
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


</style>
