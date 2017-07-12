<template>
  <div>
    <sav-radio v-model="fruit" option="1">香蕉</sav-radio>
    <sav-radio v-model="fruit" option="2">苹果</sav-radio>
    <sav-radio v-model="fruit" option="3">西瓜</sav-radio>
    <div>fruitId: {{fruit}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fruit: '1',
      }
    }
  }
</script>