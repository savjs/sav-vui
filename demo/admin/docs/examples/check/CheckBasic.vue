<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <div class="as-preview">
      <sav-check v-model="c1" :color="color" :size="size">香蕉[{{c1}}]</sav-check>
      <sav-check v-model="c2" :color="color" :size="size" :disabled = "true">苹果[{{c2}}]</sav-check>
      <sav-check v-model="c3" :color="color" :size="size">西瓜[{{c3}}]</sav-check>      
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,
        c1: false,
        c2: true,
        c3: false,
      }
    }
  }
</script>
