<template>
  <div class="div">
    <Header></Header>
    <div class="todos-container">
      <div class="todos__header">
        <div class="todos__header-one">
          <div class="todos__date todos__date--date">{{ date.getDate() }}</div>

          <div class="todos__date todos__date--month">
            {{ months[date.getMonth()] }}
          </div>
          <div class="todos__date todos__date--year">
            {{ date.getFullYear() }}
          </div>
        </div>
        <div class="todos__header-two">
          <div class="todos__date todos__date--day">
            {{ days[date.getDay()] }}
          </div>
        </div>
      </div>

      <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todos__item">
          <label class="todos__item-container">
            <i
              class="fas fa-check-circle todos__checkbox"
              @click="deleteTodo(todo.id)"
            ></i>
            {{ todo.title }}
            <!-- <input type="radio" checked="checked" name="radio" /> -->
            <!-- <span class="checkmark"></span> -->
          </label>
        </div>
        <add-todo></add-todo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";
import Header from "../../views/Header";
import axios from "axios";
export default {
  name: "Todos",
  components: { AddTodo, Header },
  data() {
    return {
      date: new Date(),
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      days: [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ],
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: { ...mapGetters(["allTodos"]) },
  created() {
    this.fetchTodos();
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

<style scoped>
.todos__date {
  text-transform: capitalize;
}
</style>
