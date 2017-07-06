<template>
  <div :class="['sav-col', colModify, offsetModify]">
    <slot></slot>
  </div>
</template>
<script>
  import {createMixins} from '../mixin'
  export default {
    mixins: createMixins(['col', 'offset'])
  }
</script>