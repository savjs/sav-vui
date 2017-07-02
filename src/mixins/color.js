import {trust} from '../utils/util.js'

export default {
  props: {
    color: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    colorModify () {
      return trust(this.color) ? `is-${this.color}` : ''
    }
  }
}
