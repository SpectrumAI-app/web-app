<template>
  <Navbar :navigation-items="navigationItems">
    <template #logo>
      <Link disable-hover to="/">
        <img class="logo" src="https://placehold.co/60x60?text=Logo" />
      </Link>
    </template>
    <template #content>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
    </template>
    <template #btn>
      <Button>Join Spectrum</Button>
    </template>
  </Navbar>
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer />
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
          id: "home",
          text: "Home",
          component: "Link",
        },
        {
          id: "about",
          text: "About",
          component: "Link",
        },
        {
          id: "blog",
          text: "Blogs",
          component: "Link",
        },
        {
          id: "spectrum",
          text: "Join Spectrum",
          component: "Button",
        },
      ]
    }
  }

}

</script>

<style>
  @import "App.scss";
</style>
