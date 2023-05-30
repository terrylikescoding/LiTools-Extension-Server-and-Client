<template>
  <div class="container">
    <h1>Extensions</h1>
    <div class="search-container">
      <input type="text" placeholder="Search extensions..." v-model="searchQuery" @input="filterExtensions">
    </div>
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
    <div class="pagination-container">
      <button v-if="page > 1" @click="previousPage">Previous Page</button>
      <button v-if="extensions.length === pageSize" @click="nextPage">Next Page</button>
    </div>
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
.container {
  max-width: 960px;
  margin: auto;
}

.search-container {
  margin-bottom: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.05);
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

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 480px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
