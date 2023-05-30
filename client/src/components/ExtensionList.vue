<template>
  <div>
    <h1>Extensions</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>Description</th>
          <th>Created By</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="extension in extensions" :key="extension.id">
          <td>{{ extension.name }}</td>
          <td>{{ extension.version }}</td>
          <td>{{ extension.description }}</td>
          <td>{{ extension.createdBy }}</td>
          <td>{{ extension.createdAt }}</td>
          <td>{{ extension.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
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
    };
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
          debugger;
          console.log('this.extensions ==>',this.extensions.length);
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
  },
};
</script>
