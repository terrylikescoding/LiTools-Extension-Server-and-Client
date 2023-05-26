<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/upload">Upload Extension</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
