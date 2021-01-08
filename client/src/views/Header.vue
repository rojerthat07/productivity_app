<template>
  <div class="header">
    <div class="header__brand">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="header__title">Productivity App</div>
    </div>

    <div class="header__nav">
      <router-link to="/pomodoro">Pomodoro</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link @click="onLogout" to="/">Logout</router-link>

      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onLogout: function() {
      localStorage.setItem("token", "");
    },
  },
};
</script>
