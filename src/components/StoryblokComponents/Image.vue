<script setup>
defineProps({ blok: Object })

</script>

<template>
  <div v-editable="blok" class="grid py-2">
    <img :class="`${blok.imageSize} ${blok.position}`" :src="blok.file.filename" alt="image" />
  </div>
</template>