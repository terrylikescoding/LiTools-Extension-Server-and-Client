<template>
  <div class="container">
    <h2>插件市场</h2>
    <div class="search-container">
      <SearchBox class="searchbox" :search-placeholder="searchBoxPlaceholder" :search-call-back="filterExtensions"
        :search-model="searchQuery" @update:search-model="searchQuery = $event" />
    </div>

    <!-- 卡片父容器 -->
    <div class="card-container">
      <div v-for="extension in filteredExtensions" :key="extension.id">
        <ExtensionInfoCard :extension="extension" />
      </div>
    </div>

    <!-- 页码 -->
    <PageNumber :current-page="page" :total-pages="totalPages" @go-to-page="goToPage" />
  </div>
</template>

<script>
import axios from "axios";
import PageNumber from "@/components/PageNumber.vue";
import ExtensionInfoCard from "@/components/ExtensionInfoCard.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  components: {
    PageNumber,
    ExtensionInfoCard,
    SearchBox
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      extensions: [],
      searchQuery: "",
      totalPages: null, // 初始化为 null
      searchBoxPlaceholder: "搜索插件..."
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
    this.getTotalPages();
  },
  methods: {
    fetchExtensions() {
      axios
        .get(
          `http://localhost:3000/extensions?page=${this.page}&pageSize=${this.pageSize}`
        )
        .then((response) => {
          this.extensions = response.data.extensions;
          // testing 添加评分等
          for (let e of this.extensions) {
            // e['rating'] = 4.5
            e.rating = 4.5
            e.isNew = true
            e.iconUrl = "https://plugins.jetbrains.com/files/10037/332761/icon/pluginIcon.svg"
            // e.isUpdated = true
            console.log(e);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getTotalPages() {
      try {
        const result = await axios.get("http://localhost:3000/extensions/count");
        const totalExtensions = result.data.count;
        console.log('result.data.count=', totalExtensions);
        this.totalPages = Math.ceil(totalExtensions / this.pageSize);
      } catch (error) {
        console.error(error);
        this.totalPages = 1; // 如果获取总数失败则设置为默认值
      }
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
  max-width: 1200px;
  margin: auto;
}

.search-container {
  margin-bottom: 20px;
 
}

.searchbox{
  border: 1px solid #0077cc;
  width: 60%;
  margin: 0 auto;
  padding: 0;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 5px;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 480px) {
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