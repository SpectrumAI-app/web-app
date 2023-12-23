<script setup lang="ts">

import Tile from "../TileBase/Tile.vue";
import Link from "../../Link/Link.vue";

// PROPS

const props = defineProps({
  img: {
    type: String,
    default: "https://placehold.co/287x192",
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  likes: {
    type: Number,
    default: 0,
  },
  timeToRead: {
    type: Number,
    default: 0,
  },
  to: {
    type: String,
    default: null,
  },
});

</script>

<template>
  <Tile class="blog-tile">
    <template #header>
      <img :src="props.img" />
    </template>
    <template #content>
      <div class="blog-tile__content">
        <h3>
          <Link :to="props?.to">{{props.title}}</Link>
        </h3>
        <p>
          {{props.description}}
        </p>
      </div>
    </template>
    <template #footer>
      <div class="blog-tile__footer">
        <div class="blog-tile__footer__panel">
          <Icon :icon="['fas', 'plus']" />
          {{ props.timeToRead }} min read
        </div>
        <div class="blog-tile__footer__panel">
          <Icon :icon="['fas', 'plus']" />
          {{ props.likes }}
        </div>
      </div>
    </template>
  </Tile>
</template>

<style scoped lang="scss">
 @import "BlogTile.scss";
</style>