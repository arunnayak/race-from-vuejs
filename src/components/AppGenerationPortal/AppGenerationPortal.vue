<template>
  <div class="app-generation-portal">
    <app-sidebar></app-sidebar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppGenerationPortal',
  data () {
    return {
      msg: 'This is app generation portal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
