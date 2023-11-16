<script setup lang="ts">

import Tile from "../Tiles/TileBase/Tile.vue";
</script>

<template>
  <div class="advantages">
    <h3 class="highlight">Our advantages</h3>
    <h1>We are here</h1>
    <div class="list">
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <h3>Learn fast</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <h3>Communication with real people</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </template>
      </Tile>
      <Tile class="advantages__tile">
        <template #header>
          <img src="https://placehold.co/128x128?text=Icon">
        </template>
        <template #content>
          <h3>Interesting topics</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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
      height: 300px;
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