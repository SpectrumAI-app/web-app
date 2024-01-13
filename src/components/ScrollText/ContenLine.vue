<script setup lang="ts">

  const props = defineProps({
    content: {
      type: [String],
      required: true
    },
    lineId: {
      type: Number,
      default: 0
    },
    revealedWords: {
      type: Number,
      default: 0
    }
  });
</script>

<template>
  <span class="content-line" ref="contentRef">
      <span v-for="(word, index) in props.content" :class="[
          'content-line__text',
          {'content-line__text--revealed' : (7 * lineId + index) < revealedWords},
          {'content-line__text--timer' : 16 === 7 * lineId + index}
          ]">
        {{word}}
      </span>
  </span>
</template>

<style scoped lang="scss">
  .content-line {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--11;

    &__text {
      font-size: 46px;
      color: $color__white;
      transition: opacity .2s ease-in-out;
      opacity: .1;

      &--revealed {
        transition: opacity .2s ease-in-out;
        opacity: 1;
      }

      &--timer {
        color: $color__orange;
        font-weight: bold;
      }
    }
  }
</style>