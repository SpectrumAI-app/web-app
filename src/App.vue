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
  <div class="main" :style="`margin: 0px ${marginValue}px ${marginValue}px ${marginValue}px`">
    <router-view></router-view>
  </div>
  <Footer ref="footer" v-if="!$route.path.startsWith('/admin')" />
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
      ],
      prevScrollPos: 0,
      marginValue: 0,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    currentNavigationItems() {
      if (this.$route.path.startsWith("/admin")) {
        return this.adminNavigationItems;
      }
      return this.navigationItems;
    }
  },
  methods: {
    handleScroll() {
      const footerElement = this.$refs?.footer?.$el;
      console.log(footerElement);
      if (footerElement) {
        //const rect = footerElement?.getBoundingClientRect();
        const currentScrollPos = window.scrollY;
        const startHeight = 11000;
        const step = (currentScrollPos - startHeight) / 100;
        if (currentScrollPos < startHeight) {
          this.marginValue = 0;
          return;
        }
        if (currentScrollPos > startHeight && currentScrollPos > this.prevScrollPos) {
          this.marginValue = Math.min( this.marginValue + step, 0.05 * window.innerWidth);
        } else {
          this.marginValue = Math.max(0, this.marginValue - step);
        }
        this.prevScrollPos = currentScrollPos;
      }
    },
  },

}

</script>

<style>
  @import "App.scss";
</style>
