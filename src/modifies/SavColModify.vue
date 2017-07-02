<template>
  <sav-select :value="value" v-bridge :options="cols"></sav-select>
</template>
<script>
  import SavSelect from '../components/SavSelect.vue'
  export default {
    props: {
      value: {
        type: [Number, String],
        default: 0
      }
    },
    data () {
      return {
        cols: Array(13).fill(0).map((it, id) => {
          return {
            text: id ? `is-${id}` : '栅格',
            value: id
          }
        })
      }
    },
    components: {
      SavSelect
    }
  }
</script>
