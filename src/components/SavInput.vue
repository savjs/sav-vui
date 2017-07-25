<template>
  <input :class="['sav-input', disabledModify, colorModify, sizeModify]"
         :type="type"
         :disabled="disabled"
         v-model="value"
  />
</template>
<script>
  import {elements} from '../mixin'
  export default {
    mixins: elements,
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {

    }
  }
</script>
