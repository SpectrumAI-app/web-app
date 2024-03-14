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
    <suspense>
      <router-view></router-view>
    </suspense>
  </div>
  <Footer ref="footer" v-if="!$route.path.startsWith('/admin')" />
</template>

<script lang="ts">
import Link from "./components/Link/Link.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Button from "./components/Button/Button.vue";
import Footer from "./components/Footer/Footer.vue";
import {availableLocales, localeShortcuts} from "./lang";
import {availableCookies, cookies} from "./utils/cookies.ts";
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
          id: "/about",
          text: "About",
          component: "Link",
        },
        {
          id: "/blogs",
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
      startHeight: 0,
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
  watch: {
    '$route.name': {
      handler() {
        console.log(this.$route.name)
        switch (this.$route.name) {
          case 'Home':
            this.startHeight = 9200;
            break;
          case 'About Us':
            this.startHeight = 3000;
            break;
          case 'Blogs':
            this.startHeight = 4000;
            break;
          default:
            this.startHeight = 11200;
        }
      },
      immediate: true,
    }
  },
  methods: {
    handleScroll() {
      if (document.body.offsetWidth <= 769) return;
      const footerElement = this.$refs?.footer?.$el;
      if (footerElement) {
        const currentScrollPos = window.scrollY;
        const step = window.innerWidth * 0.0012
        if (currentScrollPos < this.startHeight) {
          this.marginValue = 0;
          return;
        }
        if (currentScrollPos > this.startHeight && currentScrollPos > this.prevScrollPos) {
          this.marginValue = Math.min(this.marginValue + step, window.innerWidth * 0.05);
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
