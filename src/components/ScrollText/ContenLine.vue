<script setup lang="ts">

  const props = defineProps({
    content: {
      type: [String],
      required: true
    },
    lineId: {
      type: Number,
      default: 0
    },
    revealedWords: {
      type: Number,
      default: 0
    }
  });
</script>

<template>
  <span class="content-line" ref="contentRef">
      <span v-for="(word, index) in props.content" :class="[
          'content-line__text',
          {'content-line__text--revealed' : (7 * lineId + index) < revealedWords},
          {'content-line__text--timer' : (7 * lineId + index) === 16 && revealedWords <= 16},
          {'content-line__text--timer-active' : 16 === 7 * lineId + index && revealedWords > 16}
          ]">
        {{word}}
      </span>
  </span>
</template>

<style scoped lang="scss">
  .content-line {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: $spacing--11;

    &__text {
      font-size: 46px;
      color: var(--secondary-color);
      transition: opacity .2s ease-in-out;
      opacity: .1;

      &--revealed {
        transition: opacity .2s ease-in-out;
        opacity: 1;
      }

      &--timer {
        &:after {
          content: "թճֆѦ";
          color: var(--primary-accent-color);
          font-weight: bold;
        }

        &-active:after {
          content: "թճֆѦ";
          color: var(--primary-accent-color);
          animation: 2.5s linear infinite alternate changeValue;
          font-weight: bold;
        }
      }
    }
  }

  @function getRandomCharacter($possibleValues) {
    $charIndex: random(length($possibleValues));
    @return nth($possibleValues, $charIndex);
  }

  @keyframes changeValue {
    $possibleValues: "Ѧ" "ֆ" "թ" "ճ" "ǂ" "Ʈ" "ƨ" "ƒ" "ƛ" "Ȣ" "ȝ" "ȥ" "ɋ" "ɚ" "ɲ" "ɔ" "ʭ";
    @for $i from 1 through 10 {
      $percent: percentage(calc($i / 10));

      // Select four random characters
      $char1: getRandomCharacter($possibleValues);
      $char2: getRandomCharacter($possibleValues);
      $char3: getRandomCharacter($possibleValues);
      $char4: getRandomCharacter($possibleValues);

      #{$percent} {
        content: unquote("\"") + $char1 + $char2 + $char3 + $char4 + unquote("\"");
      }
    }
  }

  @media (max-width: 768px) {
    .content-line {
      &__text {
        font-size: 26px;
      }
    }
  }
</style>