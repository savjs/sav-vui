<template>
  <span :class="['sav-radio-group', verticalModify]">
    <label :class="['sav-radio', disabledModify, colorModify, sizeModify]" v-for="opt in options">
      <input type="radio" :name="inputName || innerName" 
        :value="opt[valueField]"
        @change="changeValue(opt[valueField])"
        :checked='value == opt[valueField]'
        :disabled="disabled">
      <span class="as-text">{{opt[textField]}}</span>
    </label>
  </span>
</template>
<script>
  import {elements, options, createMixins} from '../mixin'
  let incId = 0
  export default {
    mixins: elements.concat(options, createMixins(['vertical'])),
    props: {
      inputName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        innerName: 'srn-' + incId++
      }
    },
    methods: {
      changeValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
