<script setup lang="ts">

import Link from "../../components/Link/Link.vue";
</script>

<template>
  <div class="about-us">
    <div class="header">
      <h1>New era of learning</h1>
      <h3 class="gradient">About Spectrum and our team</h3>
      <img src="/src/assets/img/logo_crop.png" />
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
            <img src="https://spectrumaiapp.com/assets/img/Illia.webp" />
            <h3>Illia</h3>
            <h4 class="highlight">CEO</h4>
          </div>
          <div class="team-member__info">
            <p>With extensive experience in project management and technical skills, I'm always open to new ideas and ready to inject a breath of fresh air into our project. I'm glad to invite new members to our Spectrum family 😉</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <div class="team-member__img-container" style="background-image: url('https://spectrumaiapp.com/assets/img/Ignat.webp')" />
            <h3>Ihnat</h3>
            <h4 class="highlight">CPO</h4>
          </div>
          <div class="team-member__info">
            <p>I’m a language enthusiast, linguistics major. Here at Spectrum, I’m committed to delighting our customers to the highest of my ability. I’ll make sure you practice English with fun 😁</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <img src="https://spectrumaiapp.com/assets/img/Renat.webp" />
            <h3>Renat</h3>
            <h4 class="highlight">CTO</h4>
          </div>
          <div class="team-member__info">
            <p>I’m a skilled IT specialist that takes greatest delight in a smoothly running code. I’m a key workaholic here, noticing the slightest mistakes and improving the product so that you love it ❤️</p>
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="team-member">
          <div class="team-member__img">
            <div class="team-member__img-container" style="background-image: url('https://spectrumaiapp.com/assets/img/Ignat.webp')" />
            <h3>Liza</h3>
            <h4 class="highlight">Designer</h4>
          </div>
          <div class="team-member__info">
            <p>I’m a language enthusiast, linguistics major. Here at Spectrum, I’m committed to delighting our customers to the highest of my ability. I’ll make sure you practice English with fun 😁</p>
          </div>
        </div>
      </div>
      <h2>Coming soon...</h2>
    </div>
    <div class="about-us__join">
      <div class="about-us__join-title">
        <div @click="$emit('openModal')">
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
  @import "AboutUs";
</style>