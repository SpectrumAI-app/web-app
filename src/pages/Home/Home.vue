<script setup lang="ts">

import Button from "../../components/Button/Button.vue";
import ScrollText from "../../components/ScrollText/ScrollText.vue";

const content = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  "sed do eiusmod tempor incididunt ut labore et",
  "dolore magna aliqua. Ut enim ad minim veniam",
  "quis nostrud exercitation ullamco laboris ",
  "nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor"
];
</script>

<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header--text">
        <h1>SpectrumAI</h1>
        <h2>New way of learning languages</h2>
        <Button class="home__header-button">Join Spectrum</Button>
      </div>
      <div class="home__header--phone">
        <div class="telegram-gif" >
          <img src="https://assets.stickpng.com/images/5cb0633d80f2cf201a4c3253.png" class="telegram-border" />
        </div>
      </div>
      <div class="home__header--scroll"
           v-motion
           :initial="{
            opacity: 0,
            }"
           :enter="{
            opacity: 1,
            transition: {
              delay: 1000,
            },
          }"
      >
        <Icon class="home__header__icon" :icon="['fa', 'computer-mouse']" />
        <h4>Scroll down to learn more</h4>
      </div>
      <div class="home__info">
        <ScrollText :content="content" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "Home.scss";
</style>