<script setup>
import { useStoryblok } from '@storyblok/vue';
import { useRoute } from 'vue-router'
import {onMounted, ref} from "vue";

const route = useRoute()
const blogId = ref(null)
const story = ref(null);

onMounted(async () => {
  blogId.value = route.params.id
  story.value = await useStoryblok(`spectrumblogs/${blogId.value}`, { version: 'draft' });
})
</script>

<template>
  <StoryblokComponent class="blog" v-if="story" :blok="story.value.content" />
</template>

<style scoped lang="scss">
  .blog {
    max-width: 680px;
    margin: 0 auto;
  }
</style>