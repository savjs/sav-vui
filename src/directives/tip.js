
/**
 * tooltip提示
 * v-tip="text"
 * v-tip="bindValue"
 * html
 * v-tip.html="bindValue"
 * align
 * v-tip.left="left-text"
 * v-tip.right="right-text"
 */

export default {
  bind: applyBinding,
  update: applyBinding
}

function applyBinding (el, binding) {
  let ds = parseBinding(binding)
  if (!(ds || el.dataset)) {
    return
  }
  Object.assign(el.dataset, ds)
}

const aligns = ['top', 'left', 'right', 'bottom']

function parseBinding (binding) {
  let ret = {}
  let tipAlign = aligns.find((it) => binding.modifiers[it])
  let isHtml = binding.modifiers.html
  let tipValue = (binding.value !== undefined) ? binding.value : binding.expression
  if (tipValue) {
    if (tipAlign) {
      ret.tipAlign = tipAlign
    }
    if (isHtml) {
      ret.tipHtml = tipValue
    } else {
      ret.tip = tipValue
    }
    return ret
  }
}
