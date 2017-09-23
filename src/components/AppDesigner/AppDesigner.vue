<template>
  <div class="app-desigenr">
    <app-sidebar></app-sidebar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppDesigner',
  data () {
    return {
      msg: 'This is app designer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
