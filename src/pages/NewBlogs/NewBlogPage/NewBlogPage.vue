<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {Blog} from "../../../utils/types/blog.ts";
import {app, credentials} from "../../../utils/mongo.client.ts";
import {useRoute} from "vue-router";

const blog = ref<Blog | null>();
const route = useRoute();

const getBlog = async () => {
  console.log('getting blog');
  const db = await app.logIn(credentials);
  blog.value = await db.functions.getBlogById(route.query.id);
}

onBeforeMount(() => {
  console.log('before mount');
  getBlog();
});

</script>

<template>
  <div class="blog-page">
    <div class="blog-page__header">
      <h1>{{blog?.title}}</h1>
      <h2>Author: {{blog?.author}}</h2>
    </div>
    <div class="blog-page__content" v-html="blog?.content"/>
  </div>
</template>

<style scoped lang="scss">
  @import "NewBlogPage.scss";
</style>