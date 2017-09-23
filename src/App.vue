<template>
  <div class="wrapper" id="app">
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'assets/scss/default.scss';
@import 'assets/scss/sidebar.scss';
</style>
