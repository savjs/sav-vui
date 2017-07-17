<template>
  <router-link v-if="to" :class="['sav-btn', disabledModify, colorModify, sizeModify]" :to="to" >
    <slot></slot>
  </router-link>
  <button v-else :class="['sav-btn', disabledModify, colorModify, sizeModify, {'is-loading':loading}]" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
  import {elements} from '../mixin'
  export default {
    mixins: elements,
    props: {
      to: {
        type: [Boolean, Object],
        default: false
      },
      loading: {
        type: [Boolean],
        default: false
      }
    }
  }
</script>
