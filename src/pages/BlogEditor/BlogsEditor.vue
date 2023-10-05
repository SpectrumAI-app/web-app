<template>
  <div class="blogs-editor">
    <QuillEditor />
  </div>
</template>

<script lang="ts">

import {QuillEditor} from "@vueup/vue-quill";

export default {
  name: "BlogsEditor",
  components: {QuillEditor}
}
</script>

<style scoped lang="scss">

</style>