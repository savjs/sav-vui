<template>
  <div :class="['sav-tile', colModify, flexModify, {
      'is-block': !flex && block,
      'is-vertical': vertical
    }]">
    <slot></slot>
  </div>
</template>
<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['flex', 'col']),
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
