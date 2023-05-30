<template>
  <div>
    <h1 class="my-4">Welcome to LiTools!</h1>
    <div class="card-deck">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Extensions Gallery</h5>
          <p class="card-text">Browse and search for LiTools extensions.</p>
          <router-link class="btn btn-primary" to="/extensions">View Extensions</router-link>
          <br />
          <br />
          <router-link class="btn btn-primary" to="/upload">Upload an Extension</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-deck .card {
  border: none;
}
</style>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      extensions: [],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

