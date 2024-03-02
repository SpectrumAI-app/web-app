<script setup lang="ts">

import Tile from "../Tiles/TileBase/Tile.vue";
import BiRow from "../Grid/BiRow/BiRow.vue";
</script>

<template>
  <BiRow class="advantages">
    <h3 class="highlight">Reviews</h3>
    <h1>What our users say about us 🤔</h1>
    <div class="list">
      <Tile class="advantages__tile">
        <template #header>
          <img src="../../assets/img/p1.png">
        </template>
        <template #content>
          <p class="mb-5">Abdullah Mahabdula</p>
          <h3 class="highlight">A Game-Changer in Language Learning</h3>
          <p class="mt-5">
            This app's talkmates feature is a game-changer! Speaking with others during quests makes language learning not only effective but also incredibly enjoyable. Highly recommended for those seeking an interactive and fun way to learn.
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="../../assets/img/p2.png">
        </template>
        <template #content>
          <p class="mb-5">Sergii Lazareenko</p>
          <h3 class="highlight">Language Learning Adventure!</h3>
          <p class="mt-5">
            This app redefines language learning. The quests make it more like an exciting adventure than a chore. Conversations boost my speaking skills and confidence. Kudos to the developers for making learning so enjoyable!
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="../../assets/img/p3.png">
        </template>
        <template #content>
          <p class="mb-5">Kate Winter</p>
          <h3 class="highlight">Easy Speaking Practice</h3>
          <p class="mt-5">
            This app is a lifesaver for speaking practice. The real-time speaking feature, combined with solving quests, makes learning engaging. It feels like having a language buddy with me everywhere. Significant improvement in my conversational skills already. Great app.
          </p>
        </template>
      </Tile>
    </div>
  </BiRow>
</template>

<style scoped lang="scss">
  .advantages {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__tile {
      max-width: 300px;
      width: fit-content;
      height: 500px;
      background-color: #2b2022;
      border-radius: 10px;
      position: relative;
      align-items: center;
      text-align: center;

      img {
        width: 128px;
        height: 128px;
      }
    }
  }

  .highlight {
    color: $color__orange;
  }

  .list {
    display: flex;
    gap: $spacing--55;
  }

  @media (max-width: 768px) {

    .advantages {
      text-align: center;
    }
    .list {
      flex-direction: column;
    }
  }
</style>