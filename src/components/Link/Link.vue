<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Link",
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    to: {
      type: String,
      default: () => {}
    }
  },
  methods: {
    onClick() {
      if (this.to) {
        this.$router.push(this.to)
      }
      if (this.href) {
        window.open(this.href, this.target)
      }
    }
  }
})
</script>

<template>
  <div class="link" @click="onClick">
    <div class="link__prependIcon" v-if="$slots.prependIcon">
      <slot name="prependIcon"></slot>
    </div>
    <div class="link__content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="link__appendIcon" v-if="$slots.appendIcon">
      <slot name="appendIcon"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import "Link.scss";
</style>