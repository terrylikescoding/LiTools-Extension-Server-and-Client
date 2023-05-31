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
          <div class="card-columns">
            <div class="card shadow-sm mb-4" v-for="(idea, index) in sortedIdeas" :key="index"
              @mouseover="hoveredIndex = index" @mouseout="hoveredIndex = null">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title">{{ idea.title }}</h5>
                  <p class="card-text">{{ idea.description }}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center" :class="{ active: hoveredIndex === index }">
                    <i class="fas fa-thumbs-up mr-1"></i>
                    <span>{{ idea.votes }}</span>
                  </div>
                  <small class="text-muted">{{ idea.date }}</small>
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
            date: "Created on Jan 11, 2019"
          },
          {
            title: "Workspace view for JetBrains",
            description: "A clean and simple workspace view for JetBrains IDEs that supports project grouping, bookmarks, etc.",
            votes: 10,
            date: "Created on Mar 22, 2019"
          },
          {
            title: "IntelliJ IDEA Plugins for .gitignore",
            description: "A set of IntelliJ IDEA plugins that make it easy to add files or directories to your .gitignore file.",
            votes: 3,
            date: "Created on Jul 27, 2020"
          },
          {
            title: "Native File System API Support",
            description: "Add support for the Native File System API in JetBrains IDEs to allow access to local files.",
            votes: 14,
            date: "Created on Jun 17, 2020"
          },
          {
            title: "Emmet-like abbreviations for Kotlin",
            description: "A plugin that provides Emmet-like abbreviations for Kotlin, including formatting and syntax highlighting.",
            votes: 6,
            date: "Created on Dec 29, 2020"
          },
          {
            title: "Auto-format Java code",
            description: "A plugin that automatically formats Java code based on a set of configurable rules and best practices.",
            votes: 9,
            date: "Created on Mar 12, 2021"
          }
        ],
        hoveredIndex: null
      }
    },
    computed: {
      sortedIdeas() {
        if (this.sortBy === "votes") {
          return this.ideas.sort((a, b) => b.votes - a.votes);
        } else if (this.sortBy === "date") {
          return this.ideas.sort((a, b) => new Date(b.date.split(" ")[2], this.getMonthIndex(b.date.split(" ")[1])), this.getMonthIndex(b.date.split(" ")[1]), b.date.split(" ")[3]) - new Date(a.date.split(" ")[2], this.getMonthIndex(a.date.split(" ")[1]), a.date.split(" ")[3]);
        } else if (this.sortBy === "comments") {
          return this.ideas.sort((a, b) => 0); // replace 0 with the appropriate sorting logic
        } else if (this.sortBy === "rating") {
          return this.ideas.sort((a, b) => 0); // replace 0 with the appropriate sorting logic
        }
      }
    },
    methods: {
      getMonthIndex(month) {
        return new Date(Date.parse(month +" 1, 2020")).getMonth();
      }
    }
  };
  </script>
  
  <style scoped>
  .card-columns {
    column-count: 3;
  }
  
  /* Add thumb up icon before vote count */
  .card .active .fa-thumbs-up {
    color: #007bff;
  }
  .active span {
    color: #007bff;
  }
  
  /* Add hover animation */
  .card:hover {
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
  }
  </style>
  