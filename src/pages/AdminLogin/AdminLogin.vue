<template>
  <div class="admin-login">
    <!-- TODO: create aller component   -->
    <div id="alert" class="admin-login__alert" v-if="alert">{{ alert }}</div>
    <img src="https://placehold.co/150x150?text=Logo" />
    <div class="admin-login__form">
      <input class="admin-login__input" id="username" type="text" placeholder="Username" v-model="emailOrUsername" />
      <input class="admin-login__input" id="password" type="password" placeholder="Password" v-model="password" />
      <Button @click="login">Log in</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../components/Button/Button.vue";

export default {
  name: "AdminLogin",
  components: {Button},
  data() {
    return {
      emailOrUsername: "",
      password: "",
      alert: ""
    }
  },
  methods: {
    login() {
      if(this.emailOrUsername === "admin" && this.password === "admin") {
        this.$router.push("/admin-dashboard");
      } else {
        this.alert = "Wrong credentials";
      }
    }
  }
}
</script>

<style scoped lang="scss">
 @import "AdminLogin.scss";
</style>