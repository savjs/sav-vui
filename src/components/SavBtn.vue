<template>
  <router-link v-if="to" :class="['sav-btn', disabledModify, colorModify, sizeModify]" :to="to" >
    <slot></slot>
  </router-link>
  <button v-else :class="['sav-btn', disabledModify, colorModify, sizeModify]" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
  import mixins from '../mixins/element.js'
  export default {
    mixins,
    props: {
      to: {
        type: [Boolean, Object],
        default: false
      }
    }
  }
</script>
