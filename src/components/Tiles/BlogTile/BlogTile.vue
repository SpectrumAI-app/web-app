<script setup>
import {computed} from "vue";
import Link from "../../Link/Link.vue";

const props = defineProps({ blok: Object })


const to = computed(() => {
  // make slug from title
  return `blogs/${props.blok.title.toLowerCase().split(' ').join('-')}`
});
</script>

<template>
  <div v-editable="blok" class="blog-tile">
    <div class="blog-tile__image">
      <img :src="props.blok.img.filename" />
    </div>
    <div class="blog-tile__content">
      <h3 class="blog-tile__title">
        <Link :to="to">{{props.blok.title}}</Link>
      </h3>
      <p class="blog-tile__description">
        {{props.blok.description}}
      </p>
    </div>
    <div class="blog-tile__footer">
      <Icon :icon="['fas', 'plus']" />
      {{ props.blok.timeToRead }} min read
    </div>
  </div>
</template>

<style scoped lang="scss">
 @import "BlogTile.scss";
</style>