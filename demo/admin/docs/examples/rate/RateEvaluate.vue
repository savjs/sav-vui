<template>
  <div>
    <sav-rate :stars="starNumber" :evaluate="evaluate" icon="fa-github-alt"></sav-rate>
    <sav-rate></sav-rate>
    <sav-rate disabled v-model="value" :showtext="false"></sav-rate>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 2,
        starNumber: 5,
        evaluate: ['一星','二星','三星','四星','五星']
      }
    }
  }
</script>
