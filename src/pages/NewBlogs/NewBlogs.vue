<script setup lang="ts">

import BlogTile from "../../components/Tiles/BlogTile/BlogTile.vue";
import {app, credentials} from "../../utils/mongo.client.ts";
import {onBeforeMount, ref} from "vue";
import {Blog} from "../../utils/types/blog.ts";
import {BSON} from "realm-web";

const blogs = ref<Blog[] | []>([]);
const db = ref();

const getBlogs = async () => {
  console.log('getting blogs');
  db.value = await app.logIn(credentials);
  blogs.value = await db.value.functions.getAllBlogs();
}

onBeforeMount(() => {
  console.log('before mount');
  getBlogs();
});


</script>

<template>
  <div class="blogs-home">
    <div class="blogs-home__header">
      <h1>Blogs</h1>
      <h2>Explore more</h2>
    </div>
    <div class="blogs-home__wrapper">
      <!-- @vue-ignore -->
      <BlogTile v-for="blog in blogs" v-bind="{...blog}" :to="`/blog?id=${new BSON.ObjectID(blog._id).toString()}`" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "NewBlogs.scss";
</style>