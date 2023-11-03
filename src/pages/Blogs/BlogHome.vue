<template>
  <div class="blog-home">
    <h1 class="blog-home__header">Blog Home</h1>
    <div class="blog-home__list--trended">
      <div class="blog-home__tile--trended">
        <Tile @click="openBlog(100)">
          <template #header>
            <img src="https://placehold.co/350x250" />
          </template>
          <template #content>
            <h3>Blog title</h3>
            Some info about this blog.....
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
      <div class="blog-home__tile--trended">
        <Tile @click="openBlog(101)">
          <template #header>
            <img src="https://placehold.co/350x250" />
          </template>
          <template #content>
            <h3>Blog title</h3>
            Some info about this blog.....
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
    <div class="blog-home__list">
      <div class="blog-home__tile" v-for="(blog, index) in blogs">
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
    <!--  Load more on scroll  -->
  </div>

</template>

<script lang="ts">
  import Tile from "../../components/Tiles/TileBase/Tile.vue";
  import Button from "../../components/Button/Button.vue";

  export default {
    name: 'blog-home',
    components: {Button, Tile},
    data() {
      return {
        blogs: [
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...',
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
          {
            img: 'https://placehold.co/250x150',
            title: 'Blog 1',
            content: 'Some short info about the blog...'
          },
        ]
      }
    },
    methods: {
      openBlog(id: any) {
        this.$router.push(`/blogs/${id}`);
      }
    }
  }
</script>


<style scoped lang="scss">
  .blog-home {
    padding: 0 $spacing--22;

    &__header{
      color: $color__orange;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 0 2rem 0;

      &--trended {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 0 0 2rem 0;
      }
    }

    &__tile {
      margin: 0 0 2rem 0;
      background-color: $color__white;
      &--trended {
        background-color: $color__white;
      }

      &-panel {
        display: flex;
        align-items: center;
        gap: $spacing--5;
        justify-self: flex-end;
      }
    }

    &__load-more-btn {
      align-self: center;
    }
  }
</style>