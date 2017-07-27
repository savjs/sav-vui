<template>
  <transition name="effect">
    <div class="sav-message" v-show="showMess">
      <div v-if="type === 'success'" :class="['message-tip', {'is-success': type === 'success'}]">
        <sav-icon icon="fa-check-circle"></sav-icon>
        <slot></slot>
      </div>
      <div v-if="type === 'fail'" :class="['message-tip', {'is-fail': type === 'fail'}]">
        <sav-icon icon="fa-times-circle"></sav-icon>
        <slot></slot>
      </div>
      <div v-if="type === 'info'" :class="['message-tip', {'is-info': type === 'info'}]">
        <sav-icon icon="fa-info-circle"></sav-icon>
        <slot></slot>
      </div>
      <div v-if="type === 'notice'" :class="['message-tip', {'is-notice': type === 'notice'}]">
        <sav-icon icon="fa-exclamation-circle"></sav-icon>
        <slot></slot>
      </div>

      <div v-if="type === 'default'" class="message-default">
        <sav-icon class="message-icon-close" icon="pt-cancel" @click.native="closeMessage"></sav-icon>
        <slot></slot>
      </div>
    </div>


  </transition>
</template>
<script>
  import SavIcon from './SavIcon.vue'
  export default {
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
        default: 'info'
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
