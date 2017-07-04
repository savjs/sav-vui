<template>
  <i :class="['as-icon', icon, colorModify, sizeModify]"></i>
</template>
<script>
  import color from '../mixins/color.js'
  import size from '../mixins/size.js'
  export default {
    mixins: [color, size],
    props: {
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>
