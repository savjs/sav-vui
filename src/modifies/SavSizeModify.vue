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
            text: '大小',
            value: ''
          }
        ].concat(makeOptions(['small', 'large']))
      }
    },
    components: {
      SavSelect
    }
  }
</script>
