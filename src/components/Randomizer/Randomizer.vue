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
  .randomizer {
    font-size: inherit;
    font-weight: bold;
    color: $color__orange;
    display: inline;
  }

  .a {
    display: inline;

    &:after {
      content: "A";
      animation: changeValue 10s infinite linear;
    }
  }

  @keyframes changeValue {
    $possibleValues: "A" "B" "C" "D" "E" "F" "G" "H" "I" "J" "K" "L" "M" "N" "O" "P" "Q" "R" "S" "T" "U" "V" "W" "X" "Y" "Z" "0" "1" "2" "3" "4" "5" "6" "7" "8" "9" "!" "@" "#" "$" "%" "^" "&" "*" "(" ")" "-" "_" "+" "=" "{" "}" "[" "]" "|" "\\" ":" ";" "<" ">" "," "." "?" "/" "'" "\"";
    @for $i from 1 through length($possibleValues) {
      $char: nth($possibleValues, $i);
      $percent: percentage(calc($i / length($possibleValues)));

      #{$percent} {
        content: unquote("\"") + unquote(str-insert($char, "\\", 1)) + unquote("\"");
      }
    }
  }

</style>