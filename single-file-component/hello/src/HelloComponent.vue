<template lang="pug">
  h1 {{ msg }}
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
