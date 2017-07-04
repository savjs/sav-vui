<template>
  <div class="doc-api">
    <sav-tab type="boxed">
      <a class="as-item is-active">Hello</a>
      <a class="as-item">World</a>
    </sav-tab>
  </div>
</template>
<script>
  export default {
    props: {
      props: {
        type: Array,
        default: Array
      },
      slots: {
        type: Array,
        default: Array
      },
      events: {
        type: Array,
        default: Array
      }
    }
  }
</script>
