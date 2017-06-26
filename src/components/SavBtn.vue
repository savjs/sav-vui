<template>
  <router-link v-if="to" :class="['sav-btn', disabled ? 'is-disabled' : '']" :to="to" >
    <slot></slot>
  </router-link>
  <button v-else :class="['sav-btn']" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: {
      to: {
        type: [Boolean, Object],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
