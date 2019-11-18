<template>
    <input :value='getMessage' @keyup='changeMsg'>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        // props: ['msg'],
        computed: {
            msg () {
                return this.$store.getters.getMessage
            }
        },
        methods: {
            changeMsg (ev) {
                this.$store.commit('changeMessage', ev.target.value)
            }
        }
    }
</script>