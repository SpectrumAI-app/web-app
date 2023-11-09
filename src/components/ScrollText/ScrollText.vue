<script setup lang="ts">
  import ContenLine from "./ContenLine.vue";


  // props
  const props = defineProps({
    content: {
      type: [],
      required: true
    }
  });
</script>

<template>
  <div class="outer">
    <div class="inner" v-for="line in props.content">
      <ContenLine :content="line" :key="line" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .outer {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .inner > * {
    display: inline;
    line-height: 1.3;
  }
</style>