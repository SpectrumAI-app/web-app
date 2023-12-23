<template>
  <Navbar :navigation-items="currentNavigationItems">
    <template #logo>
      <Link disable-hover to="/">
        <img class="logo" src="/src/assets/img/LOGO.png" />
      </Link>
    </template>
    <template #btn v-if="!$route.path.startsWith('/admin')">
      <Button>Join Spectrum</Button>
    </template>
  </Navbar>
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer v-if="!$route.path.startsWith('/admin')" />
</template>

<script lang="ts">
import Link from "./components/Link/Link.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Button from "./components/Button/Button.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: 'App',
  components: {Footer, Link, Navbar, Button},
  data() {
    return{
      navigationItems: [
        {
          id: "/",
          text: "Home",
          component: "Link",
        },
        {
          id: "about",
          text: "About",
          component: "Link",
        },
        {
          id: "blogs",
          text: "Blogs",
          component: "Link",
        },
      ],
      adminNavigationItems: [
        {
          id: "admin-dashboard",
          text: "Dashboard",
          component: "Link",
        },
        {
          id: "admin-blog",
          text: "Blog Editor",
          component: "Link",
        },
        {
          id: "admin-analytics",
          text: "Analytics",
          component: "Link",
        },
      ]
    }
  },
  computed: {
    currentNavigationItems() {
      if (this.$route.path.startsWith("/admin")) {
        return this.adminNavigationItems;
      }
      return this.navigationItems;
    }
  }

}

</script>

<style>
  @import "App.scss";
</style>
