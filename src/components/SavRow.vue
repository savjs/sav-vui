<template>
  <div :class="['sav-row', isFloatModify, colModify]">
    <slot></slot>
  </div>
</template>
<script>
  import {trust} from '../utils/util.js'
  export default {
    props: {
      col: {
        type: [Number, String],
        default: 0
      },
      float : {
        default: false
      }
    },
    computed: {
      colModify () {
        return trust(this.col) ? `has-${this.col}` : ''
      },
      isFloatModify () {
        return trust(this.float) ? `is-float` : ''
      }
    }
  }
</script>
