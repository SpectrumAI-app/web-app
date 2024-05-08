<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 5
  },
  updateTime: {
    type: Number,
    default: 10
  },
  active: {
    type: Boolean,
    default: false
  }
});

const randomText = ref('AbcsD');


const generateRandomText = (length: number) => {
  randomText.value = '';
  for (let i = 0; i < length; i++) {
    const random = Math.random();
    randomText.value += (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  }
  return randomText;
};

// if was activated, generate random text every updateTime
if (props.active) {
  setInterval(() => {
    generateRandomText(props.length);
  }, props.updateTime);
}

</script>

<template>
  <div class="randomizer">
    <span v-for="_ in length" class="a" />
  </div>
</template>

<style scoped lang="scss">


</style>