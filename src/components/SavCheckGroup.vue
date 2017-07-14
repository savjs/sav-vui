<template>
  <span class="sav-check-group">
    <sav-check :disabled="disabled" :color="color" :size="size" v-for="opt in options"
      v-bridge
      :value="value"
      :option="isTiny ? opt : opt[valueField]"
      >{{isTiny ? opt : opt[textField]}}</sav-check>
  </span>
</template>
<script>
  import {elements, options} from '../mixin'
  import {trust} from '../utils/util.js'
  let incId = 0
  export default {
    mixins: [...elements, ...options],
    props: {
      inputName: {
        type: String,
        default: ''
      },
      tiny: {
        type: [Boolean, String, Number],
        default: false
      }
    },
    computed: {
      isTiny () {
        return trust(this.tiny)
      }
    },
    data () {
      return {
        innerName: 'scn-' + incId++
      }
    }
  }
</script>
