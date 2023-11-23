<script setup lang="ts">
  import ContenLine from "./ContenLine.vue";
  import {ref, watch} from "vue";
  // @ts-ignore
  import {useWindowScroll} from "@vueuse/core/index";


  // props
  const props = defineProps({
    content: {
      type: [String],
      required: true
    }
  });

  const contentRef = ref<HTMLElement | null>(null);
  const { y } = useWindowScroll();
  const oldY = ref(y.value);
  const revealedWords = ref(0);
  const WORD_COUNT = 58;

  watch(y, () => {
    if (!contentRef.value || y < contentRef.value?.getBoundingClientRect().top) return;
    if (y >= contentRef.value.offsetTop + contentRef.value.offsetHeight) revealedWords.value = WORD_COUNT;
    if(y.value - oldY.value > 65) {
      revealedWords.value = Math.min(WORD_COUNT, revealedWords.value + 1)
      oldY.value = y.value;
    }
    if (y.value - oldY.value < -65) {
      revealedWords.value = Math.max(0, revealedWords.value - 1);
      oldY.value = y.value;
    }
  });
</script>

<template>
  <div class="scroll-text">
    <div class="outer" ref="contentRef">
      <div class="inner">
        <ContenLine v-for="(line, index) in props.content" :line-id="index" :revealedWords="revealedWords" :content="line" :key="line" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

  .scroll-text {
    height: 5000px;
    position: relative;
    display: flex;
  }

  .outer {
    flex: 1;
  }
  .inner {
    padding-top: 200px;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;

    &--fixed {
      position: fixed;
      top: $spacing--77;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>