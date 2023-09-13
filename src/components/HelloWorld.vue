<script setup lang="ts">

</script>

<template>
  <h1 data-heading="GAY">
    <span data-heading="GAY">
      GAY
    </span>
  </h1>
</template>

<style lang="scss" scoped>
  $pink: #d61c5b;
  $red: #f1573f;
  $orange: #feb213;
  $green: #6abc4e;
  $blue: #2599d8;

  h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-size: 20vw;
    text-align: center;
    line-height: 1;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: $blue;

    &:before,
    &:after,
    span:before,
    span:after {
      content: attr(data-heading);
      position: absolute;
      overflow: hidden;
      left: 0;
    }

    &:before {
      color: $pink;
      height: 34%;
      z-index: 5;
    }

    &:after {
      color: $red;
      height: 50%;
      z-index: 4;
    }

    span {
      &:before {
        color: $orange;
        height: 66%;
        z-index: 3;
      }

      &:after {
        color: $green;
        height: 80%;
        z-index: 2;
      }
    }
  }

</style>
