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
  }
})
</script>

<template>
  <div class="navbar">
    <div class="navbar__logo">
      <slot name="logo"></slot>
    </div>
    <ul class="navbar__content">
      <slot name="content">
        <li v-for="item in navigationItems" :key="item.id">
          <Button v-if="item.component === 'Button'">
            {{item.text}}
          </Button>
          <Link v-else-if="item.component === 'Link'">
            {{item.text}}
          </Link>
          <div v-else>
            {{item.text}}
          </div>
        </li>
      </slot>
    </ul>
  </div>
</template>

<style scoped lang="scss">
 @import "Navbar.scss";
</style>