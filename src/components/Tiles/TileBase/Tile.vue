<script setup lang="ts">
</script>

<template>
  <div class="tile">
    <div class="tile__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="tile__content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="tile__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "Tile";
</style>