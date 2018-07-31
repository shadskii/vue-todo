import Vue from "vue";
import Vuex from "vuex";
import Todo from "../Todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { todos: [] },
  getters: {
    incompleteTodos: state => {
      return state.todos.filter(t => !t.done);
    },
    allTodos: state => state.todos,
    isComplete: (state, todo) =>
      state.todos.filter(t => t.id === todo.id).complete
  },
  mutations: {
    completeTodo(state, id) {
      state.todos.filter(t => t.id === id).forEach(t => (t.done = !t.done));
    },
    addTodo(state, text, id) {
      state.todos.push(new Todo(text, id));
    }
  },
  actions: {}
});
