<template>
  <div :class="['sav-tab-nav', colorModify, sizeModify, flexModify, typeModify]">
    <slot></slot>
  </div>
</template>
<script>
  import color from '../mixins/color.js'
  import size from '../mixins/size.js'
  import flex from '../mixins/flex.js'
  import type from '../mixins/type.js'
  export default {
    mixins: [color, size, flex, type],
  }
</script>
