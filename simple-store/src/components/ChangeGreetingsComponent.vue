<template>
    <input :value='msg' @keyup='changeMsg'>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        // props: ['msg'],
        computed: mapGetters({
            msg: 'getMessage'
        }),
        methods: {
            changeMsg (ev) {
                this.$store.commit(CHANGE_MSG, ev.target.value)
            }
        }
    }
</script>