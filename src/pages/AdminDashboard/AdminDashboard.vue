<template>
  <div class="admin-dashboard">
    <div class="admin-dashboard__content">
      <h2>Welcome to Admin Dashboard!</h2>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Tile from "../../components/Tiles/TileBase/Tile.vue";
import Button from "../../components/Button/Button.vue";
import Link from "../../components/Link/Link.vue";
export default {
  name: "AdminDashboard",
  components: {Link, Button, Tile},
};
</script>

<style scoped lang="scss">
  @import "AdminDashboard.scss";
</style>