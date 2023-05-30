<template>
  <div>
    <h1>Extensions</h1>
    <input type="text" placeholder="Search extensions..." v-model="searchQuery" @input="filterExtensions">
    <div class="card-container">
      <div v-for="extension in filteredExtensions" :key="extension.id" class="card">
        <div class="card-header">{{ extension.name }}</div>
        <div class="card-content">
          <p>{{ extension.description }}</p>
          <p>Version: {{ extension.version }}</p>
          <p>Created by: {{ extension.createdBy }}</p>
          <p>Created at: {{ extension.createdAt }}</p>
        </div>
      </div>
    </div>
    <button v-if="page > 1" @click="previousPage">Previous Page</button>
    <button v-if="extensions.length === pageSize" @click="nextPage">Next Page</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      extensions: [],
      searchQuery: '',
    };
  },
  computed: {
    filteredExtensions() {
      return this.extensions.filter((extension) => {
        const query = this.searchQuery.toLowerCase();
        return (
          extension.name.toLowerCase().includes(query) ||
          extension.description.toLowerCase().includes(query) ||
          extension.createdBy.toLowerCase().includes(query)
        );
      });
    },
  },
  mounted() {
    this.fetchExtensions();
  },
  methods: {
    fetchExtensions() {
      axios
        .get(`http://localhost:3000/extensions?page=${this.page}&pageSize=${this.pageSize}`)
        .then((response) => {
          this.extensions = response.data.extensions;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    nextPage() {
      this.page++;
      this.fetchExtensions();
    },
    previousPage() {
      this.page--;
      this.fetchExtensions();
    },
    filterExtensions() {
      this.page = 1;
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.card-header {
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.card-content {
  padding: 10px;
}
</style>
