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
  const WORD_COUNT = 71;

  watch(y, () => {
    if (!contentRef.value || y < contentRef.value?.getBoundingClientRect().top) return;
    if (Math.abs(contentRef.value?.getBoundingClientRect().y) + 1000 > contentRef.value?.getBoundingClientRect().height)
      revealedWords.value = WORD_COUNT; // TODO: Find cleaner solution
    if(y.value - oldY.value > 45) {
      revealedWords.value = Math.min(WORD_COUNT, revealedWords.value + 1)
      oldY.value = y.value;
    }
    if (y.value - oldY.value < -45) {
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
    margin: 0 auto;
  }

  .outer {
    flex: 1;
  }
  .inner {
    padding-top: 50px;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;

    &--fixed {
      position: fixed;
      top: $spacing--55;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>