<template>
  <div>
    <h2>{{ extension.name }} Details</h2>
    <p>{{ extension.description }}</p>
    <button @click="onBack">Back to Extensions</button>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  export default {
  props: ['id'],
  data() {
    return {
      extension: null,
      loading: true,
      error: null,
    };
  },
  created() {
    // Fetch the extension details using the ID passed as a route parameter
    this.fetchExtension(this.id);
  },
  methods: {
    fetchExtension(id) {
      console.log('Fetching extension with ID:', id);
      axios.get(`http://localhost:3000/extensions/${id}`).then(response => {
        this.extension = response.data;
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.error = error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          this.error = 'Unable to connect to server';
        } else {
          // Something else happened while setting up the request
          this.error = 'An error occurred while fetching extension details';
        }
      });
    },
    onBack() {
      // Use the router to navigate back to the extensions list page
      this.$router.push({ name: 'extensionList' });
    },
  },
};
  </script>
  