<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();

const props = defineProps({ blok: Object })


const to = computed(() => {
  // make slug from title
  // remove special characters
  return `blogs/${props.blok.title.toLowerCase().split(' ').join('-').replace(/[^\w\s-]/gi, '')}`
});
</script>

<template>
  <router-link :to="to" v-editable="blok" class="blog-tile">
    <div class="blog-tile__image">
      <img :src="props.blok.img.filename" />
    </div>
    <div class="blog-tile__content">
      <h3 class="blog-tile__title">
        {{props.blok.title}}
      </h3>
      <p class="blog-tile__description">
        {{props.blok.description}}
      </p>
    </div>
    <div class="blog-tile__footer">
      <Icon :icon="['fas', 'plus']" />
      {{ props.blok.timeToRead }} min read
    </div>
  </router-link>
</template>

<style scoped lang="scss">
 @import "BlogTile.scss";
</style>