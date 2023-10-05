<script setup lang="ts">

import Button from "../components/Button/Button.vue";
import Link from "../components/Link/Link.vue";
import Navbar from "../components/Navbar/Navbar.vue";
</script>

<template>
  <div class="page">
    <Button>
      <template #prependIcon>
        h
      </template>
      Button
      <template #appendIcon>
        h
      </template>
    </Button>
    <Link href="https://www.w3schools.com/tags/att_a_target.asp">
      <template #prependIcon>
        icon
      </template>
      Link
      <template #appendIcon>
        <Icon :icon="['fas', 'user-secret']" />
      </template>
    </Link>
    <Navbar
        class="navigation-bar"
        :navigationItems="[
      {id: 'tab1', text: 'Tab 1', component: 'Link'},
      {id: 'tab2', text: 'Tab 2', component: 'Link'},
      {id: 'tab3', text: 'Tab 3', component: 'Link'}
      ]">
      <template #logo>
        <Icon :icon="['fas', 'user-secret']" />
      </template>
    </Navbar>
  </div>
</template>

<style lang="scss" scoped>
  $pink: #d61c5b;
  $red: #f1573f;
  $orange: #feb213;
  $green: #6abc4e;
  $blue: #2599d8;

  .page {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .navigation-bar {
    position: fixed;
    top: 0;
  }

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
