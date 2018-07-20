<template>
    <v-list
    two-line>
        <todo 
        v-for="t in todos"
        :key="t.msg"
        :todo="t"
        />
    </v-list>
</template>
<script>
import Todo from "./Todo.vue";
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.getters.incompleteTodos;
    }
  },
  components: {
    Todo
  }
};
</script>
