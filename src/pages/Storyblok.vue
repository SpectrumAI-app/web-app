<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('spectrumblogs/testblog', { version: 'draft' });

</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>