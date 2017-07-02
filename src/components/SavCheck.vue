<template>
  <label :class="['sav-check', disabledModify, colorModify, sizeModify]">
    <input type="checkbox" :disabled="disabled"
      :checked="isChecked"
      :value="option"
      @change="changeValue">
    <span class="as-text">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import mixins from '../mixins/element.js'
  export default {
    mixins,
    props: {
      value: {
        type: [Array, Boolean],
        default: false
      },
      option: {
        default: null
      }
    },
    computed: {
      isOption () {
        return this.option !== null
      },
      isChecked () {
        if (this.isOption) {
          return this.value.indexOf(this.option) >= 0
        }
        return !!this.value
      }
    },
    methods: {
      changeValue (val) {
        if (this.isOption) {
          let arr
          if (this.isChecked) {
            arr = this.value.filter((it) => it != this.option)
          } else {
            arr = this.value.concat(this.option)
          }
          this.$emit('input', arr)
        } else {
          this.$emit('input', !this.value)
        }
      }
    }
  }
</script>
