<template>
  <div class="doc-api">
    <sav-tab v-model="currentTab" :options="options">
    </sav-tab>
  </div>
</template>
<script>
  export default {
    props: {
      props: {
        type: Array,
        default: Array
      },
      slots: {
        type: Array,
        default: Array
      },
      events: {
        type: Array,
        default: Array
      },
    },
    data () {
      return {
        currentTab: 'prop',
        options: [
          {text: 'props', value: 'prop'},
          {text: 'slots', value: 'slot'},
          {text: 'events', value: 'event'}
        ]
      }
    }
  }
</script>
