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
        <p>Our story begins when 3 language enthusiast Illia, Ihnat and Renat noticed that the essence of language learning is practice.</p>
        <p>That might sound dull, like duh?</p>
        <p>But we carried this insight throughout our work, transforming abstract ideas into the funnest app to learn and practice English.</p>
      </div>
      <div v-motion-slide-visible-bottom class="team content__block">
        <h2>Our team</h2>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Illia</h3>
            <h4>CEO</h4>
          </div>
          <div class="team-member__info">
            <p>With extensive experience in project management and technical skills, I'm always open to new ideas and ready to inject a breath of fresh air into our project. I'm glad to invite new members to our Spectrum family 😉</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Ihnat</h3>
            <h4>CPO</h4>
          </div>
          <div class="team-member__info">
            <p>I’m a language enthusiast, linguistics major. Here at Spectrum, I’m committed to delighting our customers to the highest of my ability. I’ll make sure you practice English with fun 😁</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://placehold.co/400x400?text=photo" />
            <h3>Renat</h3>
            <h4>CTO</h4>
          </div>
          <div class="team-member__info">
            <p>I’m a skilled IT specialist that takes greatest delight in a smoothly running code. I’m a key workaholic here, noticing the slightest mistakes and improving the product so that you love it ❤️</p>
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
    color: white;
    &__join {
      overflow: hidden;
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
    padding-top: $spacing--55;
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
        margin: 0 $spacing--22;
      }

      &:nth-child(3) {
        flex-direction: row-reverse;
      }
    }
  }
</style>