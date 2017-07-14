<template>
  <div>
    <div class="as-control">
      <sav-check v-model="block">is-block</sav-check>
    </div>
    <div class="as-preview">
      <sav-radio v-model="fruit" option="1" :block="block">香蕉</sav-radio>
      <sav-radio v-model="fruit" option="2" :block="block">苹果</sav-radio>
      <sav-radio v-model="fruit" option="3" :block="block">西瓜</sav-radio>
      <div>fruitId: {{fruit}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fruit: '1',
        block: false
      }
    }
  }
</script>