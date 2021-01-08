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
  <div class="login">
    <div class="login__heading">Productivity App</div>
    <form class="login__form">
      <input
        class="login__input"
        type="text"
        v-model="username"
        placeholder="Username"
      />
      <input
        class="login__input"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <input
        class="login__submit"
        @click="handleSubmit"
        type="submit"
        value="Login"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit: function(event) {
      event.preventDefault();

      axios
        .post("/api/users/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("todos");
        })
        .catch(() => {
          this.$router.push("error");
        });
    },
  },
};
</script>

<style></style>
