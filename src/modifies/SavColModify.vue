<template>
  <sav-select :value="value" v-bridge :options="options" :placeholder="text"></sav-select>
</template>
<script>
  import SavSelect from '../components/SavSelect.vue'

  function makeCol (ensure, prefix, size, text) {
    let ret = Array(size + 1).fill(0).map((it, id) => {
      return {
        text: id ? `${prefix}-${id}` : text,
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
      },
      size: {
        type: Number,
        default: 12
      },
      text: {
        type: String,
        default: '栅格'
      }
    },
    computed: {
      options () {
        return makeCol(this.ensure, this.prefix, this.size, this.text)
      }
    },
    components: {
      SavSelect
    }
  }
</script>
