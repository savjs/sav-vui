<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <sav-radio v-model="radio" :color="color" :size="size">点一个试试[{{radio}}]</sav-radio>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: false,
        color: false,
        size: false
      }
    }
  }
</script>