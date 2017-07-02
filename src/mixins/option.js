
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    textField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    options: {
      type: Array,
      default: []
    }
  }
}
