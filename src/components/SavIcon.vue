<template>
  <i :class="['as-icon', icon, colorModify, sizeModify]"></i>
</template>
<script>
  import {createMixins} from '../mixin'
  export default {
    mixins: createMixins(['color', 'size']),
    props: {
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>
