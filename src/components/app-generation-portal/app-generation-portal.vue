<template>
  <div class="app-portal">
    <div class="col-md-2 no-padding">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-md-10 no-padding">
      <div class="app-portal__cw">
        <app-topmenu></app-topmenu>
        <div class="app-portal__content">
          this is {{msg}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appGenerationPortal',
  data () {
    return {
      msg: 'This is app generation portal'
    }
  }
}
</script>
<style lang="scss">
@import './app-portal.scss';
</style>
