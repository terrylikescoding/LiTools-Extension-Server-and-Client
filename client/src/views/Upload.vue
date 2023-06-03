<template>
  <div class="container">
    <h3>上传扩展</h3>
    <form @submit.prevent="uploadExtension">
      <div class="form-group">
        <label for="name">名称:</label>
        <input type="text" class="form-control" id="name" v-model="name" style="width:200px;">
      </div>
      <div class="form-group">
        <label for="version">版本号:</label>
        <input type="text" class="form-control" id="version" v-model="version" style="width:200px;">
      </div>
      <div class="form-group">
        <label for="description">描述:</label>
        <textarea class="form-control" id="description" v-model="description" style="width:300px;"></textarea>
      </div>
      <div class="form-group">
        <label for="category">类别:</label>
        <select class="form-control" id="category" v-model="category" style="width:200px;">
          <option value="AcbsTools">AcbsTools</option>
          <option value="Formatters">Formatters</option>
          <option value="Other">Other</option>
          <option value="Http Tools">Http Tools</option>
          <option value="Code Testers">Code Testers</option>
          <option value="Sql Tools">Sql Tools</option>
        </select>
      </div>
      <div class="form-group">
        <label for="file">上传扩展:</label>
        <div class="row">
          <div class="col-md-6">
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
          <div class="col-md-6">
            <div class="form-group">
              <label for="image">插图:</label>
              <input type="file" class="form-control-file" id="image" @change="handleImageSelect">
              <img :src="imageUrl" v-if="imageUrl" style="max-width: 200px; max-height: 200px;">
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="releaseLog">发布日志:</label>
        <textarea class="form-control" id="releaseLog" v-model="releaseLog" style="width:300px;"></textarea>
      </div>
      <div class="form-group">
        <label for="sourceCodeUrl">源代码 URL:</label>
        <input type="text" class="form-control" id="sourceCodeUrl" v-model="sourceCodeUrl" style="width:300px;">
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
      category: 'AcbsTools',
      selectedFile: null,
      isDragging: false,
      imageFile: null,
      imageUrl: null,
      releaseLog: '',
      sourceCodeUrl: '',
    };
  },
  methods: {
    handleDrop(event) {
      this.selectedFile = event.dataTransfer.files[0];
      this.isDragging = false;
    },
    handleImageSelect(event) {
      this.imageFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.imageFile);
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
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.drag-over {
  border-color: blue;
}
.container {
  margin-top: 20px;
}
.form-group {
  margin-bottom: 10px;
}
</style>
