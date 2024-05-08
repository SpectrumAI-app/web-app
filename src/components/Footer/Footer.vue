<script setup lang="ts">

import Link from "../../components/Link/Link.vue";
</script>

<template>
  <div class="footer">
     <div class="footer__col footer__col--logo">
        <img src="https://placehold.co/300x60?text=Logo" />
        <h3>We are the future...</h3>
     </div>
     <div class="footer__col footer__col--about">
        <h3>About</h3>
        <ul class="footer__links">
          <Link :to="{ path: '/contact' }"><h4>Contact</h4></Link>
          <Link :to="{ path: '/blogs' }"><h4>Blogs</h4></Link>
          <Link :to="{ path: '/about' }"><h4>Our Story</h4></Link>
          <Link :to="{ path: '/careers' }"><h4>Careers</h4></Link>
        </ul>
     </div>
     <div class="footer__col footer__col--company">
       <h3>Company</h3>
       <ul class="footer__links">
         <Link :to="{ path: '/press' }"><h4>Press</h4></Link>
         <Link :to="{ path: '/brand-assets' }"><h4>Brand Assets</h4></Link>
         <Link :to="{ path: '/terms-of-service' }"><h4>Terms of service</h4></Link>
         <Link :to="{ path: '/privacy-policy' }"><h4>Privacy Policy</h4></Link>
       </ul>
     </div>
  </div>
</template>

<style scoped lang="scss">
  @import "Footer.scss";
</style>