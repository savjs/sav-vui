
export default {
  bind (el, binding, {componentInstance, context}, newVNode) {
    if (!(componentInstance && context)) {
      // console.log(newVNode)
      return
    }
    let modifiers = Object.keys(binding.modifiers)
    modifiers.length || (modifiers.push('input'))
    modifiers.forEach((modify) => {
      let ret = componentInstance.$on(modify, function (...args) {
        args.unshift(binding.expression || modify)
        context.$emit.apply(context, args)
      })
    })
  }
}
