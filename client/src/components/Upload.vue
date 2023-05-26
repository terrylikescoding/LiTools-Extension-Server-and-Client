
<template>
  <div>
    <h1>Upload Extension</h1>
    <form @submit.prevent="uploadExtension">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="version">Version:</label>
      <input type="text" id="version" v-model="version" required>
      <label for="description">Description:</label>
      <textarea id="description" v-model="description"></textarea>
      <label for="createdBy">Created by:</label>
      <input type="text" id="createdBy" v-model="createdBy" required>
      <button type="submit">Upload</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      version: '',
      description: '',
      createdBy: '',
    };
  },
  methods: {
    async uploadExtension() {
      try {
        const response = await axios.post('/extensions/upload', {
          name: this.name,
          version: this.version,
          description: this.description,
          createdBy: this.createdBy,
        });
        alert(`Extension uploaded with ID: ${response.data.id}`);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
