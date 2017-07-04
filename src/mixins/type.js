import {trust} from '../utils/util.js'

export default {
  props: {
    type: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    typeModify () {
      return trust(this.type) ? `is-${this.type}` : ''
    }
  }
}
