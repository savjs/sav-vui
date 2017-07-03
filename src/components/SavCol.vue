<template>
  <div :class="['sav-col', colModify, offsetModify]">
    <slot></slot>
  </div>
</template>
<script>
  import offset from '../mixins/offset.js'
  import col from '../mixins/col.js'
  export default {
    mixins: [col, offset]
  }
</script>