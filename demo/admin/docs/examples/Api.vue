<template>
  <div class="doc-api">
    <sav-tab-nav>
      <a class="as-item is-active">Hello</a>
      <a class="as-item">World</a>
    </sav-tab-nav>
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
