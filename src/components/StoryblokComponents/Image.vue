<script setup>
defineProps({ blok: Object })

</script>

<template>
  <div v-editable="blok" class="image py-2">
    <img
        :class="`image__${blok.position}`"
        :src="blok.file.filename"
        :style="`width: ${blok.width}px; height: ${blok.height}px;`"
        alt="image" />
  </div>
</template>


<style lang="scss">
  .image {
    display: grid;

    &__start {
      place-self: start;
    }

    &__center {
      place-self: center;
    }

    &__end {
      place-self: end;
    }
  }
</style>

