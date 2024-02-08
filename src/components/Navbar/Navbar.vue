<script lang="ts">
import {defineComponent} from 'vue'
import Button from "../Button/Button.vue";
import Link from "../Link/Link.vue";

interface NavigationItem {
  id: string,
  text: string,
  component: string,
}

export default defineComponent({
  name: "Navbar",
  components: {Button, Link},
  props: {
    navigationItems: {
      type: Array as () => NavigationItem[],
      default: () => []
    }
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
})
</script>

<template>
  <div class="navbar">
    <div class="navbar__logo">
      <slot name="logo"></slot>
    </div>
    <ul class="navbar__content" :class="{'navbar__content--open' : isMenuOpen }">
      <slot name="content">
        <li v-for="item in navigationItems" :key="item.id">
          <Link v-if="item.component === 'Link'" :to="item.id">
            {{item.text}}
          </Link>
          <div v-else>
            {{item.text}}
          </div>
        </li>
      </slot>
    </ul>
    <div class="navbar__external-actions">
      <slot name="lang-switch"/>
      <slot name="btn"/>
    </div>
    <div class="navbar__hamburger" @click="isMenuOpen = !isMenuOpen">
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
 @import "Navbar.scss";
</style>