<template>
  <div>
    <div class="as-control">
      <sav-color-modify v-model="color"></sav-color-modify>
      <sav-size-modify v-model="size"></sav-size-modify>
      <sav-check v-model="block">is-block</sav-check>
    </div>
    <div class="as-preview">
      <sav-radio v-model="fruit" option="1" :color="color" :size="size" :block="block">香蕉</sav-radio>
      <sav-radio v-model="fruit" option="2" :color="color" :size="size" :block="block">苹果</sav-radio>
      <sav-radio v-model="fruit" option="3" :color="color" :size="size" :block="block">西瓜</sav-radio>
      <div>fruitId: {{fruit}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fruit: '1',
        color: false,
        size: false,
        block: false
      }
    }
  }
</script>