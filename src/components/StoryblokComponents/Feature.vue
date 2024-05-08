<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="py-2">
    <component :is="blok.type" :class="blok.color">{{ blok.name }}</component>
  </div>
</template>