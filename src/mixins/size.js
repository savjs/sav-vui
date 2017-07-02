import {trust} from '../utils/util.js'

export default {
  props: {
    size: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    sizeModify () {
      return trust(this.size) ? `is-${this.size}` : ''
    }
  }
}
