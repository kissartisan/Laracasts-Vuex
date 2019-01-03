
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import store from './store';

Vue.component('todo', require('./components/Todo.vue').default);
// Vue.component('counter', require('./components/Counter.vue').default);
// Vue.component('other-counter', require('./components/OtherCounter.vue').default);

import { mapState, mapMutations }  from 'vuex';
const app = new Vue({
    el: '#app',
    store,
    methods:{
        ...mapMutations(['completeAll', 'deleteTodo']),
        addTodo(e) {
            let body = e.target.value;

            this.$store.commit('addTodo', body);

            e.target.value = '';
        }
    },
    computed: {
        ...mapState(['todos']),
        allCompleted() {
            return this.todos.every(todo => todo.done);
        }
    }
});
