<template>
  <div :class="['sav-flex-block', alignModify]">
    <form :class="['sav-form', alignModify, horizontalModify, growModify]">
      <slot></slot>
    </form>
  </div>
</template>
<script>
  import {createMixins} from '../mixin'
  import {trust} from '../utils/util.js'
  export default {
    mixins: createMixins(['align']),
    props: {
      align: {
        default: 'center'
      },
      horizontal: {
        type: [Boolean, Number, String],
        default: false
      },
      grow: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      horizontalModify () {
        return trust(this.horizontal) ? `is-horizontal` : 'is-vertical'
      },
      growModify () {
        return trust(this.grow) ? `has-grow-${this.grow}` : ''
      }
    }
  }
</script>
