<template>
  <div class="blog-editor">
    <h3>Our Blogs</h3>
    <div class="blog-editor__blog-home">
      <div class="blog-editor__blog blog-editor__blog--new">
        <Link to="/admin-editor">
          <template #appendIcon>
            <Icon :icon="['fas', 'plus']" />
          </template>
        </Link>
      </div>
      <div class="blog-editor__blog" v-for="blog in blogs">
        <Tile class="blog-editor__tile">
          <template #header>
            <img src="https://placehold.co/350x250" />
          </template>
          <template #content>
            <h4>{{blog.title}}</h4>
            <p>{{blog.description}}</p>
          </template>
          <template #footer>
            <div class="blog-editor__tile--footer">
              <Button @click="editBlog(blog._id)">Edit</Button>
              <Button @click="deleteBlog(blog._id)">Delete</Button>
            </div>
          </template>
        </Tile>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Button from "../../components/Button/Button.vue";
import Tile from "../../components/Tiles/TileBase/Tile.vue";
import Link from "../../components/Link/Link.vue";
import {app, credentials} from "../../utils/mongo.client.ts";
import {BSON} from "realm-web";

export default {

  name: "BlogEditor",
  components: {Link, Button, Tile},
  data(){
    return {
      blogs: []
    }
  },
  methods: {
    async getBlogs() {
      console.log('getting blogs');
      const db = await app.logIn(credentials);
      this.blogs = await db.functions.getAllBlogs();
      console.log(this.blogs);
    },
    async deleteBlog(id: string) {
      console.log('deleting blog', id);
      const db = await app.logIn(credentials);
      await db.functions.deleteBlog(new BSON.ObjectID(id).toString());
      await this.getBlogs();
    },
    editBlog(id: string) {
      this.$router.push(`/admin-editor?id=${new BSON.ObjectID(id).toString()}`);
    }
  },
  beforeMount() {
    console.log('before mount');
    this.getBlogs();
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
    display: flex;
    flex-direction: column;
    width: 410px;
    height: 550px;
    background-color: $color__white;
    color: $color__black;

    &--new {
      display: flex;
      justify-content: center;
      align-items: center;

      > * {
        color: black;
        font-size: 40px;
      }
    }
  }

  &__tile {
    flex: 1;
  }

  &__tile--footer {
    display: flex;
    gap: $spacing--11;
  }
}
</style>