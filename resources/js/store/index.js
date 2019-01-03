import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { body: 'Learn VueJS', done: true },
            { body: 'Learn Vuex', done: false },
            { body: 'Learn VueRouter', done: false }
        ]
    },
    mutations: {
        addTodo({ todos }, body) {
            todos.push({
                body,
                done: false
            })
        },
        completeAll({todos}) {
            todos.forEach(todo => todo.done = true);
        },
        toggleTodo(state, todo) {
            todo.done = ! todo.done;
        },
        deleteTodo({todos}, todo) {
            todos.splice(todos.indexOf(todo), 1);
        }
    }
});
