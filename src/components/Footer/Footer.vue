<script setup lang="ts">

import Link from "../../components/Link/Link.vue";
import Button from "../../components/Button/Button.vue";
import BiRow from "../Grid/BiRow/BiRow.vue";
</script>

<template>
  <BiRow no-gutters class="footer">
     <div class="footer__col footer__col--logo">
        <img src="https://placehold.co/300x60?text=Logo" />
        <h3>We are the future...</h3>
     </div>
     <div class="footer__col footer__col--about">
        <h3>About</h3>
        <ul class="footer__links">
          <Link><h4>Contact</h4></Link>
          <Link><h4>Blog</h4></Link>
          <Link><h4>Our Story</h4></Link>
          <Link><h4>Careers</h4></Link>
        </ul>
     </div>
     <div class="footer__col footer__col--company">
       <h3>Company</h3>
       <ul class="footer__links">
         <Link><h4>Press</h4></Link>
         <Link><h4>Brand Assets</h4></Link>
         <Link><h4>Terms of service</h4></Link>
         <Link><h4>Privacy Policy</h4></Link>
       </ul>
     </div>
  </BiRow>
</template>

<style scoped lang="scss">
  @import "Footer.scss";
</style>