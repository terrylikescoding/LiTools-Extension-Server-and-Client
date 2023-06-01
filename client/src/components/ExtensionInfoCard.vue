<template>
   <div class="card" @click="$router.push(`/extensions/${extension.id}`)">
    <img :src="extension.iconUrl" alt="" />
    <div class="info">
      <h2>{{ extension.name }}</h2>
      <p>{{ extension.description }}</p>
      <div class="created-by">Created by {{ extension.createdBy }}</div>
      <div class="rating">
        <span>{{ extension.rating }}</span> ★
      </div>
    </div>
    <div v-if="extension.isUpdated" class="tag updated">Updated</div>
    <div v-if="extension.isNew" class="tag new">New</div>
  </div>
</template>
    
    <script>
export default {
  props: {
    extension: {
      type: Object,
      required: true,
    },
  },
};
</script>
    
    <style scoped>
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  border: transparent 2px solid;
}

.card:hover {
  cursor: pointer;
  border: #666 2px solid;
}


.card img {
  display: block;
  height: 80px;
  margin-right: 20px;
  object-fit: cover;
  width: 80px;
}

.card .info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: calc(100% - 120px);
}

.card h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  line-height: 1.2;
  margin-bottom: 10px;
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card .created-by {
  color: #666;
  font-size: 0.8rem;
}

.card .rating {
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  margin-top: 10px;
}

.card .rating span {
  margin-right: 5px;
}

.tag {
  border-radius: 5px;
  color: #fff;
  font-size: 0.7rem;
  padding: 3px 5px;
  text-transform: uppercase;
}

.tag.new {
  background-color: #31c51e;
}

.tag.updated {
  background-color: #f89820;
}

.updated,
.new {
  position: absolute;
  right: 10px;
  top: 10px;
}

.btn {
  /* ... */
  padding: 8px 16px; /* 将 padding 缩小 */
  font-size: 14px; /* 将字体大小缩小 */
}
</style>