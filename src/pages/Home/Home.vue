<script setup lang="ts">

import Button from "../../components/Button/Button.vue";
import ScrollText from "../../components/ScrollText/ScrollText.vue";
import Intro from "../../components/Intro/Intro.vue";
import Advantages from "../../components/Advantages/Advantages.vue";
import Link from "../../components/Link/Link.vue";

const content = [
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
  ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,"],
];
</script>

<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header--text">
        <h1>
          Shla Sahsha po soshe i sosala sushku
        </h1>
        <h2>
          Specturm is cool! U are not cool!
        </h2>
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
      </div>
    <div class="home__info">
      <ScrollText :content="content" />
    </div>
    <div class="home__intro">
      <Intro />
    </div>
    <div class="home__advantages">
      <Advantages />
    </div>
    <div class="home__join">
      <div class="home__join-title">
        <div>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "Home.scss";
</style>