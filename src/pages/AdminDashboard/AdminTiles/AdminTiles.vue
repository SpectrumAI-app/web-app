<template>
  <div class="admin-dashboard__tiles">
    <div class="admin-dashboard__tile" v-for="tile in tiles">
      <Tile>
        <template #header>
          <img :src="tile.header" />
        </template>
        <template #content>
          <p>{{tile.content}}</p>
        </template>
        <template #footer>
          <Button @click="open(tile.to)">{{ tile.footer }}</Button>
        </template>
      </Tile>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../../components/Button/Button.vue";
import Tile from "../../../components/Tile/Tile.vue";

export default {
  name: "AdminTiles",
  components: {Button, Tile},
  data() {
    return {
      tiles: [
        {
          header: "https://placehold.co/350x350?text=SEX",
          content: "Blogs",
          footer: "Go to Blogs",
          to: "/blog"
        },
        {
          header: "https://placehold.co/350x350?text=SEX",
          content: "Analytics",
          footer: "Go to Analytics",
          to: "/blog"
        },
        {
          header: "https://placehold.co/350x350?text=SEX",
          content: "Add/Edit Blog",
          footer: "Add/Edit Blog",
          to: "/blog"
        },
        {
          header: "https://placehold.co/350x350?text=SEX",
          content: "Add/Edit Blog",
          footer: "Add/Edit Blog",
          to: "/blog"
        }
      ]
    }
  },
  methods: {
    open(to: string) {
      this.$router.push(to);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "AdminTiles.scss";
</style>