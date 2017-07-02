import {trust} from '../utils/util.js'

export default {
  props: {
    col: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    colModify () {
      return trust(this.col) ? `is-${this.col}` : ''
    }
  }
}
