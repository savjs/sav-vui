<template>
  <i :class="['as-icon', icon]"></i>
</template>
<script>
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      }
    }
  }
</script>
