<template>
  <div>
    <h1 class="my-4">Welcome to LiTools!</h1>
    <div class="card-deck">
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Extensions Gallery</h5>
          <p class="card-text">Browse and search for LiTools extensions.</p>
          <router-link class="btn btn-primary" to="/extensions">View Extensions</router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="extension in extensions" :key="extension.id">
        <div class="card mb-4 box-shadow">
          <div class="card-body">
            <h5 class="card-title">{{ extension.name }}</h5>
            <p class="card-text">{{ extension.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <router-link :to="'/extensions/' + extension.id" class="btn btn-sm btn-outline-secondary">View</router-link>
              </div>
              <small class="text-muted">{{ extension.createdBy }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      extensions: [],
    };
  },
  mounted() {
    this.fetchExtensions();
  },
  methods: {
    async fetchExtensions() {
      try {
        const response = await axios.get('http://localhost:3000/extensions');
        this.extensions = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
