<template>
    <div class="container">
        <p>The square root of {{ count }} is {{ sqrt }}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState(['count']),
            ...mapGetters(['sqrt']),
        },
        methods: {
            ...mapActions(['increment']),
        }
    }
</script>
