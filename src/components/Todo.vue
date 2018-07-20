<template>
    <v-list-tile >
        <v-list-tile-action>
            <v-checkbox :v-model="complete"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content @click="toggle">
            <v-list-tile-title>{{todo.msg}}</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</template>
<script>
import Todo from "../Todo";
export default {
  name: "Todo",
  data: function() {
    return {
      complete: false
    };
  },
  props: {
    todo: Todo
  },
  methods: {
    toggle() {
      this.complete = !this.complete;
    }
  }
};
</script>
