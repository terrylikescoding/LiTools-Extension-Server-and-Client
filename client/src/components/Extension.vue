<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <p>Latest version: {{ version }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      version: '',
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`/extensions/${this.$route.params.id}/version`);
      this.version = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
