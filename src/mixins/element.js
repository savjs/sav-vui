import color from './color.js'
import size from './size.js'
import {trust} from '../utils/util.js'

export default [color, size, {
  props: {
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    disabledModify () {
      return trust(this.disabled) ? `is-${this.disabled}` : ''
    }
  }
}]
