import {trust} from '../utils/util.js'

export default {
  props: {
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    offsetModify () {
      return trust(this.offset) ? `is-offset-${this.offset}` : ''
    }
  }
}
