<template>
    <div>
        <p>The value of other component is synced because of Vuex: {{ count }}</p>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
</script>

