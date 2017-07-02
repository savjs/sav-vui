<template>
  <sav-select :value="value" v-bridge :options="options"></sav-select>
</template>
<script>
  import SavSelect from '../components/SavSelect.vue'
  import {makeOptions} from '../utils/util.js'

  export default {
    props: {
      value: {
        type: [String],
        default: ''
      }
    },
    data () {
      return {
        options: [
          {
            text: '颜色',
            value: ''
          },
        ].concat(makeOptions(['primary', 'secondary', 'success', 'warn', 'error']))
      }
    },
    components: {
      SavSelect
    }
  }
</script>
