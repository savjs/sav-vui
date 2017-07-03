<template>
  <sav-select :value="value" v-bridge :options="options" :placeholder="栅格"></sav-select>
</template>
<script>
  import SavSelect from '../components/SavSelect.vue'

  function makeCol (ensure, prefix) {
    let ret = Array(13).fill(0).map((it, id) => {
      return {
        text: id ? `${prefix}-${id}` : '栅格',
        value: id
      }
    })
    return ensure ? ret.slice(1) : ret
  }

  export default {
    props: {
      value: {
        type: [Number, String],
        default: 0
      },
      ensure: {
        type: Boolean,
        default: false
      },
      prefix: {
        type: String,
        default: 'is'
      }
    },
    data () {
      return {

      }
    },
    computed: {
      options () {
        return makeCol(this.ensure, this.prefix)
      }
    },
    components: {
      SavSelect
    }
  }
</script>
