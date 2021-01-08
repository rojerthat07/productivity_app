<template>
  <div class="error">
    <div class="error__message">
      <h3>There is a problem in registration</h3>
      It's either your username is already taken or your fields is blank
    </div>
    <router-link to="/register" class="error__link"
      >Go back to registration page</router-link
    >
  </div>
</template>

<script>
export default { name: "ErrorRegister" };
</script>

<style></style>
