<template>
  <div class="blog-home-editor">
    <div class="blog-home-editor__preview" v-html="preview" />
    <div class="blog-home-editor__editor">
      <QuillEditor :content="preview" content-type='html' ref="quillEditor" toolbar="full" theme="snow" placeholder="Blog..." />
    </div>
    <div class="blog-home-editor__control">
      <Button @click="isModalOpen = true">Save</Button>
      <Button @click="previewUpdate()">Preview</Button>
    </div>
    <Modal :open="isModalOpen">
      <form @submit="publishBlog" class="blog-home-editor__modal">
        <div class="blog-home-editor__modal--info">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title" required/>
          <label for="description">Description</label>
          <input type="text" id="description" v-model="description" required/>
          <label for="author">Author</label>
          <input type="text" id="author" v-model="author" required/>
        </div>
        <div class="blog-home-editor__modal--control">
          <input class="sumbit" type="submit" value="Publish" />
          <Button @click="isModalOpen = false">Cancel</Button>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script lang="ts">

import {QuillEditor} from "@vueup/vue-quill";
import Button from "../../components/Button/Button.vue";
import Modal from "../../components/Modal/Modal.vue";
import {app, credentials} from "../../utils/mongo.client.ts";

export default {
  name: "blog-homeEditor",
  components: {Modal, Button, QuillEditor},
  data() {
    return {
      preview: "<h1>Preview</h1>",
      isModalOpen: false,
      title: "",
      author: "",
      description: "",
    }
  },
  methods: {
    previewUpdate() {
      //@ts-ignore
      console.log(this.$refs.quillEditor.getHTML());
      this.preview = this.$refs.quillEditor.getHTML();
    },
    async publishBlog(event: Event) {
      event.preventDefault();
      this.previewUpdate();
      const db = await app.logIn(credentials);
      if (this.$route.query.id) {
        console.log('editing blog');
        await db.functions.editBlog(
            this.$route.query.id,
            this.title,
            this.description,
            this.author,
            this.preview
        )
        console.log('edited blog');
      } else {
        console.log('adding blog');
        await db.functions.createBlog(
            this.title,
            this.description,
            this.author,
            this.preview
        );
      }
      this.isModalOpen = false;
    },
    async getBlog() {
      console.log('getting blog');
      const db = await app.logIn(credentials);
      const blog = await db.functions.getBlogById(this.$route.query.id);
      this.title = blog.title;
      this.description = blog.description;
      this.author = blog.author;
      this.preview = blog.content;
    }
  },
  beforeMount() {
    if(this.$route.query.id) {
      this.getBlog();
    }
  },
}
</script>

<style scoped lang="scss">
  .blog-home-editor {
    display: flex;
    flex-direction: column;
    gap: $spacing--22;
    margin: $spacing--11;


    &__preview{
      border: 1px solid $color--white;
      padding: $spacing--11;
      min-height: 300px;
    }

    &__control {
      display: flex;
      gap: $spacing--11;
    }
  }

  .sumbit {
    background-color: $color--purple;
    color: $color--orange;
    border: none;
    padding: $spacing--11 $spacing--22;
    cursor: pointer;
    border-radius: 16px;
    transition: all .3s;
    overflow: hidden;

    &:hover {
      background-color: $color--orange;
      color: $color--purple;
    }
  }

  .blog-home-editor__modal {
    color: $color--black;
    display: flex;
    flex-direction: column;
    gap: $spacing--33;

    input {
      border: 2px solid $color--black;
      padding: $spacing--11;
      border-radius: 20px;

      &:focus {
        outline: none;
        border-color: $color--orange;
      }
    }

    label {
      font-size: 20px;
    }

    &--info {
      display: flex;
      flex-direction: column;
      gap: $spacing--11;
    }

    &--control {
      display: flex;
      gap: $spacing--11;
    }
  }
</style>