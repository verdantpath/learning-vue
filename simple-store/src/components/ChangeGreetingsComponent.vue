<template>
    <input :value='msg' @keyup='handleMessageInputChanges($event)'>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    // props: ['msg'],
    computed: mapGetters({
        msg: 'getMessage'
    }),
    methods: mapActions(['handleMessageInputChanges'])
}
</script>