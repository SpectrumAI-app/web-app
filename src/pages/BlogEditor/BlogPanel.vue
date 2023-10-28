<template>
  <div class="blog-editor">
    <h3>Our Blogs</h3>
    <div class="blog-editor__blog-home">
      <div class="blog-editor__blog blog-editor__blog--new">
        <Link to="/new">
          <template #appendIcon>
            <Icon :icon="['fas', 'plus']" />
          </template>
        </Link>
      </div>
      <div class="blog-editor__blog" v-for="blog in blogs">
        <Tile>
          <template #header>
            <img :src="blog.header" />
          </template>
          <template #content>
            <p>{{blog.content}}</p>
          </template>
          <template #footer>
            <div class="blog-editor__tile--footer">
              <Button>{{ blog.footer }}</Button>
              <Button>Delete</Button>
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
import Link from "../../components/Link/Link.vue";

export default {

  name: "BlogEditor",
  components: {Link, Button, Tile},
  data(){
    return {
      blogs: [
        {
          header: "https://placehold.co/350x350",
          content: "Short info",
          footer: "Edit Blog"
        },
        {
          header: "https://placehold.co/350x350",
          content: "Short info",
          footer: "Edit Blog"
        },
        {
          header: "https://placehold.co/350x350",
          content: "Short info",
          footer: "Edit Blog"
        },
        {
          header: "https://placehold.co/350x350",
          content: "Short info",
          footer: "Edit Blog"
        }
      ]
    }
  }

}
</script>

<style scoped lang="scss">
.blog-editor{
  &__blog-home {
    display: flex;
    gap: $spacing--11;
    flex-wrap: wrap;
  }

  &__blog {
    width: 400px;
    height: 500px;
    background-color: $color__white;
    color: $color__black;

    &--new {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__tile--footer {
    display: flex;
    gap: $spacing--11;
  }
}
</style>