<template>
  <div>
    <h1>Extension List</h1>
    <ul>
      <li v-for="extension in extensions" :key="extension.id">
        <router-link :to="{ name: 'extension', params: { id: extension.id } }">{{ extension.name }}</router-link>
      </li>
    </ul>
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
        const response = await axios.get('/extensions');
        this.extensions = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

