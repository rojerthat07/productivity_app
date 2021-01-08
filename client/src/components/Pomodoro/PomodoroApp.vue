<template>
  <div class="pomodoro">
    <Header></Header>
    <PomodoroBox
      :pomodoro="pomodoro"
      :shortBreak="shortBreak"
      :longBreak="longBreak"
    ></PomodoroBox>
  </div>
</template>

<script>
import PomodoroBox from "./PomodoroBox";
import Header from "../../views/Header";
import axios from "axios";
export default {
  name: "PomodoroApp",
  components: { PomodoroBox, Header },
  data() {
    return {
      pomodoro: 1500,
      shortBreak: 300,
      longBreak: 900,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    axios
      .get("/api/todos", {
        headers: {
          "x-auth-token": `${token}`,
        },
      })
      .then((response) => response)
      .catch(() => this.$router.push("token-error"));
  },
};
</script>
