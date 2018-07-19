<template>
    <v-list
    two-line>
        <todo 
        v-for="t in todos"
        :key="t"
        :msg="t"
        />
    </v-list>
</template>
<script>
import Todo from "./Todo.vue";
export default {
  name: "TodoList",
  data: function() {
    return {
      todos: ["Do something", "Another thing", "4 more things"]
    };
  },
  components: {
    Todo
  }
};
</script>
