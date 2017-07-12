<template>
  <div class="component-index">
    <sav-select v-model="current" :options="components"></sav-select>
    <api :api="current"></api>
  </div>
</template>
<script>
  export default {
    name: 'ComponentIndex',
    getters: [
      'components'
    ],
    data () {
      return {
        current: 'SavTab'
      }
    }
  }
</script>
