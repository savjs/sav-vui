<template>
  <div :class="['sav-dropdown', openModify, hoverModify]">
    <slot></slot>
    <div class="as-dropview">
      <slot name="dropview"></slot>
    </div>
  </div>
</template>
<script>
  import {trust} from '../utils/util.js'
  export default {
    props: {
      open: {
        type: [Boolean, String],
        default: false
      },
      hover: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      openModify () {
        return trust(this.open) ? `is-open` : ''
      },
      hoverModify () {
        return trust(this.hover) ? `has-hover-open` : ''
      }
    }
  }
</script>
