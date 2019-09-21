<template lang="pug">
  h1 {{ msg }}
</template>

<script>
export default {
  data() {
    return {
      msg: 'Obdurate!'
    }
  }
}
</script>

<style lang="sass" scoped>
$red: red
h1
  color: $red

</style>
