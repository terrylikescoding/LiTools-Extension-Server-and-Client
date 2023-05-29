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
    };
  },
  created() {
    // Fetch the extension details using the ID passed as a route parameter
    this.fetchExtension(this.id);
  },
  methods: {
    fetchExtension(id) {
      axios.get(`http://localhost:3000/extensions/${id}`).then(response => {
        this.extension = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
    onBack() {
      // Use the router to navigate back to the extensions list page
      this.$router.push({ name: 'extensionsList' });
    },
  },
};
  </script>
  