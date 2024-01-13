<script setup lang="ts">

import Tile from "../Tiles/TileBase/Tile.vue";
import {onMounted, ref, watch} from "vue";
import {useWindowScroll} from "@vueuse/core/index";


const activeStep = ref(0);
const { y } = useWindowScroll();
const wrapper = ref(null);
const startY = ref(0);

watch(y, (newValue) => {
  if (newValue > startY.value + 2000) {
    activeStep.value = 2;
  }
  else if (newValue > startY.value + 1000) {
    activeStep.value = 1;
  }
  else if (newValue < startY.value + 1000) {
    activeStep.value = 0;
  }
});

onMounted(() => {
  console.log(wrapper.value);
  startY.value = wrapper.value?.offsetTop;
});

</script>

<template>
  <div class="intro" ref="wrapper">
    <div class="left">
      <div class="text">
        <h2>Efficient learning</h2>
        Master English with our three key features!
      </div>
    </div>
    <div class="right">
      <div class="slider">
        <div :class="[
            'step',
            {
              'step--active': activeStep === 0,
            },
            ]">
          <Tile class="step-tile">
            <template #header>
              <img src="https://placehold.co/400x220?text=Icon">
            </template>
            <template #content>
              <h3>Keep talking</h3>
              <p>
                Speak with your co-pilot and improve your skills continuously.
              </p>
            </template>
          </Tile>
        </div>
        <div :class="[
            'step',
            {
              'step--active': activeStep === 1,
            },
            ]">
          <Tile class="step-tile">
            <template #header>
              <img src="https://placehold.co/400x220?text=Icon">
            </template>
            <template #content>
              <h3>Learn new Vocabulary with Fun</h3>
              <p>
                Enjoy 10,000+ distinct words and practice them right away
              </p>
            </template>
          </Tile>
        </div>
        <div :class="[
            'step',
            {
              'step--active': activeStep === 2,
            },
            ]">
          <Tile class="step-tile">
            <template #header>
              <img src="https://placehold.co/400x220?text=Icon">
            </template>
            <template #content>
              <h3>Coming soon</h3>
              <p>
                Correct your mistakes and get AI-driven feedback for your speaking
              </p>
            </template>
          </Tile>
        </div>
        <div class="scrollbar">
          <span class="counter">
            {{
                `0${activeStep + 1}`
            }}
          </span>
          <div class="line">
            <span class="line__progress" :style="`transform: scaleY(${(activeStep+1)/3});`"></span>
          </div>
          <span class="counter">
            03
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .intro {
    height: 5000px;
    position: relative;
    display: flex;
    gap: $spacing--66;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }

  .text {
    padding-top: 200px;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }

  .slider {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .step {
    padding-top: 200px;
    position: absolute;
    top: 0;
    left: 0;
    padding-right: 16px;
    opacity: 0;
    translate: none;
    rotate: none;
    scale: 0;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: all 1s ease-in-out;

    &--active {
      opacity: 1;
      translate: 0px;
      rotate: 0deg;
      scale: 1;
    }

    &-tile {
      width: 500px;
      height: fit-content;
      background-color: #2b2022;
      border-radius: 10px;
      position: relative;
      align-items: center;
      text-align: center;
    }
  }

  .scrollbar {
    position: absolute;
    margin-top: 400px;
    top: 0;
    left: 630px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .counter {
    font-size: 14px;
    color: $color__orange;
  }

  .line {
    border-radius: 9999px;
    width: 2px;
    height: 300px;
    background-color: $color__white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    &__progress {
      width: 100%;
      height: 100%;
      background-color: $color__orange;
      z-index: 9999;
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: top;
      transform: scaleY(0);
      transition: all 1s ease-in-out;
    }
  }

</style>