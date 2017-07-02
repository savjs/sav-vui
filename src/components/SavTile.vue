<template>
  <div :class="['sav-tile', colModify, flexModify, {
      'is-block': !flex && block,
      'is-vertical': vertical
    }]">
    <slot></slot>
  </div>
</template>
<script>
  import flex from '../mixins/flex.js'
  import col from '../mixins/col.js'
  export default {
    mixins: [flex, col],
    props: {
      block: {
        default: false
      },
      vertical: {
        default: false
      }
    }
  }
</script>
