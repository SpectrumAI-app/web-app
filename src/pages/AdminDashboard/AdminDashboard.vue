<template>
  <div class="admin-dashboard">
    <!--  Add variation for navbar component  -->
    <div class="admin-dashboard__navbar">
      <img src="https://placehold.co/150x150?text=Logo" />
      <Link v-for="link in navbarLinks" :to="link.to">
        {{ link.text }}
      </Link>
      <Link class="admin-dashboard__logout" to="/">
        <template #appendIcon>
          <Icon :icon="['fas', 'sign-out']" />
        </template>
        Log out
      </Link>
    </div>
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
  data() {
    return {
      navbarLinks: [
        {
          text: "Dashboard",
          to: "/admin-dashboard"
        },
        {
          text: "Blog edit",
          to: "/blog"
        },
        {
          text: "Analytics",
          to: "/analytics"
        },
        {
          text: "Spectrum Webpage",
          to: "/home"
        }
      ],
    }
  },
};
</script>

<style scoped lang="scss">
  @import "AdminDashboard.scss";
</style>