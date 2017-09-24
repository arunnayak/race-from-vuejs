<template>
    <div class="details">
        <app-designer-header></app-designer-header>
        <section class="details__container">
            {{msg}}
        </section>
    </div>
</template>
<script>
export default {
  name: 'details',
  data () {
    return {
      msg: 'This is details'
    }
  }
}
</script>
<style lang="scss">
@import './details.scss';
</style>


