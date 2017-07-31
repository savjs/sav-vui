<template>
  <div>
    <div class="as-control">
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <sav-switch :disabled="true" :size="size"></sav-switch>
    <sav-switch :size="size"></sav-switch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        size: false
      }
    }
  }
</script>
