<script setup lang="ts">

import BlogTile from "../../components/Tiles/BlogTile/BlogTile.vue";
</script>

<template>
  <div class="blogs-home">
    <div class="blogs-home__header">
      <h1>Blogs</h1>
      <h2>Explore more</h2>
    </div>
    <div class="blogs-home__wrapper">
      <!-- @vue-ignore -->
      <BlogTile v-for="n in 20" title="Blog 1" description="Description 1" to="/blogs/1"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "NewBlogs.scss";
</style>