<template>
  <div :class="['sav-switch', sizeModify, {'sw-on': on, 'sw-disabled': disabled}]" @click="swit">
    <div class="roll-boll"></div>
    <span class="sw-cont-off" v-if="swType">OFF</span>
    <span class="sw-cont-on" v-else>ON</span>
  </div>
</template>
<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['size']),
    data (){
      return {
        on: false,
        swType: true
      }
    },
    props: {
      disabled: {
        type: [Boolean, String],
        default: false
      },
      size: {
        type: [Boolean, String],
        default: ''
      }
    },
    watch: {
      size (newValue){
        console.log(newValue)
      }
    },
    methods: {
      swit (){
        if(this.disabled == false){
          this.on = !this.on
          if(this.on == true){
            this.swType = false
            this.$emit('notice', true)
          }else{
            this.swType = true
            this.$emit('notice', false)
          }
        }
      }
    }
  }
</script>
