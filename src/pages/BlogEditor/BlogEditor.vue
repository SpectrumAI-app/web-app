<template>
  <div class="blog-home-editor">
    <div class="blog-home-editor__preview" v-html="preview" />
    <div class="blog-home-editor__editor">
      <QuillEditor ref="quillEditor" toolbar="full" theme="snow" placeholder="Blog..." />
    </div>
    <div class="blog-home-editor__control">
      <Button @click="save()">Save</Button>
      <Button @click="save()">Preview</Button>
    </div>
  </div>
</template>

<script lang="ts">

import {QuillEditor} from "@vueup/vue-quill";
import Button from "../../components/Button/Button.vue";

export default {
  name: "blog-homeEditor",
  components: {Button, QuillEditor},
  data() {
    return {
      preview: "<h1>Preview</h1>"
    }
  },
  methods: {
    save() {
      //@ts-ignore
      this.preview = this.$refs.quillEditor.getHTML();
      // TODO: save to db
      // TODO: blog preview tile setup
    }
  }
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
</style>