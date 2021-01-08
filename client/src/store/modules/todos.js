// import axios from "axios";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const state = {
  todos: [],
};
const getters = { allTodos: (state) => state.todos };
const actions = {
  async fetchTodos({ commit }) {
    const token = localStorage.getItem("token");
    const response = await axios
      .get("/api/todos", {
        headers: {
          "x-auth-token": `${token}`,
        },
      })
      .then((response) => response)
      .catch(() => this.$router.push("token-error"));

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const token = localStorage.getItem("token");
    const response = await axios
      .post(
        "/api/todos",
        {
          id: uuidv4(),
          title,
          completed: false,
        },
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      )
      .catch(() => this.$router.push("token-error"));

    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`api/todos/${id}`);

    commit("removeTodo", id);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
