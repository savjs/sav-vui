<template>
  <div :class="['sav-message', colorModify]" v-show="showMess">
    <div v-if="type === 'default'" class="message-default">
      <sav-icon class="message-icon-close" icon="pt-cancel" @click.native="closeMessage"></sav-icon>
      <slot></slot>
    </div>
    <div class="message-tip" v-else>
      <sav-icon v-if="type==='success'" icon="fa-check-circle"></sav-icon>
      <sav-icon v-else-if="type==='error'" icon="fa-times-circle"></sav-icon>
      <sav-icon v-else-if="type==='warn'" icon="fa-exclamation-circle"></sav-icon>
      <sav-icon v-else-if="type==='info'" icon="fa-info-circle"></sav-icon>
      <slot></slot>
    </div>
  </div>

</template>
<script>
  import SavIcon from './SavIcon.vue'
  import {elements} from '../mixin'
  export default {
    mixins: elements,
    components: {
      SavIcon
    },
    props: {
      opens: {
        type: [Boolean, String],
        default: false
      },
      type: {
        type: String,
        default: ''
      }
    },
    data (){
      return {
        showMess: false
      }
    },
    watch: {
      opens (newValue){
        let it = this
        if(newValue === true){
          this.showMess = newValue
          if(this.type !== 'default'){
            setTimeout(() => {
              it.showMess = false
            }, 3000)
          }
          this.$emit('change', false)
        }
      }
    },
    methods: {
      closeMessage (){
        this.showMess = false
      }
    }
  }
</script>
