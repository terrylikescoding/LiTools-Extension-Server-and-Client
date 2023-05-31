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

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    TopBar,
    Footer
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
