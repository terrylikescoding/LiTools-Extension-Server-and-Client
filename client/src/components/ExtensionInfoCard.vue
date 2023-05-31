<template>
  <div class="card">
    <div class="card-header">{{ name }}</div>
    <div class="card-content">
      <p>{{ description }}</p>
      <p>Version: {{ version }}</p>
      <p>Created by: {{ Author }}</p>
      <p>Created at: {{ createTime }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "ExtensionInfoCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createTime: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    //   添加评分，下载量
  },
  data() {
    return {
      extension: {},
    };
  },
};
</script>

<style scoped>
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


@media screen and (max-width: 480px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>

