<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
    };
  },
  name: "AddTodo",
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit: function(e) {
      e.preventDefault();
      console.log(this.title);
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style scoped></style>
