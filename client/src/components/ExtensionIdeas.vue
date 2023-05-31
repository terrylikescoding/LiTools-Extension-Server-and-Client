<template>
    <div class="container my-5">
      <h1 class="mb-4">JetBrains Plugin Ideas</h1>
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title mb-3">Sort by</h5>
              <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="sortby" id="sortby-votes" v-model="sortBy" value="votes">
                <label class="form-check-label" for="sortby-votes">
                  Votes
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="sortby" id="sortby-date" v-model="sortBy" value="date">
                <label class="form-check-label" for="sortby-date">
                  Date Created
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="sortby" id="sortby-comments" v-model="sortBy" value="comments">
                <label class="form-check-label" for="sortby-comments">
                  Comments
                </label>
              </div>
              <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="sortby" id="sortby-rating" v-model="sortBy" value="rating">
                <label class="form-check-label" for="sortby-rating">
                  Rating
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for plugin ideas..." v-model="searchQuery">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click.prevent="searchForIdeas()">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-6 text-muted" v-if="searchResults === null">{{ sortedIdeas.length }} Results</div>
            <div class="col-sm-6 text-right" v-if="searchResults === null">Sort by: {{ sortBy }}</div>
            <div class="col-sm-6 text-muted" v-else>{{ searchResults.length }} Results</div>
          </div>
          <div class="list-group mb-4" v-if="searchResults === null">
            <div class="list-group-item list-group-item-action flex-column align-items-start border-0 shadow-sm" v-for="(idea, index) in sortedIdeas" :key="index"
              @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = null">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ idea.title }}</h5>
                <small class="text-muted">{{ idea.date }}</small>
              </div>
              <p class="mb-1">{{ idea.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ idea.votes }} votes</small>
                <div class="d-flex align-items-center" :class="{ active: hoveredIndex === index }">
                  <i class="fas fa-thumbs-up mr-1"></i>
                  <span>{{ idea.votes }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="list-group mb-4" v-else>
            <div class="list-group-item list-group-item-action flex-column align-items-start border-0 shadow-sm" v-for="(idea, index) in searchResults" :key="index"
              @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = null">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ idea.title }}</h5>
                <small class="text-muted">{{ idea.date }}</small>
              </div>
              <p class="mb-1">{{ idea.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">{{ idea.votes }} votes</small>
                <div class="d-flex align-items-center" :class="{ active: hoveredIndex === index }">
                  <i class="fas fa-thumbs-up mr-1"></i>
                  <span>{{ idea.votes }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sortBy: "votes",
        ideas: [
          {
            title: "Incremental search and replace in path",
            description: "A plugin for incremental search and replace of text within a directory (including subdirectories).",
            votes: 7,
            date: "Jan 11, 2019"
          },
          {
            title: "Workspace view for JetBrains",
            description: "A clean and simple workspace view for JetBrains IDEs that supports project grouping, bookmarks, etc.",
            votes: 10,
            date: "Mar 22, 2019"
          },
          {
            title: "IntelliJ IDEA Plugins for .gitignore",
            description: "A set of IntelliJ IDEA plugins that make it easy to add files or directories to your .gitignore file.",
            votes: 3,
            date: "Jul 27, 2020"
          },
          {
            title: "Native File System API Support",
            description: "Add support for the Native File System API in JetBrains IDEs to allow access to local files.",
            votes: 14,
            date: "Jun 17, 2020"
          },
          {
            title: "Emmet-like abbreviations for Kotlin",
            description: "A plugin that provides Emmet-like abbreviations for Kotlin, including formatting and syntax highlighting.",
            votes: 6,
            date: "Dec 29, 2020"
          },
          {
            title: "Auto-format Java code",
            description: "A plugin that automatically formats Java code based on a set of configurable rules and best practices.",
            votes: 9,
            date: "Mar 12, 2021"
          }
        ],
        hoveredIndex: null,
        searchQuery: "",
        searchResults: null
      }
    },
    computed: {
      sortedIdeas() {
        if (this.searchResults) {
          return this.searchResults;
        } else {
          if (this.sortBy === "votes") {
            return this.ideas.sort((a, b) => b.votes - a.votes);
          } else if (this.sortBy === "date") {
            return this.ideas.sort((a, b) => new Date(b.date.split(", ")[1], this.getMonthIndex(b.date.split(", ")[0])) - new Date(a.date.split(", ")[1], this.getMonthIndex(a.date.split(", ")[0])));
          } else if (this.sortBy === "comments") {
            return this.ideas.sort((a, b) => 0); // replace 0 with the appropriate sorting logic
          } else if (this.sortBy === "rating") {
            return this.ideas.sort((a, b) => 0); // replace 0 with the appropriate sorting logic
          }
        }
      }
    },
    methods: {
      getMonthIndex(month) {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months.indexOf(month);
      },
      searchForIdeas() {
        if (this.searchQuery.length > 0) {
          let query = this.searchQuery.toLowerCase();
          this.searchResults = this.ideas.filter(idea =>
            idea.title.toLowerCase().includes(query) || idea.description.toLowerCase().includes(query)
          );
        } else {
          this.searchResults = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .list-group {
    background-color: #f3f4f5;
  }
  
  .list-group-item {
    border-color: #d8dde6 !important;
  }
  
  .list-group-item.active,
  .list-group-item-action:focus {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
  }
  
  .list-group-item.active .text-muted,
  .list-group-item-action:focus .text-muted {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .list-group-item.active .fa-thumbs-up,
  .list-group-item-action:focus .fa-thumbs-up {
    color: #fff;
  }
  
  .card .active .fa-thumbs-up {
    color: #007bff;
  }
  .active span {
    color: #007bff;
  }
  
  .list-group-item:hover {
    background-color: #fff;
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
  
  @media (min-width: 576px) {
    .col-md-9 .card {
      display: flex;
      align-items: center;
    }
  }
  
  .input-group-append {
    height: 38px;
  }
  
  .form-control {
    border-radius: 0;
    border-right: none;
  }
  
  .btn-outline-secondary {
    border-color: #ced4da;
    border-left: none;
    border-radius: 0;
  }
  .btn-outline-secondary:hover {
    background-color: #f8f9fa;
  }
  </style>
  