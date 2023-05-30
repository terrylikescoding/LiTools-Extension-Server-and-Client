<template>
    <div class="page-number">
      <span>Jump to page:</span>
      <input type="number" :min="1" :max="totalPages" v-model.number="jumpToPage">
      <button @click="goToPage">Go</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        jumpToPage: this.currentPage,
      };
    },
    methods: {
        goToPage() {
      console.log('goToPage() clicked with jumpToPage:', this.jumpToPage);
      if (this.jumpToPage >= 1 && this.jumpToPage <= this.totalPages) {
        this.$emit('go-to-page', this.jumpToPage);
        console.log('Emitted go-to-page event with page:', this.jumpToPage);
      } else {
        this.jumpToPage = this.currentPage;
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .page-number {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  input[type='number'] {
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
  