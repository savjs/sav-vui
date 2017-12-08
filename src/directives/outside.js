let event = 'click'
let arr = []

function trigger (event) {
  arr.forEach(({ el, fn }) => {
    if (event.target !== el && !el.contains(event.target)) {
      fn && fn(event)
    }
  })
}

export default {
  bind (el, binding) {
    if (!arr.length) {
      document.addEventListener(event, trigger)
    }
    arr.push({ el, fn: binding.value })
  },
  unbind (el) {
    const instanceIndex = arr.findIndex(i => i.el === el)
    arr.splice(instanceIndex, 1)
    if (!arr.length) {
      document.removeEventListener(event, trigger)
    }
  },
  update (el, binding) {
    const instance = arr.find(i => i.el === el)
    instance.fn = binding.value
  }
}
