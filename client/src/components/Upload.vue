<template>
  <div class="container">
    <h3>上传扩展</h3>
    <form @submit.prevent="uploadExtension">
      <div class="form-group">
        <label for="name">名称:</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="version">版本号:</label>
        <input type="text" class="form-control" id="version" v-model="version">
      </div>
      <div class="form-group">
        <label for="description">描述:</label>
        <textarea class="form-control" id="description" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <label for="file">上传扩展:</label>
        <div class="dropzone border p-2" v-bind:class="{ 'drag-over': isDragging }"
             @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
             @drop.prevent="handleDrop($event)">
          <div v-if="!selectedFile">
            将文件拖放到此处，或点击此处选择要上传的文件。
          </div>
          <div v-else>
            <strong>已选择文件:</strong> {{ selectedFile.name }}
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">上传</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      version: '',
      description: '',
      selectedFile: null,
      isDragging: false,
    };
  },
  methods: {
    handleDrop(event) {
      this.selectedFile = event.dataTransfer.files[0];
      this.isDragging = false;
    },
    async uploadExtension() {
      // TODO: 实现上传扩展的逻辑
    },
  },
};
</script>

<style>
.dropzone {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.drag-over {
  border-color: blue;
}
</style>
