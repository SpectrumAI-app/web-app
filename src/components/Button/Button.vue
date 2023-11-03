<script setup lang="ts">

</script>

<template>
  <div class="button">
    <div class="button__prependIcon" v-if="$slots.prependIcon">
      <slot name="prependIcon"></slot>
    </div>
    <div class="button__content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="button__appendIcon" v-if="$slots.appendIcon">
      <slot name="appendIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "Button.scss";
</style>