<template>
  <div class="vue-modal" v-show="open">
    <transition name="slide">
      <div class="vue-modal-inner">
        <div class="vue-modal-content">
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

<style scoped lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}
</style>