<template>
    <div>
        <li class="todo" :class="{ 'is-complete': todo.done }">
            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
            <label for="todo" v-text="todo.body"></label>
            <button @click="deleteTodo(todo)">X</button>
        </li>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: ['todo'],

        methods: {
            ...mapMutations(['deleteTodo', 'toggleTodo'])
        },

        mounted() {
            console.log('TODO mounted');
        }
    }
</script>

<style scoped>
    .is-complete {
        color: grey;
    }
</style>


