<template>
  <div class="header">
    <div class="header__brand">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="header__title">Productivity App</div>
    </div>

    <div class="header__nav">
      <router-link to="/">Login</router-link>
      <router-link to="/register">Register</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </div>
  <div class="register">
    <div class="register__heading">Create Account</div>
    <form class="register__form">
      <input
        class="register__input"
        type="text"
        v-model="username"
        placeholder="Username"
      />
      <input
        class="register__input"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <input
        @click="handleSubmit"
        class="register__submit"
        type="submit"
        value="Register"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      formValues: {},
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit: function(event) {
      event.preventDefault();

      axios
        .post("/api/users/register", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/success");
        })
        .catch(() => {
          this.$router.push("error-register");
        });
    },
  },
};
</script>

<style></style>
