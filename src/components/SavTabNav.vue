<template>
  <div :class="['sav-tab-nav', colorModify, sizeModify, flexModify, typeModify]">
    <slot></slot>
  </div>
</template>
<script>
  import {createMixins} from '../mixin.js'
  export default {
    mixins: createMixins(['color', 'size', 'flex', 'type']),
  }
</script>
