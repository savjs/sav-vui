<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
    </div>
    <sav-flip :color="color" :size="size" :item="item"></sav-flip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,
        item: 10
      }
    }
  }
</script>
