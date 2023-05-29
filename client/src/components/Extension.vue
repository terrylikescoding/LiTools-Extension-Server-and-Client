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
      extensions: [],
    };
  },
  created() {
    // Fetch extensions data from API
    axios.get('http://localhost:3000/extensions')
      .then((response) => {
        this.extensions = response.data;
        
        // Find extension object matching given ID prop
        this.extension = this.extensions.find((e) => e.id === parseInt(this.id));
        debugger
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
