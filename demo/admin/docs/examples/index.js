import GridRowModify from './grid/GridRowModify.vue'
import BtnModify from './button/BtnModify.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  BtnModify,
  GridRowModify
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
