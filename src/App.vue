<template>
  <Modal :open="isModalOpen" @close="isModalOpen = false">
    <h3 class="primary-accent-color">Let's stay in touch!</h3>
    <p>Leave your email and we will notify you when Spectrum is ready</p>
    <input class="modal-input" type="email" placeholder="Your email" />
    <Button @click="isModalOpen = false">Notify me</Button>
  </Modal>
  <Navbar :navigation-items="currentNavigationItems">
    <template #logo>
      <Link disable-hover to="/">
        <img class="logo" :src="`/web-app/assets/img/logo_${currentTheme}.png`" />
      </Link>
    </template>
    <template #theme>
      <Icon class="theme-switch" @click="toggleTheme" :icon="['fa', currentTheme === 'light' ? 'moon' : 'sun']" />
    </template>
    <template #btn>
      <Button @click="isModalOpen = true">Join Spectrum</Button>
    </template>
  </Navbar>
  <div class="main" :style="`margin: 0px ${marginValue}px ${marginValue}px ${marginValue}px`">
    <suspense>
      <router-view @openModal="isModalOpen = true"></router-view>
    </suspense>
  </div>
  <Footer ref="footer" />
</template>

<script lang="ts">
import Link from "./components/Link/Link.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Button from "./components/Button/Button.vue";
import Footer from "./components/Footer/Footer.vue";
import Modal from "./components/Modal/Modal.vue";
export default {
  name: 'App',
  components: {Modal, Footer, Link, Navbar, Button},
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
      prevScrollPos: 0,
      marginValue: 0,
      startHeight: 0,
      currentTheme: 'dark',
      isModalOpen: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.setInitialTheme();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    currentNavigationItems() {
      return this.navigationItems;
    }
  },
  watch: {
    '$route.name': {
      handler() {
        switch (this.$route.name) {
          case 'Home':
            this.startHeight = 9200;
            break;
          case 'About Us':
            this.startHeight = 3500;
            break;
          default:
            this.startHeight = 0;
        }
      },
      immediate: true,
    }
  },
  methods: {
    handleScroll() {
      if (document.body.offsetWidth <= 769 || this.startHeight === 0) {
        this.marginValue = 0;
        return;
      }
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
    toggleTheme() {
      this.currentTheme === 'dark' ? this.currentTheme = 'light' : this.currentTheme = 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    },
    setInitialTheme() {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        this.currentTheme = 'dark';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        this.currentTheme = 'light';
      }
    }
  },

}

</script>

<style>
  @import "App.scss";
</style>
