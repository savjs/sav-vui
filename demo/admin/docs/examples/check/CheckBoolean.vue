<template>
  <div>
    <sav-check v-model="c1">香蕉[{{c1}}]</sav-check>
    <sav-check v-model="c2">苹果[{{c2}}]</sav-check>
    <sav-check v-model="c3">西瓜[{{c3}}]</sav-check>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        c1: false,
        c2: true,
        c3: false,
      }
    }
  }
</script>
