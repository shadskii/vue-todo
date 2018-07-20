import Vue from "vue";
import Vuex from "vuex";
import Todo from "./Todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { todos: [new Todo("hi", 1), new Todo("hello", 2)] },
  getters: {
    incompleteTodos: state => {
      return state.todos.filter(t => !t.done);
    },
    allTodos: state => state.todos
  },
  mutations: {
    completeTodo(state, id) {
      state.todos.filter(t => t.id === id).forEach(t => (t.done = !t.done));
    }
  },
  actions: {}
});
