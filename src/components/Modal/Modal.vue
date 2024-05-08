<template>
  <div class="vue-modal" v-show="open">
    <transition name="slide">
      <div class="vue-modal-inner">
        <div class="vue-modal-content">
          <Icon class="vue-modal__close" :icon="['fa', 'x']" @click="$emit('close')" />
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
  @import "Modal.scss";
</style>