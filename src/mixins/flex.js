import {trust} from '../utils/util.js'

export default {
  props: {
    flex: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    flexModify () {
      return trust(this.flex) ? `is-${this.flex}` : ''
    }
  }
}
