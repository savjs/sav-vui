<template>
  <div :class="['sav-flex-block', alignModify]">
    <form :class="['sav-form', alignModify, horizontal ? 'is-horizontal': 'is-vertical', growModify]">
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
        type: Boolean,
        default: false
      },
      grow: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      growModify () {
        return trust(this.grow) ? `has-grow-${this.grow}` : ''
      }
    }
  }
</script>
