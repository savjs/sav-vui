<template>
  <span :class="['sav-btn-group', dirModify]">
     <slot></slot>
  </span>
</template>
<script>
  import {createMixins} from '../mixin'
  export default {
    mixins: createMixins(['vertical']),
    computed: {
      dirModify () {
        return this.verticalModify || 'is-horizontal'
      }
    }
  }
</script>
