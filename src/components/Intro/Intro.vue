<script setup lang="ts">
// @ts-ignore
import Tile from "../Tiles/TileBase/Tile.vue";
import {onMounted, ref, watch} from "vue";
// @vue-ignore
import {useWindowScroll} from "@vueuse/core/index";

const currentStep = ref(0);
const { y } = useWindowScroll();
const wrapper = ref<HTMLElement | null>(null);
const wrapperTop = ref(0);

watch(y, () => {
  if (!wrapper.value) return;
  console.log(y.value, wrapperTop.value);
  console.log('h', wrapper.value?.getBoundingClientRect().height)
  if (y.value >= wrapperTop.value + (wrapper.value?.getBoundingClientRect().height)/3 * 2) {
    currentStep.value = 2;
  }
  else if (y.value >= wrapperTop.value + (wrapper.value?.getBoundingClientRect().height)/3) {
    currentStep.value = 1;
  }
  else {
    currentStep.value = 0;
  }
});

onMounted(() => {
  console.log(wrapper.value?.getBoundingClientRect().top);
  wrapperTop.value = wrapper.value?.getBoundingClientRect().top || 0;
});


</script>

<template>
  <div class="intro" ref="wrapper">
    <div class="text">
      <h3 class="highlight">How to start</h3>
      <h1>Start right now</h1>
      <h3>We are waiting for you!!!</h3>
    </div>
    <div class="steps">
      <Tile v-motion-slide-visible-once-bottom v-if="currentStep == 0" class="step">
        <template #header>
          <img src="https://placehold.co/500x300?text=Gif">
        </template>
        <template #content>
          <h3>Register 1</h3>
          <p>Register and get access to all the features</p>
        </template>
      </Tile>
      <Tile v-motion-slide-visible-once-bottom v-if="currentStep == 1" class="step">
        <template #header>
          <img src="https://placehold.co/500x300?text=Gif">
        </template>
        <template #content>
          <h3>Register 2</h3>
          <p>Register and get access to all the features</p>
        </template>
      </Tile>
      <Tile v-if="currentStep == 2" class="step">
        <template #header>
          <img src="https://placehold.co/500x300?text=Gif">
        </template>
        <template #content>
          <h3>Register 3</h3>
          <p>Register and get access to all the features</p>
        </template>
      </Tile>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .intro {
    width: 100%;
    height: 1200px;
    padding: $spacing--22;
    display: flex;
    justify-content: space-around;
    gap: $spacing--77;
    color: $color__white;
  }

  .highlight {
    color: $color__orange;
  }

  .steps {
    position: relative;
    padding-right: $spacing--33;
    height: 500px;
    overflow: hidden;
    gap: $spacing--44;
    flex: 1;
  }

  .step {
    width: fit-content;
    height: 700px;
    //background-color: #212020;
    background-color: #2b2022;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>