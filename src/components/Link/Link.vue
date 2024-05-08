<script setup lang="ts">

// props
import {computed} from "vue";

const props = defineProps({
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: '_self'
  },
  to: {
    type: [String, Object],
    default: null
  },
  disableHover: {
    type: Boolean,
    default: false
  },
});

// compose

const component = computed(() => {
  if (props.href) {
    return 'a'
  }
  if (props.to) {
    return 'router-link'
  }
  return 'div'
});


</script>

<template>
  <component :is="component" :to="props?.to" :href="props?.href" :class="[
      'link',
      {'link--disableHover': props?.disableHover}
    ]">
    <div class="link__prependIcon" v-if="$slots.prependIcon">
      <slot name="prependIcon"></slot>
    </div>
    <div class="link__content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="link__appendIcon" v-if="$slots.appendIcon">
      <slot name="appendIcon"></slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
 @import "Link.scss";
</style>