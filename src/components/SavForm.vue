<template>
  <div :class="['sav-flex-block', isAlign]">
    <form :class="['sav-form', isAlign, horizontal ? 'is-horizontal': 'is-vertical']">
      <slot></slot>
    </form>
  </div>
</template>
<script>
  export default {
    props: {
      isAlign: {
        type: String,
        default: 'is-center'
      },
      horizontal: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
