<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-footer app color="primary" height="20">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by
              <a class="white--text" href="https://github.com/shadskii" target="_blank">Jake</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-navigation-drawer>
    <v-toolbar app extended color="primary">
      <v-btn fab small color="cyan accent-2" bottom left absolute @click.native.stop="dialog = !dialog">
        <v-icon v-if="!dialog">add</v-icon>
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <v-slide-y-transition v-if="dialog">
        <v-card>
          <v-card-text>
            <v-text-field v-model="text" label="Add something to do"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click.native="addTodo">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-y-transition>
      <todo-list/>
    </v-content>

  </v-app>
</template>

<script>
import TodoList from "./components/TodoList.vue";

const hashCode = function(s) {
  return s.split("").reduce(function(a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

export default {
  name: "App",
  components: {
    TodoList
  },
  data() {
    return {
      dialog: false,
      drawer: false,
      fixed: false,
      text: "",
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      title: "What do I need to do?"
    };
  },
  methods: {
    addTodo() {
      let msg = this.text;
      this.$store.commit("addTodo", msg, hashCode(msg));
      this.dialog = false;
      this.text = "";
    }
  }
};
</script>
