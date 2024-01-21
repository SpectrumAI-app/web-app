<script setup lang="ts">

import Button from "../../components/Button/Button.vue";
import ScrollText from "../../components/ScrollText/ScrollText.vue";
import Intro from "../../components/Intro/Intro.vue";
import Advantages from "../../components/Advantages/Advantages.vue";
import Link from "../../components/Link/Link.vue";
import {useI18n} from "vue-i18n";
import i18n from "../../lang/home/index"
const content = [
  ["You", "wake", "up", "on", "the,", "alien", "spaceship."],
  ["Suddenly,", "the", "timer", "starts", "ticking,", "and"],
  ["you", "have", "", "minutes", "left", "until"],
  ["the", "ship", "self-destructs.", "Get", "in", "contact"],
  ["with", "your", "co-pilot", "and", "solve", "quests"],
  ["to", "unlock", "the", "control", "panel.", "Guide"],
  ["yourself", "out", "of", "trouble", "using", "the"],
  ["captain’s", "notebook. Speak", "with", "your", "co-pilot", "and"],
  ["save", "Yourself,", "Humanity,", "or", "Nobody."],
];

const { t } = useI18n({messages: i18n.messages});

</script>

<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header--text">
        <h1>
          {{ t('home.title') }}
        </h1>
        <h2>
          Practice your English through <span class="orange">Speaking</span> Quests
        </h2>
        <Button class="home__header-button">Join Spectrum</Button>
      </div>
<!--      <div class="home__header&#45;&#45;phone">-->
<!--        <div class="telegram-gif" >-->
<!--          <img src="https://assets.stickpng.com/images/5cb0633d80f2cf201a4c3253.png" class="telegram-border" />-->
<!--        </div>-->
<!--      </div>-->
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