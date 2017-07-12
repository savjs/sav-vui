<template>
  <div>
    <sav-radio v-model="radio">点一个试试[{{radio}}]</sav-radio>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: false
      }
    }
  }
</script>