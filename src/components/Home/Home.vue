<template>
  <div class="home">
    <div class="col-md-2 no-padding">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-md-10 no-padding">
      <div class="home__content">
        <app-topmenu></app-topmenu>
        this is {{msg}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
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
