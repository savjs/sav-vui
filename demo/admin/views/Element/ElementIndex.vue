<template>
  <div class="element-index">
    <sav-select v-model="current" :options="elements" @input="saveStorage"></sav-select>
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
        current: localStorage.currentSavElement || 'SavBtn'
      }
    },
    methods: {
      saveStorage (val) {
        localStorage.currentSavElement = val
      }
    }
  }
</script>
