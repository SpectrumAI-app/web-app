<script setup lang="ts">

import TEST_BLOG from "./test.html?raw";

// methods
// TODO: add methods here
const blog =  {
    title: 'Learn English with AI',
    author: 'Ignatius Reza Lesmana',
    date: '2021-10-10',
    text: TEST_BLOG,
};

</script>

<template>
  <div class="blog-page">
    <div class="blog-page__header">
      <h1>{{blog.title}}</h1>
      <h2>Author: {{blog.author}}</h2>
      <span>{{blog.date}}</span>
    </div>
    <div class="blog-page__content" v-html="blog.text"/>
  </div>
</template>

<style scoped lang="scss">
  @import "NewBlogPage.scss";
</style>