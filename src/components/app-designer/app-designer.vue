<template>
  <div class="app-designer">
    <div class="col-md-2 no-padding">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-md-10 no-padding">
      <div class="app-designer__cw">
        <app-topmenu></app-topmenu>
        <div class="app-designer__content">
          this is {{msg}}
          <br/>
          <br/>
          <a class="btn btn-primary" href="#/app-designer/list">
            Launch designer
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appDesigner',
  data () {
    return {
      msg: 'This is app designer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './app-designer.scss';
</style>
