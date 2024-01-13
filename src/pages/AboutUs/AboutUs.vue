<script setup lang="ts">

import Link from "../../components/Link/Link.vue";
</script>

<template>
  <div class="about-us">
    <div class="header">
      <h1>New era of learning</h1>
      <h3 class="gradient">About Spectrum and our team</h3>
      <img src="/src/assets/img/LOGO-crop.png" />
    </div>
    <div class="content">
      <div v-motion-slide-visible-bottom class="start content__block"
           v-motion
           :initial="{
            opacity: 0,
            }"
           :enter="{
            opacity: 1,
            transition: {
              delay: 100,
            },
          }"
      >
        <p>The story starts at with both Mayuresh and Tejas studying at IIT Bombay.</p>
        <p>Mayuresh spent his evenings hosting workshops with 5-7 enthusiasts who were keen to learn his new found passion - design</p>
        <p>At the end of each workshop he would get asked the same question each time...</p>
      </div>
      <div v-motion-slide-visible-bottom class="team content__block">
        <h2>Our team</h2>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Ilia</h3>
            <h4>Co-founder</h4>
          </div>
          <div class="team-member__info">
            <p>I was born in Kyiv and raised by homeless people. But I'm still alive, help me, give us money</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Ilia</h3>
            <h4>Co-founder</h4>
          </div>
          <div class="team-member__info">
            <p>I was born in Kyiv and raised by homeless people. But I'm still alive, help me, give us money</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Ilia</h3>
            <h4>Co-founder</h4>
          </div>
          <div class="team-member__info">
            <p>I was born in Kyiv and raised by homeless people. But I'm still alive, help me, give us money</p>
          </div>
        </div>
      </div>
      <h2>Coming soon...</h2>
    </div>
    <div class="about-us__join">
      <div class="about-us__join-title">
        <div>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
          <Link><h1>Join Spectrum</h1></Link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-us {
    background-color: $color__black;
    color: white;
    &__join {
      margin-top: $spacing--44;
      display: flex;
      position: relative;
      left: 0;
      width: 100%;
      height: 300px;
      z-index: 1;

      &-title {
        display: flex;
        gap: $spacing--22;
        position: absolute;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        white-space: nowrap;
        transform: scale(2);
        transition: all 1s ease;
        & > div {
          display: flex;
          animation: scrollText 33s infinite linear;
        }
      }

      div:hover > * {
        color: $color__orange;
      }


      @keyframes scrollText {
        from   { transform: translateX(0%); }
        to { transform: translateX(-50%); }
      }
    }
  }

  .header {
    height: 50vh;
    margin-top: $spacing--55;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__block {
      width: 50%;
      margin-top: $spacing--55;
      margin-bottom: $spacing--55;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    &__block:after {
      content: '';
      display: block;
      width: 1px;
      height: 300px;
      background: rgb(29,22,23);
      background: linear-gradient(180deg, rgba(29,22,23,1) 20%, rgba(236,174,66,1) 50%, rgba(29,22,23,1) 80%);
      margin: 0 auto;
    }

    .team-member {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: $spacing--66;

      &__info {
        width: 50%;
      }

      &:nth-child(3) {
        flex-direction: row-reverse;
      }
    }
  }
</style>