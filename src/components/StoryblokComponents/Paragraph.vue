<script setup>
import { renderRichText } from "@storyblok/vue";
import { computed } from "vue";

const props = defineProps({ blok: Object });


const articleContent = computed(() => renderRichText(props.blok.text).replace(/<p><\/p>/g, "<br/>"));
</script>

<template>
  <div v-editable="blok" class="py-2 my-3">
    <p :class="`text-${blok.color}`" v-html="articleContent"></p>
  </div>
</template>
