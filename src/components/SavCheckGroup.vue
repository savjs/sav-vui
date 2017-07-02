<template>
  <span class="sav-check-group">
    <sav-check :disabled="disabled" :color="color" :size="size" v-for="opt in options"
      v-bridge
      :value="value"
      :option="opt[valueField]"
      >{{opt[textField]}}</sav-check>
  </span>
</template>
<script>
  import mixins from '../mixins/element.js'
  import option from '../mixins/option.js'
  let incId = 0
  export default {
    mixins: [...mixins, option],
    props: {
      inputName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        innerName: 'scn-' + incId++
      }
    }
  }
</script>
