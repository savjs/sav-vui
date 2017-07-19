<template>
  <div>
    <div class="as-control">
      <sav-size-modify v-model="size"></sav-size-modify>
      <sav-select v-model="value" :options="options"></sav-select>
    </div>
    <sav-flip :color="color" :size="size" :item="item" :type="value"></sav-flip>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        color: false,
        size: false,
        value: 'FlipGroup',
        item: 10,
        options: [
          {text:'FlipGroup', value:'FlipGroup'},
          {text:'SingleFlip', value:'SingleFlip'}
        ]
      }
    }
  }
</script>
