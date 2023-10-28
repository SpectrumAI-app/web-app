<template>
<div class="blog-page">
  <div class="blog-page__content">
    <div v-html="blog.content" />
  </div>
  <div class="blog-page__blog-list">
    <div class="blog-page__tile" v-for="(blog, index) in blogs">
      <Tile @click="openBlog(index)">
        <template #header>
          <img :src="blog.img" />
        </template>
        <template #content>
          <h4>{{blog.title}}</h4>
          {{blog.content}}
        </template>
        <template #footer>
          <div class="blog-home__tile-panel">
            <Icon :icon="['fas', 'plus']" />
            3 min read
            <Icon :icon="['fas', 'plus']" />
            21
          </div>
        </template>
      </Tile>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../../components/Button/Button.vue";
import Tile from "../../components/Tile/Tile.vue";
import TEST_BLOG from "./test.html?raw";

export default {
  name: 'blog-home',
  components: {Button, Tile},
  data() {
    return {
      blog: {
        title: "Blog 1",
        content: TEST_BLOG,
      },
      blogs: [
        {
          img: 'https://placehold.co/200x100',
          title: 'Blog 1',
          content: 'Some short info about the blog...',
        },
        {
          img: 'https://placehold.co/200x100',
          title: 'Blog 2',
          content: 'Some short info about the blog...',
        },
        {
          img: 'https://placehold.co/200x100',
          title: 'Blog 3',
          content: 'Some short info about the blog...',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.blog-page {
  position: relative;
  display: flex;
  color: $color--white;
  padding: 0 $spacing--22;

  &__content {
    width: 80%;
    height: 100%;
  }
  &__blog-list {
    position: sticky;
    right: $spacing--22;
    display: flex;
    flex-direction: column;
    gap: $spacing--11;
    align-items: center;
    padding: $spacing--5;
    height: 100%;
  }

  &__tile {
    background-color: $color__white;
    color: $color__black;
  }

}
</style>