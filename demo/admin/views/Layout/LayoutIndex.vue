<template>
  <div class="layout-index">
    <sav-select v-model="current" :options="layouts"></sav-select>
    <api :api="current"></api>
  </div>
</template>
<script>
  export default {
    name: 'LayoutIndex',
    getters: [
      'layouts'
    ],
    data () {
      return {
        current: 'SavRow'
      }
    }
  }
</script>
