<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('spectrumblogs/blogs', { version: 'draft' });

</script>

<template>
  <StoryblokComponent class="blogs-home" v-if="story" :blok="story.content" />
</template>

<style scoped lang="scss">
  .blogs-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--secondary-color);
  }
</style>