<template>
  <span class="sav-radio-group">
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
  import mixins from '../mixins/element.js'
  import option from '../mixins/option.js'
  let radioId = 0
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
        innerName: 'srn-' + radioId++
      }
    },
    methods: {
      changeValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
