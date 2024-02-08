<script setup lang="ts">

import Button from "../../components/Button/Button.vue";
import ScrollText from "../../components/ScrollText/ScrollText.vue";
import Intro from "../../components/Intro/Intro.vue";
import Advantages from "../../components/Advantages/Advantages.vue";
import Link from "../../components/Link/Link.vue";
import {useI18n} from "vue-i18n";
import i18n from "../../lang/Home/index"
import BiRow from "../../components/Grid/BiRow/BiRow.vue";
import BiCol from "../../components/Grid/BiCol/BiCol.vue";
import Tile from "../../components/Tiles/TileBase/Tile.vue";
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

const contentMobile = [
  ["You", "wake", "up", "on", "the,", "alien"],
  ["spaceship.", "Suddenly,", "the", "timer", "starts", "ticking,", "and"],
  ["you", "have", "", "minutes", "left", "until", "the", "ship", "self-destructs."],
  ["Get", "in", "contact", "with", "your"],
  ["co-pilot", "and", "solve", "quests"],
  ["to", "unlock", "the", "control", "panel."],
  ["Guide", "yourself", "out", "of"],
  ["captain’s", "notebook. Speak"],
  ["with", "your", "co-pilot", "and"],
  ["save", "Yourself,", "Humanity,", "or", "Nobody."],
];

// computed width of the device
const width = window.innerWidth;

const { t } = useI18n({messages: i18n.messages});

</script>

<template>
  <div class="home">
    <BiRow no-gutters class="home__header">
      <BiCol class="home__header-text" cols="12">
        <h1>
          {{ t('home.title') }}
        </h1>
        <h2>
          Practice your English through <span class="orange">Speaking</span> Quests
        </h2>
        <div class="home__header-button-wrapper">
          <Button class="home__header-button">Join Spectrum</Button>
        </div>
      </BiCol>
      <BiCol class="home__header-scroll" cols="12">
        <BiRow>
          <BiCol cols="12">
            <Icon class="home__header__icon" :icon="['fa', 'computer-mouse']" />
          </BiCol>
          <BiCol cols="12">
            <h4>Scroll down to learn more</h4>
          </BiCol>
        </BiRow>
      </BiCol>
    </BiRow>
    <BiRow no-gutters class="home__info">
      <ScrollText :content="width <= 768 ? contentMobile : content" />
    </BiRow>
    <BiRow no-gutters class="home__intro">
      <Intro class="home__intro--pc" />
      <BiCol class="home__intro--mobile" cols="12">
        <h2 class="orange">Efficient Learning</h2>
        <p>Master English with our three key features!</p>
      </BiCol>
      <BiCol class="home__intro--mobile" cols="12">
        <BiRow no-gutters class="home__intro-tiles">
          <Tile class="home__intro-tile">
            <template #header>
              <img src="https://placehold.co/220x220?text=Icon">
            </template>
            <template #content>
              <h3>Keep talking</h3>
              <p>
                Speak with your co-pilot and improve your skills continuously.
              </p>
            </template>
          </Tile>
          <Tile class="home__intro-tile">
            <template #header>
              <img src="https://placehold.co/220x220?text=Icon">
            </template>
            <template #content>
              <h3>Keep talking</h3>
              <p>
                Speak with your co-pilot and improve your skills continuously.
              </p>
            </template>
          </Tile>
        </BiRow>
      </BiCol>
    </BiRow>
    <BiRow no-gutters class="home__advantages">
      <Advantages />
    </BiRow>
    <BiRow no-gutters class="home__join">
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
    </BiRow>
  </div>
</template>

<style scoped lang="scss">
  @import "Home.scss";
</style>