<template>
  <div class="landing">
    <h1>{{ msg }}</h1>
    <a href="#/home">Try for free</a>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'This is Landing'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
