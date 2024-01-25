<script setup lang="ts">

import Tile from "../Tiles/TileBase/Tile.vue";
</script>

<template>
  <div class="advantages">
    <h3 class="highlight">Reviews</h3>
    <h1>What our users say about us 🤔</h1>
    <div class="list">
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <p>Abdullah Mahabdula</p>
          <h3 class="highlight">A Game-Changer in Language Learning</h3>
          <p>
            This app's talkmates feature is a game-changer! Speaking with others during quests makes language learning not only effective but also incredibly enjoyable. Highly recommended for those seeking an interactive and fun way to learn.
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <p>Sergii Lazareenko</p>
          <h3 class="highlight">Language Learning Adventure!</h3>
          <p>
            This app redefines language learning. The quests make it more like an exciting adventure than a chore. Conversations boost my speaking skills and confidence. Kudos to the developers for making learning so enjoyable!
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <p>Kate Winter</p>
          <h3 class="highlight">Easy Speaking Practice</h3>
          <p>
            This app is a lifesaver for speaking practice. The real-time speaking feature, combined with solving quests, makes learning engaging. It feels like having a language buddy with me everywhere. Significant improvement in my conversational skills already. Great app.
          </p>
        </template>
      </Tile>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .advantages {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__tile {
      width: 300px;
      height: 500px;
      background-color: #2b2022;
      border-radius: 10px;
      position: relative;
      align-items: center;
      text-align: center;
    }
  }

  .highlight {
    color: $color__orange;
  }

  .list {
    display: flex;
    gap: $spacing--55;
  }
</style>