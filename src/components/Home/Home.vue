<template>
  <div class="home">
    <app-sidebar></app-sidebar>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue'

export default {
  name: 'Home',
  comments: {
    'app-sidebar': Sidebar
  },
  data () {
    return {
      msg: 'This is home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
