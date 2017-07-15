/**
 * 组件事件桥接
 *   可以省略掉 v-on 的 $emit
 * v-bridge 默认桥接 input事件
 * v-bridge.change='input' 将change事件转换为input并emit, 也就是 $emit('input', ..args)
 */
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
