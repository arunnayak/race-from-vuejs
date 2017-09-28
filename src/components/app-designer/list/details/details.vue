<template>
    <div class="details">
        <app-designer-header></app-designer-header>
          <div class="details__container">

             <rs-panes split-to="columns" :allow-resize="true">
                
                <div slot="firstPane">
                  LEFT
                </div>

                <rs-panes :size="300" :allowResize="true" split-to="columns" slot="secondPane" primary="second">
                  
                  <div slot="firstPane">
                    LEFT
                  </div>
                  
                </rs-panes>

              </rs-panes>

          </div>
        </section>
    </div>
</template>
<script>
import ResSplitPane from 'vue-resize-split-pane'

export default {
  name: 'details',
  components: {
    'rs-panes': ResSplitPane,
    props: {
      'size': {type: 600}
    }
  },
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


