
<template>
  <span :class="['sav-btn-group', verticalModify]">
     <slot></slot>
  </span>
</template>
<script>
  import {elements , createMixins} from '../mixin'
  export default {
    mixins: elements.concat(createMixins(['vertical']))

  }
</script>
