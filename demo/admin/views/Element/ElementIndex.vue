<template>
  <div class="element-index">
    <sav-select v-model="current" :options="elements"></sav-select>
    <api :api="current"></api>
  </div>
</template>

<script>
  export default {
    name: 'ElementIndex',
    getters: [
      'elements'
    ],
    data () {
      return {
        current: 'SavBtn'
      }
    }
  }
</script>
