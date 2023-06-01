<!-- <template>
  <div>
    <h1>{{ extension ? extension.name : 'No name' }}</h1>
    <p>{{ extension ? extension.description : 'No description' }}</p>
    <button @click="onBack">Back to Extensions</button>
  </div>
</template>
   -->
<template>
  <div class="container">
    <div>
      <h1>{{ extension ? extension.name : 'No name' }}</h1>
      <p>{{ extension ? extension.description : 'No description' }}</p>
      <button @click="onBack">返回插件市场首页</button>
    </div>
    <br />
    <br />
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab"
          aria-controls="overview" aria-selected="true">Overview</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="version-tab" data-toggle="tab" href="#version" role="tab" aria-controls="version"
          aria-selected="false">Version</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
          aria-selected="false">Review</a>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
        <h2>Overview</h2>
        <p>{{ overview }}</p>
      </div>
      <div class="tab-pane fade" id="version" role="tabpanel" aria-labelledby="version-tab">
        <h2>Version</h2>
        <p>{{ version }}</p>
      </div>
      <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
        <h2>Review</h2>
        <p>{{ review }}</p>
      </div>
    </div>
  </div>
</template>

  
<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      extension: null,
      loading: true,
      error: null,
      overview: "This is the overview tab.",
      version: "This is the version tab.",
      review: "This is the review tab.",
    };
  },
  created() {
    // Fetch the extension details using the ID passed as a route parameter
    this.fetchExtension(this.id);
  },
  methods: {
    fetchExtension(id) {
      console.log('Fetching extension with ID:', id);
      axios.get(`http://localhost:3000/extensions/${id}`).then(response => {
        this.extension = response.data;
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.error = error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          this.error = 'Unable to connect to server';
        } else {
          // Something else happened while setting up the request
          this.error = 'An error occurred while fetching extension details';
        }
      });
    },
    onBack() {
      // Use the router to navigate back to the extensions list page
      this.$router.push({ name: 'extensionList' });
    },
  },
};
</script>
  