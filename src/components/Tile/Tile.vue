<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "Tile"
})
</script>

<template>
  <div class="tile">
    <div class="tile__header">
      <slot name="header"></slot>
    </div>
    <div class="tile__content">
      <slot name="content"></slot>
    </div>
    <div class="tile__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "Tile.scss";
</style>