import common from './mixins/common.js'

export function createMixins (types) {
  let ret = {
    props: {},
    computed: {}
  }
  let hasProps = false
  let hasComputed = false
  for (let it of types) {
    if (common.props[it]) {
      ret.props[it] = common.props[it]
      hasProps = true
    }
    let modify = `${it}Modify`
    if (common.computed[modify]) {
      ret.computed[modify] = common.computed[modify]
      hasComputed = true
    }
  }
  if (!hasProps) {
    delete ret.props
  }
  if (!hasComputed) {
    delete ret.computed
  }
  return [ret]
}

export const option = createMixins(['textField', 'valueField', 'value'])
export const options = createMixins(['textField', 'valueField', 'options', 'value'])
export const elements = createMixins(['color', 'size', 'disabled'])
