<template>
  <div>
    <h1>{{ extension.name }}</h1>
    <p><strong>Version:</strong> {{ extension.version }}</p>
    <p>{{ extension.description }}</p>
    <p><strong>Created By:</strong> {{ extension.createdBy }}</p>
    <p><strong>Created At:</strong> {{ extension.createdAt }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Extension',
  props: ['id'],
  data() {
    return {
      extension: {},
    };
  },
  created() {
    // Debugging
    debugger;

    // Fetch extension data from API
    axios.get(`http://localhost:3000/extensions/${this.id}`)
      .then((response) => {
        this.extension = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
