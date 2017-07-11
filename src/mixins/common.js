import {trust} from '../utils/util.js'

export default {
  props: {
    color: {
      type: [Boolean, String],
      default: false
    },
    size: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    flex: {
      type: [Boolean, String],
      default: false
    },
    col: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
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
      default: Array
    },
    option: {
      type: Object,
      default: Object
    },
    type: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    sizeModify () {
      return trust(this.size) ? `is-${this.size}` : ''
    },
    colModify () {
      return trust(this.col) ? `is-${this.col}` : ''
    },
    offsetModify () {
      return trust(this.offset) ? `is-offset-${this.offset}` : ''
    },
    colorModify () {
      return trust(this.color) ? `is-${this.color}` : ''
    },
    disabledModify () {
      return trust(this.disabled) ? `is-${this.disabled}` : ''
    },
    flexModify () {
      return trust(this.flex) ? `is-${this.flex}` : ''
    },
    typeModify () {
      return trust(this.type) ? `is-${this.type}` : ''
    }
  }
}
