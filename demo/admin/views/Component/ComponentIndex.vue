<template>
  <div class="component-index">
    <sav-select v-model="current" :options="components" @input="saveStorage"></sav-select>
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
        current: localStorage.currentSavComponent || 'SavTab'
      }
    },
    methods: {
      saveStorage (val) {
        localStorage.currentSavComponent = val
      }
    }
  }
</script>
