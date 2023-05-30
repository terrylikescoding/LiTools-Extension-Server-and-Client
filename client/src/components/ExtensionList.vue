<template>
  <div class="container">
    <h1>Extensions</h1>
    <div class="search-container">
      <input
        type="text"
        placeholder="Search extensions..."
        v-model="searchQuery"
        @input="filterExtensions"
      />
    </div>
    <div class="card-container">
      <div
        v-for="extension in filteredExtensions"
        :key="extension.id"
        class="card"
      >
        <div class="card-header">{{ extension.name }}</div>
        <div class="card-content">
          <p>{{ extension.description }}</p>
          <p>Version: {{ extension.version }}</p>
          <p>Created by: {{ extension.createdBy }}</p>
          <p>Created at: {{ extension.createdAt }}</p>
        </div>
      </div>
    </div>
    <PageNumber
      :current-page="page"
      :total-pages="totalPages"
      @go-to-page="goToPage"
    />
  </div>
</template>

<script>
import axios from "axios";
import PageNumber from "./PageNumber.vue";

export default {
  components: {
    PageNumber,
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      extensions: [],
      searchQuery: "",
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
    async totalPages() {
      try {
        this.totalPages = axios
          .get("http://localhost:3000/extensions/count")
          .then((result) => {
            const totalExtensions = result.data.count;
            const totalPages = Math.ceil(totalExtensions / this.pageSize);
            return totalPages > 0 ? totalPages : 1;
          });
      } catch (error) {
        console.error(error);
        return 1;
      }
    },
  },
  mounted() {
    this.fetchExtensions();
  },
  methods: {
    fetchExtensions() {
      axios
        .get(
          `http://localhost:3000/extensions?page=${this.page}&pageSize=${this.pageSize}`
        )
        .then((response) => {
          this.extensions = response.data.extensions;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToPage(page) {
      this.page = page;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  width: 200px;
  height: 200px;
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

@media screen and (max-width: 480px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

.page-number {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="number"] {
  width: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
