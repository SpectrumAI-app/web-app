<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div class="blog-grid">
    <StoryblokComponent
          v-for="blogs in blok.blogs"
          :blok="blogs"
          :key="blogs._uid"
      />
  </div>
</template>

<style scoped lang="scss">
  @import "BlogGrid.scss";
</style>