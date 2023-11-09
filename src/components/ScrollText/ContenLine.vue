<script setup lang="ts">
  import {ref} from "vue";
  import { useScroll } from '@vueuse/core'

  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  });
  const contentRef = ref<HTMLElement | null>(null);
  const { arrivedState } = useScroll(contentRef);
</script>

<template>
  <span class="content-line" ref="contentRef">
    <span class="content-line__text--highlight" :data-text="props.content" />
    <span class="content-line__text--static">
      {{props.content}}
    </span>
  </span>
</template>

<style scoped lang="scss">
  .content-line {
    position: relative;
    overflow: hidden;
    display: block;

    &__text {
      &--highlight {
        &:before {
          content: attr(data-text);
          display: inline-block;
          opacity: .8;
        }

        color: white;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 0;
        transition: clip-path 0.1s ease;
        text-shadow: 0 0 0 white;
        position: absolute;
        font-size: 60px;
      }

      &--static {
        font-size: 60px;
        color: red;
      }

    }
  }
</style>