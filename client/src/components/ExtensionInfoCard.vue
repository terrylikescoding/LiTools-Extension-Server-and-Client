<template>
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ extension.name }}</h5>
        <p class="card-text">{{ extension.description }}</p>
        <a :href="`mailto:${extension.authorEmail}`" class="btn btn-primary">Contact Author</a>
        <router-link :to="`/extensions/${extension.id}`" class="btn btn-outline-primary ml-2">View Details</router-link>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <div class="text-muted">
          <span class="mr-2">
            <i class="fa fa-download"></i> {{ extension.downloads }} downloads
          </span>
          <span v-if="typeof extension.rating !== 'undefined'">
            <i class="fa fa-star"></i> {{ extension.rating.toFixed(1) }}
          </span>
        </div>
        <div>
          <span class="badge badge-success">{{ extension.type }}</span>
          <span v-if="extension.isNew" class="badge badge-warning ml-1">New</span>
          <span v-if="extension.isUpdated" class="badge badge-warning ml-1">Updated</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExtensionInfoCard',
    props: {
      extension: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: none;
    transition: box-shadow 0.3s ease;
  }
  
  .card:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  
  .btn-outline-primary {
    color: #007bff;
    border-color: #007bff;
  }
  
  .btn-outline-primary:hover {
    background-color: #007bff;
    color: #fff;
  }
  
  .badge-success {
    background-color: #28a745;
  }
  
  .badge-warning {
    background-color: #ffc107;
  }
  
  .text-muted {
    font-size: 12px;
  }
  </style>
  