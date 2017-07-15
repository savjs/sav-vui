<template>
  <div class="layout-index">
    <sav-select v-model="current" :options="layouts" @input="saveStorage"></sav-select>
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
        current: localStorage.currentSavLayout || 'SavRow'
      }
    },
    methods: {
      saveStorage (val) {
        localStorage.currentSavLayout = val
      }
    }
  }
</script>
