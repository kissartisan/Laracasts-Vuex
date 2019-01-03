<template>
    <div class="container">
        <p>{{ count }}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        mounted() {
            console.log(this.$store.state.count);
        },
        methods: {
            ...mapMutations(['increment'])
        },
        computed: mapState(['count'])
    }
</script>
